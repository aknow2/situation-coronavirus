import React from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs,  Link } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Explore';
import ChartIcon from '@material-ui/icons/BarChart';
import { SituationContext } from '../Provider';

const whoLink =  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports";

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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant={titleSize}>
              SITUATION of Coronavirus (2019-nCoV)
            </Typography>
            <Link color="inherit" href={whoLink} variant="body2" underline="always">
              Souce is WHO situation report 
            </Link>
          </div>
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
