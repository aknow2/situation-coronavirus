import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import SummaryCard from "../component/SummaryCard";
import ExpandController from "../component/ExpandController";
import MapLegendBar, { colorLutList, newLutList, calcGradientColor } from "../component/MapLegendBar";
import { ColumnLayer } from '@deck.gl/layers';
import { DeckGL } from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { StaticMap } from 'react-map-gl';
import { Typography } from '@material-ui/core';
import { selectableSituationMap, selectableAxisMap } from '../util';


const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

const initialViewState = {
  longitude: 136.508297, 
  latitude: 34.730218,
  zoom: 2,
  pitch: 45,
  bearing: 0
};

const deltaData = (current, old, selectedSituation) => {
  return current.map((c, index) => {
    const oldValue = (() => {
      if(!old) {
        return 0;
      }
      const area = old.find(o => o.id === c.id);
      if (!area) {
        return 0;
      }
      const oldSituation = area[selectedSituation];
      return oldSituation ? oldSituation : 0;
    })()
    return {
      ...c,
      [selectedSituation]: c[selectedSituation] - oldValue
    }
  })
}

const expandSammaryHeight = 72;

const filterValidValue = (areas, key, selectedAxis) => {
  if (selectedAxis === selectableAxisMap.mortality) {
    return areas.filter(area => !!area.population)
  }
  return areas.filter(area => !!area[key]);
}

const calcPlotData = (selectedAxis, selectedSituation, filteredData, oldData) => {

  if (selectedAxis === selectableAxisMap.mortality) {
    return filteredData.map(data => {
      return {
        ...data,
        [selectedSituation]: data.deaths / data.population * 100000
      };
    })
  }
  return selectedAxis === selectableAxisMap.total ? filteredData : deltaData(filteredData, oldData, selectedSituation);
};
const getFillColor = (d, selectedAxis, selectedSituation) => {
  const count = d[selectedSituation]

  if (selectedAxis === selectableAxisMap.mortality) {
    return calcGradientColor(count);
  }

  const lutList = (selectedAxis === selectableAxisMap.total)?colorLutList:newLutList;
  const lut = lutList.find(lut => {
    if (lut.min && lut.max) {
      return count >= lut.min && count <= lut.max;
    } else if (lut.max !== undefined) {
      return count <= lut.max
    } else if (lut.min !== undefined)  {
      return  count >= lut.min
    } 
    return false;
  })
  return lut.color;
}

function Map() {
  const [hoveredState, setHoveredState ] = useState({hoveredObject: undefined, pointerX: 0, pointerY: 0});
  const [selectedSituation, onSelectSituation] = useState(selectableSituationMap.total_confirmed);
  const [selectedAxis, onSelectAxis] = useState(selectableAxisMap.total);
  const renderTooltip = () => {
    const { hoveredObject, pointerX, pointerY } = hoveredState;
    return hoveredObject && (
      <div style={{color: 'white', position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
        <p>{ hoveredObject.name } </p> 
        <p>{hoveredObject.value}  </p>
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
          value: data[selectedSituation]
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
          const oldData = !!oldSituation? oldSituation.areas : undefined;
          const oldAdditionalInfo = !!oldSituation?oldSituation.additionalInfo : undefined;
          const getPosition =  d => {
            const result = d.location
            return [result[1], result[0], 0];
          } 
          const filteredData = filterValidValue(data, selectedSituation, selectedAxis)
          debugger;
          const plotData = calcPlotData(selectedAxis, selectedSituation, filteredData, oldData);
          const layers = [
            new ColumnLayer({
              id: 'column-layer', 
              data: plotData,
              getPosition,
              pickable: true,
              filled: true,
              radius: 100000,
              extruded: true,
              elevationScale: (selectedAxis === selectableAxisMap.total) ? 80 : 200,
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
            selectedAxis={selectedAxis}
            data={data}
          />
          {
            displaySize === 'desktop' &&
            <SummaryCard
              data={data}
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
              day={day}
              oldData={oldData}
              nextDate={nextDate}
              prevDate={prevDate}
              onChangeDate={onChangeDate}
              dateList={dateList}
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
