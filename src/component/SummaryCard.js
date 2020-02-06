import React, { useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown'
import {ListItemSecondaryAction, Card, List, ListItem, Typography, IconButton, Grid, Slider, ListItemText,  MenuItem, Menu, Divider } from '@material-ui/core';
import { createAdditionalInfoList, createItem, situationMap } from './AdditionalInfoList';
import { translate, selectableCountryMap, selectableSituationMap } from '../util';

const selectableSituations = Object.values(selectableSituationMap);
function SummaryCard (props){
  const {data, oldData, additionalInfo,
    oldAdditionalInfo, day, nextDate, prevDate, dateList,
    selectedSituation,
    onSelectSituation,
    onChangeDate} = props;
  const [situationMenuEl, toggleSituationMenuEl] = useState(null);
  const totalConfirmed = createItem(data, oldData, situationMap.total_confirmed, selectableCountryMap.all_country);
  const totalDeaths = createItem(data, oldData, situationMap.deaths, selectableCountryMap.china);
  const totalOutsideDeaths = createItem(data, oldData, situationMap.deaths, selectableCountryMap.outside_china);
  const addtionalInfoList = createAdditionalInfoList(additionalInfo, oldAdditionalInfo);
  const dayList = dateList.map((s, i) => ({ value: i, day: s.day }));
  const selectedIndex = dayList.find(d => d.day === day).value;
  return <Card
    style={{
      width: 270,
      position: "absolute",
      top: 165,
      right: 16,
      zIndex: 999,
    }}
  >
    <List component="nav">
        <ListItem>
          <ListItemText
            onClick={ ev => {
              toggleSituationMenuEl(ev.target);
            }}
            aria-controls="situation-menu"
            primary={translate('aggregation')}
            secondary={translate(selectedSituation)}/>
          <ListItemSecondaryAction>
            <ArrowDownIcon
              onClick={ ev => {
                toggleSituationMenuEl(ev.target);
              }}
            />
          </ListItemSecondaryAction>
            <Menu
                id="situation-menu"
                anchorEl={situationMenuEl}
                open={!!situationMenuEl}
                value={selectedSituation}
                onClose={() => {
                  toggleSituationMenuEl(null);
                }}
              >
                {
                  selectableSituations.map(s => {
                    return (
                      <MenuItem
                        key={s}
                        onClick={() => {
                          onSelectSituation(s);
                          toggleSituationMenuEl(null);
                        }}
                        value={s}>
                        {translate(s)}
                      </MenuItem>
                    )
                  })
                }
              </Menu>
        </ListItem>
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
        <Divider />
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

