import React from 'react';
import { ListItem, ListItemText, Typography, ListItemSecondaryAction, } from '@material-ui/core';
import { translate, reduce, filterAreas, selectableSituationMap, calcDelta } from '../util';

export const createAdditionalInfoList = (additionalInfo, oldAdditionalInfo) => {
  return Object.keys(additionalInfo).map(key => { 
    const oldValue = !!oldAdditionalInfo ? oldAdditionalInfo[key] : additionalInfo[key];
    const delta = additionalInfo[key] - oldValue
    return (
      <ListItem key={key}>
        <ListItemText primary={translate(key)} />
        <ListItemSecondaryAction>
            <div style={{flexDirection:"column", alignItems: "end"}}>
            <div>
              <Typography align="right">
                {additionalInfo[key]}
              </Typography>
            </div>
            <div>
            {
              !!delta &&
              <Typography variant="body2" color="textSecondary">
                { `${translate('new')} ${delta}` }
              </Typography>
            }
            </div>
            </div>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
};

export const situationMap = {
 total_confirmed: selectableSituationMap.total_confirmed,
 deaths: selectableSituationMap.deaths
}

export const createItem = (data, oldData, key, filterKey) => {
  const filteredData = filterAreas(data, filterKey);
  const result = reduce(filteredData, key);
  const deltaResult = calcDelta(result, oldData, key, filterKey);
  return (<ListItem>
          <ListItemText primary={translate(key)} secondary={translate(filterKey)} />
          <ListItemSecondaryAction>
            <div>
              <Typography color="error" align="right">
                {result}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="textSecondary">
                {deltaResult ? `${translate('new')} ${deltaResult}`: undefined}
              </Typography>
            </div>
          </ListItemSecondaryAction>
        </ListItem>);
}

