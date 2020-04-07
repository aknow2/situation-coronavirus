import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import SummaryCard from "../component/SummaryCard";
import ExpandController from "../component/ExpandController";
import MapLegendBar, { calcGradientColorGtoR, getLegendMinMaxVal, calcGradientColorYtoR } from "../component/MapLegendBar";
import { ColumnLayer } from '@deck.gl/layers';
import { DeckGL } from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { StaticMap } from 'react-map-gl';
import { Typography } from '@material-ui/core';
import { selectableSituationMap, selectableAxisMap, translate } from '../util';
import lsq from 'least-squares';

const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

const initialViewState = {
  longitude: 136.508297, 
  latitude: 34.730218,
  zoom: 2,
  pitch: 45,
  bearing: 0
};
const getOldValue = (c, old, selectedSituation) => {
  if(!old) {
    return undefined;
  }
  const area = old.find(o => o.id === c.id);
  if (!area) {
    return undefined;
  }
  const oldSituation = area[selectedSituation];
  return oldSituation ? oldSituation : 0;
};

const calcRate = (c, latestData, selectedSituation) => {
  const acc = latestData.reduce((acc, old, index) => {
    const y = getOldValue(c, old, selectedSituation);
    const nextData = latestData[index+1];
    if (!nextData) {
      return acc;
    }
    const nextY = getOldValue(c, nextData, selectedSituation)
    const prev = y === undefined? 0 : y;
    const next = nextY === undefined? 0 : nextY;
    acc.x.push(index);
    acc.y.push(next-prev);
    return acc
  }, {x: [], y: []})
  const ret = {};
  lsq(acc.x, acc.y, ret)
  return ret.m;
}

const deltaData = (current, old, selectedSituation, data, situationIndex) => {
  const latestData = data.slice(situationIndex > 7 ? situationIndex-8 : 0, situationIndex+1).map(s => s.areas)
  return current.map(c => {
    const oldValue = getOldValue(c, old, selectedSituation);
    const delta = oldValue !== undefined ? c[selectedSituation] - oldValue : undefined
    return {
      ...c,
      [selectedSituation]: delta,
      slope: calcRate(c, latestData, selectedSituation)
    }
  })
}

const expandSammaryHeight = 72;

const getElevationScale = (selectedAxis) => {
  switch (selectedAxis) {
    case selectableAxisMap.total:
      return 30;
    case selectableAxisMap.perMillion:
      return 50;
    case selectableAxisMap.new:
      return 300;
    default:
      return 1;
  }
}

const filterValidValue = (areas, key, selectedAxis) => {
  if (selectedAxis === selectableAxisMap.perMillion) {
    return areas.filter(area => area.population !== undefined)
  }
  return areas.filter(area => !!area[key]);
}

const million = 10000000;
const calcPlotData = (selectedAxis, selectedSituation, filteredData, oldData, data, situationIndex) => {

  if (selectedAxis === selectableAxisMap.perMillion) {
    return filteredData.map(data => {
      const v = data[selectedSituation] / data.population * million;
      return {
        ...data,
        [selectedSituation]: Math.floor(v*100)/100
      };
    })
  }
  return selectedAxis === selectableAxisMap.total ? filteredData : deltaData(filteredData, oldData, selectedSituation, data, situationIndex);
};
const getFillColor = (d, selectedAxis, selectedSituation) => {
  const count = (() => {
    if (selectedAxis === selectableAxisMap.new) {
      return d.slope
    }
    return d[selectedSituation]
  })();
  const range = getLegendMinMaxVal(selectedAxis, selectedSituation);
  if (selectedAxis === selectableAxisMap.new) {
    if (count === 0) {
      return [0, 255, 255];
    }
    if (count < 1) {
      return [0, 255, 0];
    }
    return calcGradientColorYtoR(count, range.max, 1);
  }
  return calcGradientColorGtoR(count, range.max, range.min);
}

