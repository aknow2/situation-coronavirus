import React from 'react';
import Slider from '@material-ui/core/Slider';
import { AppBar, Toolbar, Typography, withStyles, Tooltip } from '@material-ui/core';

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 32,
    width: 32,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  track: {
    height: 15,
    borderRadius: 4,
  },
  rail: {
    height: 15,
    borderRadius: 4,
  },
})(Slider);

function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value} arrow>
      {children}
    </Tooltip>
  );
}

function AppToolbar (props){
  const {situations, day, onChangeDate} = props;
  const dayList = situations.map((s, i) => ({ value: i, day: s.day }));
  const selectedIndex = dayList.find(d => d.day === day).value;
  return <AppBar position="fixed">
  <Toolbar>
    <Typography variant="h4">
      SITUATION of Coronavirus(2019-nCoV)
    </Typography>
  </Toolbar>
  <Toolbar>
    <div>
      <div>
        <Typography variant="h6">
          Day: {day} 
        </Typography>
      </div>
    </div>
    <div style={{width: '70%', marginLeft: 50}}>
      <PrettoSlider
        value={selectedIndex}
        valueLabelFormat={(value) => dayList[value].day}
        ValueLabelComponent={ValueLabelComponent}
        valueLabelDisplay="auto"
        onChange={(ev, value) => {
          ev.preventDefault()
          onChangeDate(dayList[value].day)
        }}
        min={0}
        max={dayList.length-1}
        marks={dayList}
      />
    </div>
  </Toolbar>
  </AppBar>
}

export default AppToolbar;
