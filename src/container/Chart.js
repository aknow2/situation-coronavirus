import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, Text } from 'recharts';
import {  Typography, Container, Select, MenuItem, InputLabel } from '@material-ui/core';
import { translate, reduce, filterAreas, selectableCountryMap } from '../util';

const selectableAxisMap = {
  total: 'total',
  new: 'new',
};

const selectableSituationMap = {
 total_confirmed: 'numOfInfected',
 deaths: 'deaths'
}

const createValue = (s, situationKey, selectedCountry) => {
  if (orgSelectableSituation.includes(situationKey)) {
    const filteredAreas = filterAreas(s.areas, selectedCountry);
    return reduce(filteredAreas, situationKey);
  }
  return s.additionalInfo[situationKey];
}

const createDeltaValue = (situation, oldSituation, situationKey, selectedCountry) => {
  if (!(!!oldSituation)) {
    return undefined;
  }
  if (orgSelectableSituation.includes(situationKey)) {
    const filteredAreas = filterAreas(situation.areas, selectedCountry);
    const oldFilteredAreas = filterAreas(oldSituation.areas, selectedCountry);
    return reduce(filteredAreas, situationKey) - reduce(oldFilteredAreas, situationKey) 
  }
  return situation.additionalInfo[situationKey] - oldSituation.additionalInfo[situationKey];
}

const containerDesktopStyle = {display: 'flex', margintTop: 16 }
const containerMobileStyle = {margintTop: 16, marginBottom: 16 }

const createChartData = (situations, key, selectedCountry, axis) => {
  const data = situations.map((s, index) => ({
    xAxis: s.day,
    yAxis: '',
    value: axis === selectableAxisMap.total
      ? createValue(s, key, selectedCountry)
      : createDeltaValue(s, situations[index-1], key, selectedCountry)
  }))
  const title = axis === selectableAxisMap.total ?
    `${translate(key)} - ${translate('total')}`
  : `${translate(key)} - ${translate('new')} `

  return {
    title,
    data
  }
}


const selectableCountries = Object.values(selectableCountryMap);
const selectableAxis = Object.values(selectableAxisMap);
const orgSelectableSituation = Object.values(selectableSituationMap);
function Chart() {
  const [ state, setState ] = useState({
    selectedSituation: selectableSituationMap.total_confirmed,
    selectedCountry: selectableCountries[0],
    selectedAxis: selectableAxis[0],
  });
  return (<SituationContext.Consumer>
      {({situations, displaySize}) => {
        const selectableSituations = orgSelectableSituation.concat(Object.keys(situations[situations.length - 1].additionalInfo))
        debugger;
        const result = createChartData(situations, state.selectedSituation, state.selectedCountry, state.selectedAxis);
        const titleSize = displaySize === 'mobile' ? 'h6' : 'h3';
        const chartWidth = window.innerWidth * (displaySize === 'desktop' ? 0.55 : 0.95);
        const chartHeight = window.innerHeight * (displaySize === 'desktop' ? 0.6 : 0.4);

        const containerStyle = displaySize === 'desktop' ? containerDesktopStyle : containerMobileStyle;
        return <div style={{width: '100%', position: 'absolute', top: 130, }}>
            <Container>
              <Typography variant={titleSize} color="textSecondary">
                {result.title}
              </Typography>
              <div style={containerStyle}>
                <LineChart width={chartWidth} height={chartHeight} data={result.data}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="xAxis" label={{ fill: 'grey', value: "Date", position: "insideBottom", offset:-5 }} />
                  <YAxis label={
                      <Text
                          fill={"grey"}
                          x={0}
                          y={0}
                          dx={12}
                          dy={chartHeight/2}
                          offset={0}
                          angle={-90}
                      >
                        Cases
                      </Text>
                    } />
                  <Tooltip formatter={value => ([value, result.title])} />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
                <div>
                  <div style={{marginBottom: 32}}>
                    <InputLabel >{translate('aggregation')}</InputLabel>
                    <Select
                        value={state.selectedAxis}
                        onChange={(ev) => {
                          setState({
                            ...state,
                            selectedAxis: ev.target.value
                          });
                        }}
                      >
                        {
                          selectableAxis.map(s => {
                            return (
                              <MenuItem key={s} value={s}>
                                {translate(s)}
                              </MenuItem>
                            )
                          })
                        }
                      </Select>
                  </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: 32 }}>
                    <InputLabel id="select-label">{translate('situation')}</InputLabel>
                    <Select
                        labelId="select-label"
                        value={state.selectedSituation}
                        onChange={(ev) => {
                          debugger;
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
                      <InputLabel id="country-label">{translate('area')}</InputLabel>
                      <Select
                          labelId="country-label"
                          value={state.selectedCountry}
                          disabled={!orgSelectableSituation.includes(state.selectedSituation)}
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
                                  {translate(c)}
                                </MenuItem>
                              )
                            })
                          }
                      </Select>
                    </div>
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

