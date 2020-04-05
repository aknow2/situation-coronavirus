import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, Text, Legend } from 'recharts';
import {  Typography, Container, Select, MenuItem, InputLabel, Chip, Input } from '@material-ui/core';
import { translate, reduce, filterAreas, selectableCountryMap, selectableSituationMap, selectableAxisMap } from '../util';

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

const createChartData = (situations, key, selectedCountries, axis) => {
  const valueKeys = selectedCountries;

  const data = situations.map((s, index) => {
    const base = {
      xAxis: s.day,
      yAxis: 'cases',
    };
    const dataList = selectedCountries.map((selectedCountry) => {
      return {
        [selectedCountry]: axis === selectableAxisMap.total
        ? createValue(s, key, selectedCountry)
        : createDeltaValue(s, situations[index-1], key, selectedCountry)
      }
    }) 
    return dataList.reduce((acc, data) => {
      return {
        ...acc,
        ...data
      };
    }, base)
  })
  const title = axis === selectableAxisMap.total ?
    `${translate(key)} - ${translate('total')}`
    :`${translate(key)} - ${translate('new')} `
  return {
    title,
    data,
    valueKeys
  }
}

const baseSelectableCountries = Object.values(selectableCountryMap);
const selectableAxis = Object.values(selectableAxisMap).filter(a => a !== 'perMillion');
const orgSelectableSituation = Object.values(selectableSituationMap);

export const isOutsideChinaReport = selectedSituation => {
  return (selectedSituation === selectableSituationMap.travelHistoryChina ||
    selectedSituation === selectableSituationMap.transmissionOutsideOfChina ||
    selectedSituation === selectableSituationMap.underInvestigation)
};

function Chart() {
  const [ state, setState ] = useState({
    selectedSituation: selectableSituationMap.total_confirmed,
    selectedCountries: [baseSelectableCountries[0]],
    selectedAxis: selectableAxis[0],
  });
  return (<SituationContext.Consumer>
      {({situations, displaySize}) => {
        const latestSituation = situations[situations.length - 1];
        const areas = latestSituation.areas
            .filter(a => a.country !== 'china')
            .map(areas => areas.country)
            .filter((x, i, me) => me.indexOf(x) === i)
        areas.sort((a, b) => a.localeCompare(b) );
        const selectableSituations = orgSelectableSituation.concat(Object.keys(latestSituation.additionalInfo))
        const result = createChartData(situations, state.selectedSituation, state.selectedCountries, state.selectedAxis);
        const titleSize = displaySize === 'mobile' ? 'h6' : 'h4';
        const chartWidth = window.innerWidth * (displaySize === 'desktop' ? 0.55 : 0.95);
        const chartHeight = window.innerHeight * (displaySize === 'desktop' ? 0.6 : 0.4);
        const containerStyle = displaySize === 'desktop' ? containerDesktopStyle : containerMobileStyle;
        const selectableCountries = baseSelectableCountries.concat(areas); 
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
                  <Tooltip formatter={(value, name) => {
                    return [value, translate(name)]
                  }} />
                  {
                    result.valueKeys.map((key, index)  => {
                      const colors = [
                        '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#000000', 
                        '#800000', '#008000', '#000080', '#808000', '#800080', '#008080', '#808080', 
                        '#C00000', '#00C000', '#0000C0', '#C0C000', '#C000C0', '#00C0C0', '#C0C0C0', 
                        '#400000', '#004000', '#000040', '#404000', '#400040', '#004040', '#404040', 
                        '#200000', '#002000', '#000020', '#202000', '#200020', '#002020', '#202020', 
                        '#600000', '006000', '#000060', '#606000', '#600060', '#006060', '#606060', 
                        '#A00000', '#00A000', '#0000A0', '#A0A000', '#A000A0', '#00A0A0', '#A0A0A0', 
                        '#E00000', '#00E000', '#0000E0', '#E0E000', '#E000E0', '#00E0E0', '#E0E0E0', 
                      ]
                      
                      return<Line key={key} dataKey={key}  type="monotone" stroke={colors[index%colors.length]}/>
                    })
                  }
                  <Legend wrapperStyle={{ color: '#CCCCCC' }} formatter={(v) => translate(v)} />
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
                  <div style={{ marginBottom: 32 }}>
                    <InputLabel id="select-label">{translate('situation')}</InputLabel>
                    <Select
                        labelId="select-label"
                        value={state.selectedSituation}
                        onChange={(ev) => {
                          const selectedSituation = ev.target.value
                          setState({
                            ...state,
                            selectedSituation
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
                  <div style={{ marginBottom: 32 }}>
                      <InputLabel id="country-label">{translate('area')}</InputLabel>
                              <Select
                                labelId="country-label"
                                multiple
                                value={state.selectedCountries}
                                onChange={(ev) => {
                                  setState(
                                    {
                                      ...state,
                                      selectedCountries: ev.target.value
                                    }
                                  )
                                }}
                                input={<Input id="select-multiple-chip" />}
                                renderValue={(v) => (
                                  <div key={v}>
                                    {state.selectedCountries.map((value) => (
                                      <div key={value}>
                                      <Chip
                                        label={translate(value)}
                                      />
                                      </div>
                                    ))}
                                  </div>
                                )}
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
            </Container>
          </div>
      }}
    </SituationContext.Consumer>
  )
}


export default Chart;

