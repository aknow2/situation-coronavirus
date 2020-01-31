import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import SummaryCard from "../component/SummaryCard";
import ExpandController from "../component/ExpandController";
import { TextLayer, ScatterplotLayer } from '@deck.gl/layers';
import { DeckGL } from '@deck.gl/react';
import { MapView } from '@deck.gl/core';
import { StaticMap } from 'react-map-gl';


const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

const initialViewState = {
  longitude: 136.508297, 
  latitude: 34.730218,
  zoom: 2,
  pitch: 0,
  bearing: 0
};

const expandSammaryHeight = 72;

function Map() {
  const [state, setState ] = useState({hoveredObject: undefined, pointerX: 0, pointerY: 0});
  const renderTooltip = () => {
    const { hoveredObject, pointerX, pointerY } = state;
    return hoveredObject && (
      <div style={{color: 'white', position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
        { hoveredObject.place }
      </div>
    );
  }
  const onHover = info => {
    const data = info.object;
    if (data) {
      const place = data.place
      setState({
        hoveredObject: {
          place
        },
        pointerX: info.x,
        pointerY: info.y
      })
    } else {
      setState({
        hoveredObject: undefined,
      })
    }
  }


  return (<SituationContext.Consumer>
      {({ situations, day, onChangeDate, nextDate, prevDate, dateList, displaySize }) => {
          if (situations.length  === 0) {
            return <div />
          }
          const mapHeight = displaySize === 'mobile' ? window.innerHeight - expandSammaryHeight : undefined
          const situation = situations.find(s => s.day === day)
          const data = situation.areas;
          const addtionalInfo = situation.addtionalInfo;
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
              radiusMinPixels: 5,
              radiusMaxPixels: 70,
              lineWidthMinPixels: 1,
              getRadius: d => {
                const result = d.numOfInfected
                const count = Math.sqrt(result * 3) * result;
                return count
              },
              getFillColor: () => [255, 0, 0],
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
        return <div>
          {
            displaySize === 'desktop' &&
            <SummaryCard
              data={data}
              day={day}
              nextDate={nextDate}
              prevDate={prevDate}
              onChangeDate={onChangeDate}
              dateList={dateList}
              addtionalInfo={addtionalInfo}
            />
          }
          {
            displaySize === 'mobile' &&
            <ExpandController
              data={data}
              day={day}
              nextDate={nextDate}
              prevDate={prevDate}
              onChangeDate={onChangeDate}
              dateList={dateList}
              addtionalInfo={addtionalInfo}
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
