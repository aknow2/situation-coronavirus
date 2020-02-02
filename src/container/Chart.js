import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip } from 'recharts';
import {  Typography, Container, Select, MenuItem, InputLabel } from '@material-ui/core';
import { translate } from '../util';

const selectableCountryMap = {
  all: 'All',
  china: 'China',
  others: 'Othres',
};
const total_confirmed = 'total_confirmed'

const createValue = (s, situationKey, selectedCountry) => {
  if (situationKey === total_confirmed) {
    const filteredAreas = (() => {
      const areas = s.areas;
      switch(selectedCountry) {
        case selectableCountryMap.china:
          return areas.filter(a => a.country === 'china');
        case selectableCountryMap.others:
          return areas.filter(a => a.country !== 'china')
        case selectableCountryMap.all:
        default:
          return areas;
      }
    })();
    return filteredAreas.reduce((p, c) => p + c.numOfInfected, 0)
  }
  return s.additionalInfo[situationKey];
}

const containerDesktopStyle = {display: 'flex', margintTop: 16 }
const containerMobileStyle = {margintTop: 16, marginBottom: 16 }

const createChartData = (situations, key, selectedCountry) => {
  const data = situations.map((s) => ({
    xAxis: s.day,
    yAxis: '',
    value: createValue(s, key, selectedCountry)
  }))
  return {
    title: translate(key),
    data
  }
}


const selectableCountries = Object.values(selectableCountryMap);
function Chart() {
  const [ state, setState ] = useState({
    selectedSituation: total_confirmed,
    selectedCountry: selectableCountries[0],
  });
  return (<SituationContext.Consumer>
      {({situations, displaySize}) => {
        const selectableSituations = Object.keys(situations[situations.length - 1].additionalInfo)
        selectableSituations.unshift(total_confirmed)
        const result = createChartData(situations, state.selectedSituation, state.selectedCountry);
        const titleSize = displaySize === 'mobile' ? 'h6' : 'h2';
        const chartWidth = window.innerWidth * (displaySize === 'desktop' ? 0.55 : 0.95);
        const chartHeight = window.innerHeight * (displaySize === 'desktop' ? 0.6 : 0.4);

        const containerStyle = displaySize === 'desktop' ? containerDesktopStyle : containerMobileStyle;
        return <div style={{width: '100%', position: 'absolute', top: 170, }}>
            <Container>
              <Typography variant={titleSize}>
                {result.title}
              </Typography>
              <div style={containerStyle}>
                <LineChart width={chartWidth} height={chartHeight} data={result.data}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="xAxis" />
                  <YAxis />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={value => ([value, result.title])} />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: 32 }}>
                    <InputLabel id="select-label">Situation</InputLabel>
                    <Select
                        labelId="select-label"
                        value={state.selectedSituation}
                        onChange={(ev) => {
                          setState({
                            ...state,
                            selectedSituation: ev.target.value
                          });
                        }}
                      >
                        {
                          selectableSituations.map(s => {
                            return (
                              <MenuItem key={s} value={s}>
                                {translate(s)}
                              </MenuItem>
                            )
                          })
                        }
                      </Select>
                    </div>
                    <div>
                      <InputLabel id="country-label">Country</InputLabel>
                      <Select
                          labelId="country-label"
                          value={state.selectedCountry}
                          disabled={state.selectedSituation !== total_confirmed}
                          onChange={(ev) => {
                            setState({
                              ...state,
                              selectedCountry: ev.target.value
                            })
                          }}
                        >
                          {
                            selectableCountries.map(c => {
                              return (
                                <MenuItem key={c} value={c}>
                                  {c}
                                </MenuItem>
                              )
                            })
                          }
                      </Select>
                    </div>
                </div>
              </div>
            </Container>
          </div>
      }}
    </SituationContext.Consumer>
  )
}


export default Chart;

