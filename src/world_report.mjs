import places from './places.mjs';

const src = 'Republic of Korea 1766 (505) 13 (0) 4 (0) 605 (0) 1144 (505) 13 (1) Japan 186 (22) 28 (0) 11 (3) 129 (13) 18 (6) 3 (2) Singapore 93 (2) 24 (0) 0 (0) 69 (2) 0 (0) 0 (0) Australia 23 (0) 12 (0) 8 (0) 3 (0) 0 (0) 0 (0) Malaysia 22 (0) 18 (0) 2 (0) 2 (0) 0 (0) 0 (0) Viet Nam 16 (0) 8 (0) 0 (0) 8 (0) 0 (0) 0 (0) Philippines 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) 1 (0) Cambodia 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) South-East Asia Region Thailand 40 (0) 23 (0) 0 (0) 7 (0) 10 (0) 0 (0) India 3 (0) 3 (0) 0 (0) 0 (0) 0 (0) 0 (0) Nepal 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Sri Lanka 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Region of the Americas United States of America 59 (6) 14 (0) 42 (6) 2 (0) 1 (0) 0 (0) Canada 11 (1) 7 (0) 2 (1) 1 (0) 1 (0) 0 (0) Brazil 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) European Region Italy 400 (78) 3 (0) 0 (0) 121 (0) 276 (78) 12 (1) Germany 21 (3) 2 (0) 1 (1) 14 (0) 4 (2) 0 (0) France 18 (6) 6 (1) 2 (2) 7 (0) 3 (3) 2 (1) The United Kingdom 13 (0) 2 (0) 10 (0) 1 (0) 0 (0) 0 (0) Spain 12 (10) 0 (0) 10 (8) 1 (1) 1 (1) 0 (0) Croatia 3 (1) 0 (0) 2 (1) 1 (0) 0 (0) 0 (0) Austria 2 (0) 0 (0) 2 (0) 0 (0) 0 (0) 0 (0) Finland 2 (1) 1 (0) 1 (1) 0 (0) 0 (0) 0 (0) Israel 2 (0) 0 (0) 2 (0) 0 (0) 0 (0) 0 (0) Russian Federation 2 (0) 2 (0) 0 (0) 0 (0) 0 (0) 0 (0) Sweden 2 (1) 1 (0) 1 (1) 0 (0) 0 (0) 0 (0) Belgium 1 (0) 1 (0) 0 (0) 0 (0) 0 (0) 0 (0) Denmark 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) Estonia 1 (1) 0 (0) 0 (0) 0 (0) 1 (1) 0 (0) Georgia 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) Greece 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) North Macedonia 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) Norway 1 (1) 1 (1) 0 (0) 0 (0) 0 (0) 0 (0) Romania 1 (1) 0 (0) 1 (1) 0 (0) 0 (0) 0 (0) Switzerland 1 (0) 0 (0) 1 (0) 0 (0) 0 (0) 0 (0) Eastern Mediterranean Region Iran (Islamic Republic of) 141 (46) 0 (0) 0 (0) 28 (0) 113 (46) 22 (7) Kuwait 43 (31) 0 (0) 43 (31) 0 (0) 0 (0) 0 (0) Bahrain 33 (7) 0 (0) 33 (7) 0 (0) 0 (0) 0 (0) United Arab Emirates 13 (0) 6 (0) 2 (0) 5 (0) 0 (0) 0 (0) Iraq 6 (1) 0 (0) 6 (1) 0 (0) 0 (0) 0 (0) Oman 4 (0) 0 (0) 4 (0) 0 (0) 0 (0) 0 (0) Lebanon 2 (1) 0 (0) 1 (0) 0 (0) 1 (1) 0 (0) Pakistan 2 (2) 0 (0) 2 (2) 0 (0) 0 (0) 0 (0) Afghanistan 1 (0) 0 (0) 1 (0) 0 (0) 0 (0) 0 (0) Egypt 1 (0) 0 (0) 0 (0) 1 (0) 0 (0) 0 (0) African Region Algeria 1 (0) 0 (0) 1 (0) 0 (0) 0 (0) 0 (0) International conveyance‡ (Diamond Princess) 705 (14) 0 (0) 0 (0) 0 (0) 0 (0) 4 (1)'
const formatted = src.replace('International conveyance‡ (Diamond Princess) ', 'Diamond Princess ')
    .replace('Iran (Islamic Republic of) ', 'Iran ')
    .replace(/†/g, '')
    .replace(/\*/g, '')
    .replace(/‡/g, '')
    .replace(/§/g, '')
    .replace(/Western Pacific Region /g, '')
    .replace(/African Region /g, '')
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