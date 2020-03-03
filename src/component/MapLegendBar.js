import React, { useState } from 'react';
import { Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, MenuItem } from '@material-ui/core';
import { SituationContext } from '../Provider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { translate, reduce, selectableSituationMap, selectableAxisMap } from '../util';
export const newLutList = [
  {
    max: 0,
    color: [220, 231, 117]
  },
  {
    min: 1,
    max: 10,
    color: [255, 241, 118],
  },
  {
    min: 11,
    max: 100,
    color: [255, 193, 7],
  },
  {
    min: 101,
    max: 500,
    color: [245, 124, 0],
  },
  {
    min: 501,
    max: 1000,
    color: [198, 40, 40],
  },
  {
    min: 1001,
    color: [136, 14, 79],
  },
];

export const colorLutList = [
  {
    max: 10,
    color: [220, 231, 117]
  },
  {
    min: 11,
    max: 100,
    color: [255, 241, 118],
  },
  {
    min: 101,
    max: 299,
    color: [255, 193, 7],
  },
  {
    min: 300,
    max: 500,
    color: [245, 124, 0],
  },
  {
    min: 501,
    max: 5000,
    color: [198, 40, 40],
  },
  {
    min: 5000,
    color: [136, 14, 79],
  },
];

function Legend({isMobile, selectedAxis}) {
  const sSize = isMobile ? 5: 25;
  const lut = selectedAxis === selectableAxisMap.total ? colorLutList:newLutList
  return (
      <div style={{display: 'flex', alignItems: "center", flexWrap: 'wrap'}}>
      {
        lut.map(lut => {
          const colorStr = `rgb(${lut.color[0]},${lut.color[1]},${lut.color[2]})`
          return (

            <div key={lut.color} style={{display: 'flex', alignItems: "center" , marginLeft: 5, marginRight: 5}}>
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
  );
}

function DesktopLegend({isMobile, selectedSituation, selectedAxis, data}) {
  return (
  <div style={{display: 'flex', alignItems: "center", paddingBottom: 3}}>
    <Legend 
      isMobile={isMobile}
      selectedAxis={selectedAxis}
    />
  </div>);
}
const selectableSituationList = Object.values(selectableSituationMap);

function MobileLegend({isMobile, selectedSituation, selectedAxis, data, onSelectSituation}) {
  const [open, toggleExpansion] = useState(false);
  const title = translate(selectedSituation);
  const value = reduce(data, selectedSituation)
  return (
  <div style={{display: 'flex', alignItems: "center"}}>
    <ExpansionPanel
      expanded={open}
      onChange={() => toggleExpansion(!open)}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant={'body2'} color="inherit" style={{marginRight: 10,}}>
        {title.length > 10 ?  title.substring(0, 10)+'...' : title}
      </Typography>
      <Typography>
        {value}
      </Typography>
      </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
        <Legend 
          selectedAxis={selectedAxis}
          isMobile={isMobile}
        />
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
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>);
}

function MapLegendBar ({ selectedSituation, data, onSelectSituation, selectedAxis }){
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
                isMbole={isMobile}
                selectedAxis={selectedAxis} 
                selectedSituation={selectedSituation}
                data={data}
                onSelectSituation={onSelectSituation}
              />
            }
          </Paper>
    }
  }
  </SituationContext.Consumer>);
}

export default MapLegendBar;

