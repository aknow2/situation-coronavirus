import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandLess';
import { List, Typography, Slider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { createAdditionalInfoList, createItem, situationMap } from './AdditionalInfoList';

function ExpandController (props){
  const [state, setState] = useState({ open: false }) 
  const {data, additionalInfo, day, dateList ,onChangeDate, oldData, oldAdditionalInfo } = props;
  const totalConfirmed = createItem(data, oldData, situationMap.total_confirmed);
  const addtionalInfoList = createAdditionalInfoList(additionalInfo, oldAdditionalInfo);
  const dayList = dateList.map((s, i) => ({ value: i, day: s.day }));
  const selectedIndex = dayList.find(d => d.day === day).value;
  const date = new Date(day);
  return <ExpansionPanel
      square
      expanded={state.open}
      onChange={() => { 
        setState({
          open: !state.open
        })
      }}
      style={{
        width: '100%',
        position: "absolute",
        bottom: 0,
        zIndex: 999,
      }}
    >
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <div>
        <div style={{marginRight: 15}}>
          <Typography>{date.getFullYear()}</Typography>
        </div>
        <div>
          <Typography>{date.getMonth()+1}/{date.getDate()}</Typography>
        </div>
      </div>
      <Slider 
        value={selectedIndex}
        valueLabelDisplay="off"
        onChange={(ev, value) => {
          ev.preventDefault()
          onChangeDate(dayList[value].day)
        }}
        min={0}
        max={dayList.length-1}
        marks={dayList}
      />
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <div style={{ width: '100%', maxHeight: 260, overflow: 'scroll' }}>
        <List>
          {
            totalConfirmed
          }
          {
            addtionalInfoList
          }
        </List>
      </div>
    </ExpansionPanelDetails>
  </ExpansionPanel>
}

export default ExpandController;

