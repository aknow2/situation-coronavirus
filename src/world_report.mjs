import places from './places.mjs';

const src = 'Singapore 67 (9) 22 (0) 44 (8) 1 (1) 0 (0) Japan 41 (8) 25 (1) 16 (7) 0 (0) 1 (0) Republic of Korea 28 (0) 13 (0) 12§§ (0) 3 (0) 0 (0) Malaysia 21 (2) 16 (1) 4‡‡ (0) 1 (1) 0 (0) Viet Nam 16 (0) 8 (0) 8 (0) 0 (0) 0 (0) Australia 15 (0) 12 (0) 3 (0) 0 (0) 0 (0) Philippines 3 (0) 3 (0) 0 (0) 0 (0) 1 (0) Cambodia 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) South-East Asia Region Thailand 34 (1) 23 (0) 7 (1) 4 (0) 0 (0) India 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) Nepal 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) Sri Lanka 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) Region of the Americas United States of America 15 (0) 13 (0) 2 (0) 0 (0) 0 (0) Canada 7 (0) 6 (0) 0 (0) 1 (0) 0 (0) European Region Germany 16 (0) 2 (0) 14 (0) 0 (0) 0 (0) France 11 (0) 5 (0) 6 (0) 0 (0) 0 (0) The United Kingdom 9 (0) 2 (0) 7*** (0) 0 (0) 0 (0) Italy 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) Russian Federation 2 (0) 2 (0) 0 (0) 0 (0) 0 (0) Spain 2 (0) 0 (0) 2§ (0) 0 (0) 0 (0) Belgium 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) Finland 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) Sweden 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) Eastern Mediterranean Region United Arab Emirates 8 (0) 6 (0) 1 (0) 1 (0) 0 (0) Egypt 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) Other International conveyance (Japan) 218** (0) 0 (0) 0 (0) 218 (0) 0 (0)'
const formatted = src.replace(/†/g, '')
    .replace(/\*/g, '')
    .replace(/‡/g, '')
    .replace(/§/g, '')
    .replace(/South-East Asia Region/g, '')
    .replace(/Region of the Americas/g, '')
    .replace(/European Region/g, '')
    .replace(/Eastern Mediterranean Region/g, '')
    .replace('Other', '')
    .split(' ')
    .filter(a => !a.includes('(') && a !== '' )
const result = formatted.reduce((prev, current) => {
        if(isNaN(Number(current))) {
          prev.name += prev.name.length > 0 ?' ' + current: current
          return prev
        } else if (prev.area === undefined) {
          const place = places.find(p => p.name === prev.name)
          if (!place) {
            throw new Error(prev.name + ' not found');
          }
          prev.area = {
            placeId: place.id,
            placeName: place.name,
            numOfInfected: Number(current),
            travelHistoryChina: null,
            transmissionOutsideOfChina: null,
            underInvestigation: null,
            deaths: null,
          }
          prev.name = ''
          return prev;
        } else if (prev.area.travelHistoryChina === null) {
          prev.area.travelHistoryChina = Number(current)
          return prev
        } else if (prev.area.transmissionOutsideOfChina === null) {
          prev.area.transmissionOutsideOfChina = Number(current)
          return prev
        } else if (prev.area.underInvestigation === null) {
            prev.area.underInvestigation = Number(current)
            return prev
        } else if (prev.area.deaths === null) {
          prev.area.deaths = Number(current)
          prev.list.push(prev.area)
          prev.area = undefined
          return prev
        }
        return prev
      }, {
        name: '',
        area: undefined, 
        list: []
      })
console.log(result.list)