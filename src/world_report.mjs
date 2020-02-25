import places from './places.mjs';

const src = 'Republic of Korea 763 (161) 13 (0) 4 (0) 605 (129) 141 (32) 7 (2) Japan 144 (12) 28 (0) 5 (0) 104 (10) 7 (2) 1 (0) Singapore 89 (0) 24 (0) 0 (0) 65 (0) 0 (0) 0 (0) Australia 22 (0) 12 (0) 7 (0) 3 (0) 0 (0) 0 (0) Malaysia 22 (0) 18 (0) 2 (0) 2 (0) 0 (0) 0 (0) Viet Nam 16 (0) 8 (0) 0 (0) 8 (0) 0 (0) 0 (0) Philippines 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) 1 (0) Cambodia 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) South-East Asia Region Thailand 35 (0) 23 (0) 0 (0) 6 (0) 6 (0) 0 (0) India 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) 0 (0) Nepal 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Sri Lanka 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Region of the Americas United States of America 35 (0) 14 (0) 18 (0) 2 (0) 1 (0) 0 (0) Canada 9 (0) 7 (0) 1 (0) 1 (0) 0 (0) 0 (0) European Region Italy 124 (48) 3 (0) 0 (0) 10 (0) 111 (48) 2 (0) Germany 16 (0) 2 (0) 0 (0) 14 (0) 0 (0) 0 (0) France 12 (0) 5 (0) 0 (0) 7 (0) 0 (0) 1 (0) The United Kingdom 9 (0) 2 (0) 6 (0) 1 (0) 0 (0) 0 (0) Russian Federation 2 (0) 2 (0) 0 (0) 0 (0) 0 (0) 0 (0) Spain 2 (0) 0 (0) 2 (0) 0 (0) 0 (0) 0 (0) Belgium 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Finland 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Israel 1 (0) 0 (0) 1 (0) 0 (0) 0 (0) 0 (0) Sweden 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Eastern Mediterranean Region Iran 43 (15) 0 (0) 0 (0) 28 (0) 15 (15) 8 (3) United Arab Emirates 13 (0) 6 (0) 2 (0) 5 (0) 0 (0) 0 (0) Kuwait 3 (3) 0 (0) 3 (3) 0 (0) 0 (0) 0 (0) Egypt 1 (0) 0 (0) 0 (0) 1 (0) 0 (0) 0 (0) Lebanon 1 (0) 0 (0) 1 (0) 0 (0) 0 (0) 0 (0) Diamond Princess 695 (61) 0 (0) 0 (0) 0 (0) 695 (61) 3 (1)'
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