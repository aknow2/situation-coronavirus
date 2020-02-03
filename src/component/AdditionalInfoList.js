import React from 'react';
import { ListItem, ListItemText, Typography, ListItemSecondaryAction, } from '@material-ui/core';
import { translate } from '../util';

const calcTotalConfirmed = (data) => {
  return data.reduce((p, c) => p + c.numOfInfected, 0);
};

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
                { `new ${delta}` }
              </Typography>
            }
            </div>
            </div>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
};

export const createTotalConfirm = (data, oldData) => {
  const totalConfirmed = calcTotalConfirmed(data)
  const newConfirmed = (() => {
    if (oldData) {
      return totalConfirmed - calcTotalConfirmed(oldData);
    }
    return undefined;
  })();
  return (<ListItem>
          <ListItemText primary="total confirmed" />
          <ListItemSecondaryAction>
            <div>
              <Typography color="error" align="right">
                {totalConfirmed}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="textSecondary">
                {newConfirmed ? `new ${newConfirmed}`: undefined}
              </Typography>
            </div>
          </ListItemSecondaryAction>
        </ListItem>);
}

