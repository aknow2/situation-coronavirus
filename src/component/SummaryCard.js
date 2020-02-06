import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Card, List, ListItem, Typography, IconButton, Grid, Slider, ListSubheader } from '@material-ui/core';
import { createAdditionalInfoList, createItem, situationMap } from './AdditionalInfoList';
import { translate, selectableCountryMap } from '../util';


function SummaryCard (props){
  const {data, oldData, additionalInfo, oldAdditionalInfo, day, nextDate, prevDate, dateList ,onChangeDate} = props;
  const totalConfirmed = createItem(data, oldData, situationMap.total_confirmed, selectableCountryMap.all_country);
  const totalDeaths = createItem(data, oldData, situationMap.deaths, selectableCountryMap.china);
  const totalOutsideDeaths = createItem(data, oldData, situationMap.deaths, selectableCountryMap.outside_china);
  const addtionalInfoList = createAdditionalInfoList(additionalInfo, oldAdditionalInfo);
  const dayList = dateList.map((s, i) => ({ value: i, day: s.day }));
  const selectedIndex = dayList.find(d => d.day === day).value;
  return <Card
    style={{
      width: 250,
      position: "absolute",
      top: 165,
      right: 16,
      zIndex: 999,
    }}
  >
    <List
      component="nav"
      subheader={
        <ListSubheader>
          {translate('summary')}
        </ListSubheader>
      }
      aria-label="secondary mailbox folders">
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
          totalDeaths
        }
        {
          totalOutsideDeaths
        }
        {
          addtionalInfoList
        }
      </List>
  </Card>
}

export default SummaryCard;

