import React from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Explore';
import ChartIcon from '@material-ui/icons/BarChart';

function AppToolbar (props){
  const { tabIndex, onChangeTabIndex, displaySize } = props;
  const handleChange = (ev, newValue) => {
    onChangeTabIndex(newValue);
  }
  const titleSize = displaySize === 'desktop' ? 'h4' : 'h6';
  return <AppBar position="fixed">
  <Toolbar>
    <Typography variant={titleSize}>
      SITUATION of Coronavirus (2019-nCoV)
    </Typography>
  </Toolbar>
    <Tabs value={tabIndex} onChange={handleChange} aria-label="simple tabs example">
      <Tab icon={<MapIcon />} label="Map" />
      <Tab icon={<ChartIcon />} label="Chart" />
    </Tabs>
  </AppBar>
}

export default AppToolbar;
