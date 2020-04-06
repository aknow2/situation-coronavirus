import React from 'react';
import { AppBar, Toolbar, Typography, Tab, Tabs,  Link } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Explore';
import ChartIcon from '@material-ui/icons/BarChart';
import { SituationContext } from '../Provider';
import { translate } from '../util';

const whoLink =  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports";
const authorLink =  "https://twitter.com/aknow21";

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
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: "space-between" }}>
              <Typography variant={titleSize}>
                COVID-19 Situation Timelapse
              </Typography>
            </div>
            <div style={{ width: '100%', display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
              <Tabs value={tabIndex} onChange={handleChange} >
                <Tab icon={<MapIcon fontSize="small" />} label={translate('map')} />
                <Tab icon={<ChartIcon fontSize="small" />} label={translate('chart')} />
              </Tabs>
              <div>
                <Typography>
                  <Link color="inherit" href={whoLink} variant="caption" underline="always">
                      Source is WHO situation report 
                  </Link>
                </Typography>
                <Typography>
                <Link color="inherit" href={authorLink} variant="caption" underline="always">
                  	Author: aknow2
                </Link>
                </Typography>
                <Typography variant="caption">
                  last updated: 2020/04/06
                </Typography>
              </div>
            </div>
          </div>
        </Toolbar>
        </AppBar>
    }
  }
  </SituationContext.Consumer>);
}

export default AppToolbar;
