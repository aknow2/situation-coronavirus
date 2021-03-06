import React, { useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import PauseIcon from '@material-ui/icons/PauseCircleFilled'
import {ListItemSecondaryAction, Card, List, ListItem, Typography, IconButton, Grid, Slider, ListItemText,  MenuItem, Menu, Divider } from '@material-ui/core';
import { createItem, situationMap } from './AdditionalInfoList';
import { translate, selectableCountryMap, selectableSituationMap, selectableAxisMap, reduce, calcDelta } from '../util';
import Ranking from './Ranking';

const selectableSituations = Object.values(selectableSituationMap);
const selectableAxis = Object.values(selectableAxisMap);


const getCurrentValue = (selectedAxis, data, old, key) => {

  if (selectedAxis === selectableAxisMap.perMillion) {
    return undefined;
  }

  const sum = reduce(data, key)
  if (selectedAxis === selectableAxisMap.total) {
    return sum
  }
  return calcDelta(sum, old, key, selectableCountryMap.all_country)
}

const getCurrentValueLabel = (selectedAxis, currentValue) => {
  if (selectedAxis === selectableAxisMap.perMillion) {
    return '';
  }
  return `${currentValue}${translate('case')}`
}

function SummaryCard (props){
  const {data, oldData, day, nextDate, prevDate, dateList,
    plotData,
    selectedSituation,
    onSelectSituation,
    selectedAxis,
    onSelectAxis,
    play,
    pause,
    playing,
    onChangeDate} = props;
  const [situationMenuEl, toggleSituationMenuEl] = useState(null);
  const [axisMenuEl, toggleAxisMenuEl] = useState(null);
  const totalConfirmed = createItem(data, oldData, situationMap.total_confirmed, selectableCountryMap.all_country);
  const totalDeaths = createItem(data, oldData, situationMap.deaths, selectableCountryMap.all_country);
  const dayList = dateList.map((s, i) => ({ value: i, day: s.day }));
  const selectedIndex = dayList.find(d => d.day === day).value;
  const currentValue = getCurrentValue(selectedAxis, data, oldData, selectedSituation)??0
 return <Card
    style={{
      width: 280,
      position: "absolute",
      top: 165,
      right: 16,
      zIndex: 999,
    }}
  >
    <List component="nav">
        <ListItem>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={5}>
              <Typography style={{textAlign: 'center'}}>
                {day}
              </Typography>
            </Grid>
            <Grid item xs={2}>
            <IconButton size="small" onClick={prevDate}>
              <ArrowLeftIcon />
            </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton size="small" onClick={nextDate}>
              <ArrowRightIcon />
            </IconButton>
            </Grid>
            <Grid item xs={1}>
              {
                !playing &&
                <IconButton size="small" onClick={play} >
                  <PlayIcon />
                </IconButton>
              }
              {
                playing &&
                <IconButton size="small" onClick={pause} >
                  <PauseIcon />
                </IconButton>
              }             
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
        <ListItem>
          <ListItemText
            onClick={ ev => {
              toggleAxisMenuEl(ev.target);
            }}
            aria-controls="axis-menu"
            primary={translate('aggregation')}
            secondary={`${translate(selectedAxis)}`}/>
        <Menu
            id="axis-menu"
            anchorEl={axisMenuEl}
            open={!!axisMenuEl}
            value={selectedAxis}
            onClose={() => {
              toggleAxisMenuEl(null);
            }}
          >
            {
              selectableAxis.map(s => {
                return (
                  <MenuItem
                    key={s}
                    onClick={() => {
                      onSelectAxis(s);
                      toggleAxisMenuEl(null);
                    }}
                    value={s}>
                    {translate(s)}
                  </MenuItem>
                )
              })
            }
          </Menu>
          <ListItemSecondaryAction>
            <ArrowDownIcon
              onClick={ ev => {
                toggleAxisMenuEl(ev.target);
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText
            onClick={ ev => {
              toggleSituationMenuEl(ev.target);
            }}
            aria-controls="situation-menu"
            primary={translate('situation')}
            secondary={`${translate(selectedSituation)}  ${getCurrentValueLabel(selectedAxis, currentValue)}`}/>
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
          <ListItemSecondaryAction>
            <ArrowDownIcon
              onClick={ ev => {
                toggleSituationMenuEl(ev.target);
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
       <Divider />
      </List>
      <List style={{ maxHeight: window.innerHeight/5, overflowY: 'scroll' }}>
        {
          totalConfirmed
        }
        {
          totalDeaths
        }
       <Divider />
       {
         <Ranking
          data={plotData}
          selectedSituation={selectedSituation} 
         />
       }
      </List>
  </Card>
}

export default SummaryCard;

