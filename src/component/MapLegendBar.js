import React, { useState } from 'react';
import { Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, MenuItem } from '@material-ui/core';
import { SituationContext } from '../Provider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { translate, reduce, selectableSituationMap } from '../util';

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

function Legend({isMobile}) {
  const sSize = isMobile ? 5: 25;
  return (
      <div style={{display: 'flex', alignItems: "center", flexWrap: 'wrap'}}>
      {
        colorLutList.map(lut => {
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

function DesktopLegend({isMobile, selectedSituation, data}) {
  const title = translate(selectedSituation);
  const value = reduce(data, selectedSituation)
  return (
  <div style={{display: 'flex', alignItems: "center"}}>
    <Typography variant={'h6'} color="inherit" style={{marginRight: 10,}}>
      {title.length > 7 ?  title.substring(0, 8)+'...' : title}
    </Typography>
    <Typography variant={'h6'} color="inherit" style={{marginRight: 10,}}>
      { value }
    </Typography>
    <Legend 
      isMobile={isMobile}
    />
  </div>);
}
const selectableSituationList = Object.values(selectableSituationMap);

function MobileLegend({isMobile, selectedSituation, data, onSelectSituation}) {
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

function MapLegendBar ({ selectedSituation, data, onSelectSituation }){
  return (<SituationContext.Consumer>
    {
      ({displaySize}) => {
        const isMobile = displaySize === 'mobile';
        const sTop = isMobile ? 90: 110;
      return <Paper color="" square style={{ position: 'absolute', top: sTop, width: '100%', boxSizing: "border-box",  zIndex: 999, paddingTop: 10, paddingLeft: 5}}>
            {!isMobile && 
              <DesktopLegend isMbole={isMobile} selectedSituation={selectedSituation} data={data} />
            }
            {isMobile &&
              <MobileLegend
                isMbole={isMobile}
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