function Map() {
  const [hoveredState, setHoveredState ] = useState({hoveredObject: undefined, pointerX: 0, pointerY: 0});
  const [selectedSituation, onSelectSituation] = useState(selectableSituationMap.total_confirmed);
  const [selectedAxis, onSelectAxis] = useState(selectableAxisMap.total);
  const renderTooltip = () => {
    const { hoveredObject, pointerX, pointerY } = hoveredState;
    return hoveredObject && (
      <div style={{color: 'white', position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
        <p>{ hoveredObject.name} - {translate(selectedAxis)} </p>
        <p>{translate(selectedSituation)} {hoveredObject.value}  </p>
        {
          hoveredObject.slope &&
          <p>{translate('slope')} {hoveredObject.slope}  </p>
        }
      </div>
    );
  }
  const onHover = info => {
    const data = info.object;
    if (data) {
      const name = data.name
      setHoveredState({
        hoveredObject: {
          name,
          value: data[selectedSituation],
          slope: data.slope
        },
        pointerX: info.x,
        pointerY: info.y
      })
    } else {
      setHoveredState({
        hoveredObject: undefined,
      })
    }
  };

  return (<SituationContext.Consumer>
      {({ situations, day, onChangeDate, nextDate, prevDate, dateList, displaySize, playing, play, pause }) => {
          if (situations.length  === 0) {
            return <div />
          }
          const mapHeight = displaySize === 'mobile' ? window.innerHeight - expandSammaryHeight : undefined
          const situationIndex = situations.findIndex(s => s.day === day)
          const situation = situations[situationIndex];
          const data = situation.areas;
          const additionalInfo = situation.additionalInfo;
          const oldSituation = situations[situationIndex - 1];
          const oldData = !!oldSituation? oldSituation.areas: undefined;
          const oldAdditionalInfo = !!oldSituation?oldSituation.additionalInfo : undefined;
          const getPosition =  d => {
            const result = d.location
            return [result[1], result[0], 0];
          } 
          const filteredData = filterValidValue(data, selectedSituation, selectedAxis)
          const plotData = calcPlotData(selectedAxis, selectedSituation, filteredData, oldData, situations, situationIndex);
          const layers = [
            new ColumnLayer({
              id: 'column-layer', 
              data: plotData,
              getPosition,
              pickable: true,
              filled: true,
              radius: 100000,
              extruded: true,
              elevationScale: getElevationScale(selectedAxis),
              getElevation: d => {
                return d[selectedSituation]
              },
              getFillColor: (d) => {
                return getFillColor(d, selectedAxis, selectedSituation);
              },
              getLineColor: d => [0, 0, 0],
              onHover,
            })
          ];
        return <div>
          <MapLegendBar 
            selectedSituation={selectedSituation}
            onSelectSituation={onSelectSituation}
            onSelectAxis={onSelectAxis}
            selectedAxis={selectedAxis}
            data={plotData}
          />
          {
            displaySize === 'desktop' &&
            <SummaryCard
              data={data}
              plotData={plotData}
              oldData={oldData}
              day={day}
              nextDate={nextDate}
              prevDate={prevDate}
              onChangeDate={onChangeDate}
              dateList={dateList}
              additionalInfo={additionalInfo}
              oldAdditionalInfo={oldAdditionalInfo}
              selectedSituation={selectedSituation}
              onSelectSituation={onSelectSituation}
              selectedAxis={selectedAxis}
              onSelectAxis={onSelectAxis}
              play={play}
              pause={pause}
              playing={playing}
            />
          }
          {
            displaySize === 'mobile' &&
            <ExpandController
              data={data}
              plotData={plotData}
              day={day}
              oldData={oldData}
              nextDate={nextDate}
              prevDate={prevDate}
              onChangeDate={onChangeDate}
              dateList={dateList}
              selectedSituation={selectedSituation}
              additionalInfo={additionalInfo}
              oldAdditionalInfo={oldAdditionalInfo}
            />
          }
            <DeckGL
              height={mapHeight}
              initialViewState={initialViewState}
              layers={layers}>
                <MapView id="map" width="100%" controller={true}>
                  <StaticMap
                    mapStyle={"mapbox://styles/mapbox/dark-v8"} 
                    mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
                  />
                </MapView>
            {renderTooltip()}
            </DeckGL> 
            {
              plotData.length === 0 &&
              <div style={{
                zIndex: 1,
                width: '100%', top: window.innerHeight/2,
                color: 'white', position: 'absolute',
                display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h2">
                  No Data
                </Typography>
              </div>
            }
          </div>
      }}
    </SituationContext.Consumer>
  )
}


export default Map;
