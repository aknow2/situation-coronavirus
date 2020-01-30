import React, { useState } from 'react';
import { SituationContext } from "../Provider";
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip } from 'recharts';
import {  Typography, Container, Select, MenuItem, InputLabel } from '@material-ui/core';
import { translate } from '../util';

const total_situation = 'total_confirmed'
const createValue = (s, key) => {
  if (key === total_situation) {
    return s.areas.reduce((p, c) => p + c.numOfInfected, 0)
  }
  return s.addtionalInfo[key];
}

const createChartData = (situations, key) => {
  const data = situations.map((s) => ({
    xAxis: s.day,
    yAxis: '',
    value: createValue(s, key)
  }))
  return {
    title: translate(key),
    data
  }
}

function Chart() {
  const [ state, setState ] = useState({selectedSituation: total_situation});
  return (<SituationContext.Consumer>
      {({situations}) => {
        const selectableSituations = Object.keys(situations[situations.length - 1].addtionalInfo)
        selectableSituations.unshift(total_situation)
        const result = createChartData(situations, state.selectedSituation);
        const chartWidth = window.innerWidth * 0.5
        const chartHeight = window.innerHeight * 0.4
        return <div style={{width: '100%', position: 'absolute', top: 200, }}>
            <Container>
              <Typography variant="h2">
                {result.title}
              </Typography>
              <div style={{display: 'flex'}}>
                <LineChart width={chartWidth} height={chartHeight} data={result.data}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="xAxis" />
                  <YAxis />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip formatter={value => ([value, result.title])} />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
                <div>
                <InputLabel id="select-label">SITUATION</InputLabel>
                <Select
                    labelId="select-label"
                    value={state.selectedSituation}
                    onChange={(ev) => {
                      debugger
                      setState({
                        selectedSituation: ev.target.value
                      })
                    }}
                  >
                    {
                      selectableSituations.map(s => {
                        return (
                          <MenuItem value={s}>
                            {translate(s)}
                          </MenuItem>
                        )
                      })
                    }
                  </Select>
                </div>
              </div>
            </Container>
          </div>
      }}
    </SituationContext.Consumer>
  )
}


export default Chart;

