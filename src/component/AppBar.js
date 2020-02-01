import React from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Explore';
import ChartIcon from '@material-ui/icons/BarChart';
import { SituationContext } from '../Provider';

function AppToolbar (props){
  const { tabIndex, onChangeTabIndex } = props;
  const handleChange = (ev, newValue) => {
    onChangeTabIndex(newValue);
  }
  return (<SituationContext.Consumer>
    {
      ({displaySize}) => {
      const titleSize = displaySize === 'desktop' ? 'h4' : 'body1';
      return <AppBar position="fixed">
        <Toolbar>
          <Typography variant={titleSize}>
            SITUATION of Coronavirus (2019-nCoV)
          </Typography>
        </Toolbar>
          <Tabs value={tabIndex} onChange={handleChange} aria-label="simple tabs example">
            <Tab icon={<MapIcon fontSize="small" />} label="Map" />
            <Tab icon={<ChartIcon fontSize="small" />} label="Chart" />
          </Tabs>
        </AppBar>
    }
  }
  </SituationContext.Consumer>);

}

export default AppToolbar;
