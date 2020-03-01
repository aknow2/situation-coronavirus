import places from './places.mjs';

const src = 'Republic of Korea 2337 (571) 13 (0) Local transmission 0 Japan 210 (24) 4 (1) Local transmission 0 Singapore 96 (3) 0 (0) Local transmission 0 Malaysia 24 (2) 0 (0) Local transmission 1 Australia 23 (0) 0 (0) Local transmission 3 Viet Nam 16 (0) 0 (0) Local transmission 15 Philippines 3 (0) 1 (0) Imported cases only 24 Cambodia 1 (0) 0 (0) Imported cases only 32 New Zealand 1 (1) 0 (0) Imported cases only 0 European Region Italy 650 (250) 17 (5) Local transmission 0 France 38 (20) 2 (0) Local transmission 0 Germany 26 (5) 0 (0) Local transmission 0 Spain 25 (13) 0 (0) Local transmission 0 The United Kingdom 16 (3) 0 (0) Local transmission 0 Sweden 7 (5) 0 (0) Imported cases only 0 Switzerland 6 (5) 0 (0) Imported cases only 0 Austria 4 (2) 0 (0) Imported cases only 0 Norway 4 (3) 0 (0) Imported cases only 1 Greece 3 (2) 0 (0) Imported cases only 1 Israel 3 (1) 0 (0) Imported cases only 0 Croatia 3 (0) 0 (0) Local transmission 0 Finland 2 (0) 0 (0) Imported cases only 2 Russian Federation 2 (0) 0 (0) Imported cases only 28 Belarus 1 (1) 0 (0) Imported cases only 0 Lithuania 1 (1) 0 (0) Imported cases only 0 Netherlands 1 (1) 0 (0) Imported cases only 0 North Macedonia 1 (0) 0 (0) Imported cases only 2 Romania 1 (0) 0 (0) Imported cases only 0 Belgium 1 (0) 0 (0) Imported cases only 24 Denmark 1 (0) 0 (0) Imported cases only 1 Estonia 1 (0) 0 (0) Imported cases only 1 Georgia 1 (0) 0 (0) Imported cases only 0 South-East Asia Region Thailand 40 (0) 0 (0) Local transmission 0 India 3 (0) 0 (0) Imported cases only 25 Nepal 1 (0) 0 (0) Imported cases only 46 Sri Lanka 1 (0) 0 (0) Imported cases only 32 Eastern Mediterranean Region Iran (Islamic Republic of) 245 (104) 26 (4) Local transmission 0 Kuwait 43 (0) 0 (0) Imported cases only 0 Bahrain 33 (0) 0 (0) Imported cases only 0 United Arab Emirates 19 (6) 0 (0) Local transmission 1 Iraq 7 (1) 0 (0) Imported cases only 0 Oman 6 (2) 0 (0) Imported cases only 1 Lebanon 2 (0) 0 (0) Imported cases only 2 Pakistan 2 (0) 0 (0) Imported cases only 2 Afghanistan 1 (0) 0 (0) Imported cases only 4 Egypt 1 (0) 0 (0) Imported cases only 14 Region of the Americas United States of America 59 (0) 0 (0) Local transmission 2 Canada 11 (0) 0 (0) Imported cases only 2 Brazil 1 (0) 0 (0) Imported cases only 2 African Region Algeria 1 (0) 0 (0) Imported cases only 3 Nigeria 1 (1) 0 (0) Imported cases only 0 Subtotal for all regions 3986 (1027) 63 (10) International conveyance (Diamond Princess) ‡ 705 (0) 4 (0) Local transmission 2'
const formatted = src.replace('International conveyance‡ (Diamond Princess) ', 'Diamond Princess ')
    .replace('Iran (Islamic Republic of) ', 'Iran ')
    .replace(/†/g, '')
    .replace(/\*/g, '')
    .replace(/‡/g, '')
    .replace(/§/g, '')
    .replace(/Western Pacific Region /g, '')
    .replace(/Imported cases only /g, '')
    .replace(/Local transmission /g, '')
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
        } else if (prev.area.deaths === null) {
          prev.area.deaths = Number(current)
          return prev
        } else {
          prev.list.push(prev.area)
          prev.area = undefined
          return prev
        }
      }, {
        name: '',
        area: undefined, 
        list: []
      })
console.log(result.list)