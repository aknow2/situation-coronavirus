import React from 'react';
import { Card, CardHeader, List, ListItem, ListItemText, Typography, ListItemSecondaryAction } from '@material-ui/core';

function SummaryCard (props){
  const {data, addtionalInfo} = props;
  const totalConfirmed = data.reduce((p, c) => p + c.numOfInfected, 0);
  const addtionalInfoList = Object.keys(addtionalInfo).map(key => { 
    return (
      <ListItem>
        <ListItemText primary={key} />
        <ListItemSecondaryAction>
          <Typography>
            {addtionalInfo[key]}
          </Typography>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return <Card
    style={{
      width: 250,
      position: "absolute",
      top: 200,
      left: 32,
      zIndex: 999,
    }}
  >
    <CardHeader 
      title="Summary"
    />
    <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <ListItemText primary="total confirmed" />
          <ListItemSecondaryAction>
            <Typography color="error">
              {totalConfirmed}
            </Typography>
          </ListItemSecondaryAction>
        </ListItem>
        {
          addtionalInfoList
        }
      </List>
  </Card>
}

export default SummaryCard;

