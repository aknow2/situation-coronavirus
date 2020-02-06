import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import SummaryCard from "../component/SummaryCard";
import ExpandController from "../component/ExpandController";
import { TextLayer, ScatterplotLayer } from '@deck.gl/layers';
import { DeckGL } from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { StaticMap } from 'react-map-gl';
import { Typography, Paper } from '@material-ui/core';
import { translate } from '../util';


const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

const initialViewState = {
  longitude: 136.508297, 
  latitude: 34.730218,
  zoom: 2,
  pitch: 0,
  bearing: 0
};

const colorLutList = [
  {
    max: 9,
    color: [255, 213, 79]
  },
  {
    min: 10,
    max: 19,
    color: [255, 152, 0],
  },
  {
    min: 20,
    max: 49,
    color: [255, 87, 34],
  },
  {
    min: 50,
    max: 99,
    color: [229, 57, 53],
  },
  {
    min: 100,
    color: [213, 0, 0],
  },
];

const expandSammaryHeight = 72;

const filterValidValue = (areas, key) => {
  return areas.filter(area => !!area[key]);
}

function Map() {
  const [hoveredState, setHoveredState ] = useState({hoveredObject: undefined, pointerX: 0, pointerY: 0});
  const renderTooltip = () => {
    const { hoveredObject, pointerX, pointerY } = hoveredState;
    return hoveredObject && (
      <div style={{color: 'white', position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
        { hoveredObject.name }
      </div>
    );
  }
  const onHover = info => {
    const data = info.object;
    if (data) {
      const name = data.name
      setHoveredState({
        hoveredObject: {
          name
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
      {({ situations, day, onChangeDate, nextDate, prevDate, dateList, displaySize }) => {
          if (situations.length  === 0) {
            return <div />
          }
          const key = 'numOfInfected';
          const mapHeight = displaySize === 'mobile' ? window.innerHeight - expandSammaryHeight : undefined
          const situationIndex = situations.findIndex(s => s.day === day)
          const situation = situations[situationIndex];
          const data = filterValidValue(situation.areas, key);
          const additionalInfo = situation.additionalInfo;
          const oldSituation = situations[situationIndex - 1];
          const oldData = !!oldSituation? filterValidValue(oldSituation.areas, key) : undefined;
          const oldAdditionalInfo = !!oldSituation?oldSituation.additionalInfo : undefined;
          const getPosition =  d => {
            const result = d.location
            return [result[1], result[0], 0];
          } 
          const layers = [
            new ScatterplotLayer({
              id: 'scatterplot-layer', 
              data,
              getPosition,
              pickable: true,
              opacity: 0.8,
              filled: true,
              radiusScale: 2,
              radiusMinPixels: 12,
              radiusMaxPixels: 70,
              lineWidthMinPixels: 1,
              getRadius: d => {
                const result = d.numOfInfected
                const count = Math.sqrt(result * 3) * result;
                return count
              },
              getFillColor: (d) => {
                const count = d.numOfInfected
                const lut = colorLutList.find(lut => {
                  if (lut.min && lut.max) {
                    return count >= lut.min && count <= lut.max;
                  } else if (lut.max) {
                    return count <= lut.max
                  } else if (lut.min)  {
                    return  count >= lut.min
                  } 
                  return false;
                })
                return lut.color;
              },
              getLineColor: d => [0, 0, 0],
              onHover,
            }),
            new TextLayer({
              id: 'text-layer',
              data,
              getPosition,
              pickable: true,
              getText: d => d.numOfInfected.toString(),
              getSize: 32,
              getColor: [255,255,255],
              getTextAnchor: 'middle',
              getAlignmentBaseline: 'center',
              onHover,
            })
          ];
          const isMobile = displaySize === 'mobile';
          const sSize = isMobile ? 10: 25;
          const sTop = isMobile ? 90: 110;
        return <div>
          <Paper color="" square style={{ position: 'absolute', top: sTop, width: '100%', boxSizing: "border-box",  zIndex: 999, paddingTop: 10, paddingLeft: 5}}>
            <div style={{display: 'flex', alignItems: "center"}}>
              <Typography variant={displaySize === 'mobile' ? 'body2': 'h6'} color="inherit" style={{marginRight: 10,}}>
                {translate('total_confirmed')}
              </Typography>
              {
                colorLutList.map(lut => {
                  const colorStr = `rgb(${lut.color[0]},${lut.color[1]},${lut.color[2]})`
                  return (

                    <div key={lut.color} style={{display: 'flex', alignItems: "center" , marginRight: 5}}>
                    <div style={{ width: sSize, height:sSize, borderRadius: '50%', backgroundColor: colorStr}} /> 
                    {
                      lut.max && !lut.min &&
                      <div>
                         &lt; {lut.max}
                      </div>
                    }
                    {
                      lut.max && lut.min &&
                      <div>
                        {lut.min} - {lut.max}
                      </div>
                    }
                    {
                      !lut.max && lut.min &&
                      <div>
                         {lut.min} +
                      </div>
                    }
                    </div>
                  );
                })
              }
            </div>
          </Paper>>
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
          </div>
      }}
    </SituationContext.Consumer>
  )
}


export default Map;
