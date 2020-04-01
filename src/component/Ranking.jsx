import * as React from 'react';
import { ListItem, ListItemText } from "@material-ui/core";
import { translate } from '../util';

function Ranking({data, selectedSituation}) {
  const copiedData = [...data];
  copiedData.sort((a, b) => b[selectedSituation] - a[selectedSituation])
  return (<div style={{width: '100%'}}>
    {
      copiedData.map((d, index) => {
        return (<ListItem key={index}>
          <ListItemText 
          primary={(index+1) + '. ' + d.country}
          secondary={d[selectedSituation] + translate('case')}
          />
        </ListItem>);
      })
    }
    </div>)
}

export default Ranking;
