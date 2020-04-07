import React, { useState } from 'react';
import { Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, MenuItem, Divider } from '@material-ui/core';
import { SituationContext } from '../Provider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { translate, reduce, selectableSituationMap, selectableAxisMap } from '../util';
import { useEffect } from 'react';

export const calcGradientColorGtoR = (value, max = 1, min=0) => {
 if (value === 0) {
    return [0, 255, 255]
  }
  if (value === undefined || value === 0) {
    return [0, 255, 0]
  }

  const delta = (max - min) / 2;
  const ratio = (value - min)/delta;
  const r = 255 * (ratio > 2 ? 2:ratio);
  const g = 520 - r;
  const b = 0;
  return [r, g, b]
};

export const calcGradientColorGtoY = (value, max = 1, min=0) => {
  if (value === 0) {
    return [0, 255, 255]
  }
  if (value === undefined || value === 0) {
    return [0, 255, 0]
  }
  const delta = (max - min);
  const ratio = (value - min)/delta;
  const r = 255 * (ratio > 1 ? 1:ratio);
  const g = 255;
  const b = 0;
  return [r, g, b]
};

export const calcGradientColorYtoR = (value, max = 1, min=0) => {
  if (value === 0) {
    return [0, 255, 255]
  }
  if (value === undefined || value === 0) {
    return [0, 255, 0]
  }

  const delta = (max - min);
  const ratio = (value - min)/delta;
  const r = 255;
  const g = 255 - (255*ratio);
  const b = 0;
  return [r, g, b]
};

export function getLegendMinMaxVal(selectedAxis, selectedSituation) {
  switch(selectedAxis) {
    case selectableAxisMap.new:
      if (selectedSituation === selectableSituationMap.total_confirmed) {
      return {min: -10, max: 100};
      } else {
        return { min: -10, max: 50 };
      }
    case selectableAxisMap.total:
      if (selectedSituation === selectableSituationMap.total_confirmed) {
        return  { min: 0, max: 10000 };
      } else {
        return { min: 0, max: 5000 };
      }
    default:
    case selectableAxisMap.perMillion:
      if (selectedSituation === selectableSituationMap.total_confirmed) {
        return { min: 0, max: 10000 };
      } else {
        return { min: 0, max: 2000 };
      }
  }
}

function Legend({isMobile, selectedAxis, selectedSituation}) {
  const ref = React.createRef();
  const ySize = 25;
  const xSize = isMobile ? 210: 400;
  const range = (() => {
    const range = getLegendMinMaxVal(selectedAxis, selectedSituation);
    if (selectedAxis === selectableAxisMap.new) {
      return {
        min: `${translate('decrease')}(<1)`,
        max: `${translate('increase')}(${range.max})`
      }
    }
    return range;
  })();
  useEffect(() => {
    const node = ref.current;
    const ctx = node.getContext('2d');
    const grd = ctx.createLinearGradient(0,0, xSize, 0);
    grd.addColorStop(0,"green");
    grd.addColorStop(0.08,"green");
    grd.addColorStop(0.6,"yellow");
    grd.addColorStop(1,"red");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, xSize, ySize);
  },
  [isMobile, ref, xSize, ySize, selectedAxis]);

  return (
      <div style={{display: 'flex', alignItems: "center", flexWrap: 'wrap'}}>
          <div style={{display: 'flex', marginRight: 10}}>
            {
            selectedAxis === selectableAxisMap.new &&
              <span>{translate('unchanged')}</span>
            }
            {
              selectedAxis !== selectableAxisMap.new &&
              <span>{translate(selectedSituation)}0</span>
            }
            <div style={{height: 20, width: 20, backgroundColor: '#00FFFF'}}></div>
          </div>
        {range.min} <canvas ref={ref} width={xSize} height={ySize} /> {range.max}
        {
          selectableAxisMap.new === selectedAxis &&
          <span style={{marginLeft: 10, fontSize: 12 }}>
            {translate('new_description')}
          </span>
        }
      </div>
  );
}

function DesktopLegend({isMobile, selectedSituation, selectedAxis, data}) {
  return (
  <div style={{display: 'flex', alignItems: "center", paddingBottom: 3}}>
    <div style={{marginLeft:32, marginRight: 32 }}>
      {translate(selectedAxis)} - {translate(selectedSituation)}
    </div>
    <Legend
      isMobile={isMobile}
      selectedAxis={selectedAxis}
      selectedSituation={selectedSituation}
    />
  </div>);
}
const selectableSituationList = Object.values(selectableSituationMap);
const selectableAxisList = Object.values(selectableAxisMap);

function MobileLegend({isMobile, selectedSituation, selectedAxis, onSelectAxis, data, onSelectSituation}) {
  const [open, toggleExpansion] = useState(false);
  const title = translate(selectedSituation);
  const value = reduce(data, selectedSituation)
  return (
  <div style={{display: 'flex', alignItems: "center"}}>
    <ExpansionPanel
      style={{ width: '100%' }}
      expanded={open}
      onChange={() => toggleExpansion(!open)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant={'body2'} color="inherit" style={{marginRight: 10,}}>
        {title.length > 10 ?  title.substring(0, 10)+'...' : title} - {translate(selectedAxis)} 
      </Typography>
      <Typography>
        {selectedAxis !== selectableAxisMap.perMillion? value+translate('case'): ''}
      </Typography>
      </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
        <Legend 
          selectedAxis={selectedAxis}
          selectedSituation={selectedSituation}
          isMobile={isMobile}
        />
        <Divider style={{ margin: 5, boxSizing: 'border-box' }}/>
        {
          selectableSituationList.map((situation) => {
            return (
              <MenuItem
                key={situation}
                selected={selectedSituation === situation}
                onClick={() => {
                  onSelectSituation(situation)
                  toggleExpansion(!open);
                }}
              >
                {translate(situation)}
              </MenuItem>
            );
          })
        }
        <Divider style={{ margin: 5, boxSizing: 'border-box' }}/>
        {
          selectableAxisList.map((axis) => {
            return (
              <MenuItem
                key={axis}
                selected={selectedAxis === axis}
                onClick={() => {
                  onSelectAxis(axis)
                  toggleExpansion(!open);
                }}
              >
                {translate(axis)}
              </MenuItem>
            );
          })
          }
        </div>

      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>);
}

function MapLegendBar ({ selectedSituation, data, onSelectSituation, selectedAxis, onSelectAxis }){
  return (<SituationContext.Consumer>
    {
      ({displaySize}) => {
        const isMobile = displaySize === 'mobile';
        const sTop = isMobile ? 90: 110;
      return <Paper color="" square style={{ position: 'absolute', top: sTop, width: '100%', boxSizing: "border-box",  zIndex: 999, paddingTop: 10, paddingLeft: 5}}>
            {!isMobile && 
              <DesktopLegend selectedAxis={selectedAxis} isMbole={isMobile} selectedSituation={selectedSituation} data={data} />
            }
            {isMobile &&
              <MobileLegend
                isMobile={isMobile}
                selectedAxis={selectedAxis} 
                selectedSituation={selectedSituation}
                data={data}
                onSelectSituation={onSelectSituation}
                onSelectAxis={onSelectAxis}
              />
            }
          </Paper>
    }
  }
  </SituationContext.Consumer>);
}

export default MapLegendBar;

