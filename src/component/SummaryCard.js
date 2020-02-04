import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Card, CardHeader, List, ListItem, Typography, IconButton, Grid, Slider } from '@material-ui/core';
import { createAdditionalInfoList, createTotalConfirm } from './AdditionalInfoList';


function SummaryCard (props){
  const {data, oldData, additionalInfo, oldAdditionalInfo, day, nextDate, prevDate, dateList ,onChangeDate} = props;
  const totalConfirmed = createTotalConfirm(data, oldData);
  const addtionalInfoList = createAdditionalInfoList(additionalInfo, oldAdditionalInfo);
  const dayList = dateList.map((s, i) => ({ value: i, day: s.day }));
  const selectedIndex = dayList.find(d => d.day === day).value;
  return <Card
    style={{
      width: 250,
      position: "absolute",
      top: 185,
      right: 16,
      zIndex: 999,
    }}
  >
    <CardHeader 
      title="Summary"
    />
    <List component="nav" aria-label="secondary mailbox folders">
        <ListItem>
          <Grid container spacing={0}>
            <Grid item xs={2}>
            <IconButton size="small" onClick={prevDate}>
              <ArrowLeftIcon />
            </IconButton>
            </Grid>
            <Grid item xs={8}>
              <Typography style={{textAlign: 'center'}}>
                {day}
              </Typography>
            </Grid>
            <Grid item xs={2}>
            <IconButton size="small" onClick={nextDate}>
              <ArrowRightIcon />
            </IconButton>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </ListItem>
        {
          totalConfirmed
        }
        {
          addtionalInfoList
        }
      </List>
  </Card>
}

export default SummaryCard;

