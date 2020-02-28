import places from './places.mjs';

const src = 'Republic of Korea 977 (214) 13 (0) 4 (0) 605 (0) 355 (214) 10 (3) Japan 157 (13) 28 (0) 7 (2) 110 (3) 12 (8) 1 (0) Singapore 90 (1) 24 (0) 0 (0) 66 (1) 0 (0) 0 (0) Australia 22 (0) 12 (0) 7 (0) 3 (0) 0 (0) 0 (0) Malaysia 22 (0) 18 (0) 2 (0) 2 (0) 0 (0) 0 (0) Viet Nam 16 (0) 8 (0) 0 (0) 8 (0) 0 (0) 0 (0) Philippines 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) 1 (0) Cambodia 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) South-East Asia Region Thailand 37 (2) 23 (0) 0 (0) 7 (1) 7 (1) 0 (0) India 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) 0 (0) Nepal 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Sri Lanka 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Region of the Americas United States of America 53 (18) 14 (0) 36 (18) 2 (0) 1 (0) 0 (0) Canada 10 (1) 7 (0) 1 (0) 1 (0) 1 (1) 0 (0) European Region Italy 229 (105) 3 (0) 0 (0) 121 (0) 105 (105) 6 (4) Germany 16 (0) 2 (0) 0 (0) 14 (0) 0 (0) 0 (0) France 12 (0) 5 (0) 0 (0) 7 (0) 0 (0) 1 (0) The United Kingdom* 13 (0) 2 (0) 10 (0) 1 (0) 0 (0) 0 (0) Israel 2 (1) 0 (0) 2 (1) 0 (0) 0 (0) 0 (0) Russian Federation 2 (0) 2 (0) 0 (0) 0 (0) 0 (0) 0 (0) Spain 2 (0) 0 (0) 2 (0) 0 (0) 0 (0) 0 (0) Belgium 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Finland 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Sweden 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Eastern Mediterranean Region Iran 61 (18) 0 (0) 0 (0) 28 (0) 33 (18) 12 (4) United Arab Emirates 13 (0) 6 (0) 2 (0) 5 (0) 0 (0) 0 (0) Bahrain 8 (8) 0 (0) 8 (8) 0 (0) 0 (0) 0 (0) Kuwait 8 (5) 0 (0) 8 (5) 0 (0) 0 (0) 0 (0) Oman 2 (2) 0 (0) 2 (2) 0 (0) 0 (0) 0 (0) Afghanistan 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) Egypt 1 (0) 0 (0) 0 (0) 1 (0) 0 (0) 0 (0) Iraq 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) Lebanon 1 (0) 0 (0) 1 (0) 0 (0) 0 (0) 0 (0) Diamond Princess 691 (0) 0 (0) 0 (0) 0 (0) 691 (0) 3 (0)'
const formatted = src.replace(/†/g, '')
    .replace(/\*/g, '')
    .replace(/‡/g, '')
    .replace(/§/g, '')
    .replace(/Western Pacific Region /g, '')
    .replace(/South-East Asia Region/g, '')
    .replace(/Region of the Americas/g, '')
    .replace(/European Region/g, '')
    .replace(/Eastern Mediterranean Region/g, '')
    .replace('Other', '')
    .split(' ')
    .filter(a => !a.includes('(') && a !== '' )
const result = formatted.reduce((prev, current) => {
  console.log(current)
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
            outsideReporting: null,
            transmissionOutsideOfChina: null,
            underInvestigation: null,
            deaths: null,
          }
          prev.name = ''
          return prev;
        } else if (prev.area.travelHistoryChina === null) {
          prev.area.travelHistoryChina = Number(current)
          return prev
        } else if (prev.area.outsideReporting === null) {
          prev.area.outsideReporting = Number(current)
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