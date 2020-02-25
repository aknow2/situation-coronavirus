import places from './places.mjs';

const src = 'Hubei 5917 398 450 149 64287 2495 Guangdong 11346 3 0 0 1345 6 Henan 9605 0 9 0 1271 19 Zhejiang 5737 0 5 0 1205 1 Hunan 6899 0 1 0 1016 4 Anhui 6324 0 0 0 989 6 Jiangxi 4648 0 0 0 934 1 Shandong 10047 1 1 0 755 4 Jiangsu 8051 0 0 0 631 0 Chongqing 3102 2 8 0 575 6 Sichuan 8341 1 8 0 527 3 Heilongjiang 3773 0 0 0 480 12 Beijing 2154 0 30 0 399 4 Shanghai 2424 0 36 0 335 3 Hebei 7556 0 0 0 311 6 Fujian 3941 0 1 0 293 1 Guangxi 4926 2 4 0 251 2 Shaanxi 3864 0 0 0 245 1 Yunnan 4830 0 7 0 174 2 Hainan 934 0 10 1 168 5 Guizhou 3600 0 2 0 146 2 Tianjin 1560 0 22 0 135 3 Shanxi 3718 0 4 0 132 0 Liaoning 4359 0 15 0 121 1 Jilin 2704 2 7 0 93 1 Gansu 2637 0 0 0 91 2 Xinjiang 2487 0 0 0 76 2 Inner Mongolia 2534 0 0 0 75 0 Hong Kong SAR 745 4 0 0 74 2 Ningxia 688 0 0 0 71 0 Taiwan 2359 2 0 0 28 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
const splittedList = src.replace(/\*/g, '').split(' ').filter(s => s !== '' || s === '')
    
const result = splittedList.reduce((prev, current) => {
  console.log(current);
  if(isNaN(Number(current))&& current !== '-') {
    prev.name += prev.name.length > 0 ?' ' + current: current
    return prev
  }else if (prev.area === undefined) {
    const place = places.find(p => p.name === prev.name)
    if (!place) {
      console.log('#### ' + prev.name);
      throw new Error(prev.name);
    }
    prev.area = {
      placeId: place.id,
      placeName: place.name,
      numOfInfected: null,
      population: Number(current),
      clinicallyDiagnosed: null,
      suspect: null,
      deaths: null,
    }
    prev.name = ''
    return prev;
  }  else if(prev.skip < 3){
    prev.skip++;
    return prev;
  } else if (prev.area.numOfInfected === null) {
    prev.area.numOfInfected = Number(current)
    return prev
  } else {
    prev.area.deaths = Number(current)
    prev.list.push(prev.area)
    prev.area = undefined
    prev.skip = 0
    return prev
  }
  /*else if (prev.area.suspect === null) {
    prev.area.suspect = Number(current)
    return prev
  } else if (prev.area.deaths === null) {
    prev.area.deaths = Number(current)
    prev.list.push(prev.area)
    prev.area = undefined
    return prev
  }*/
}, {
  name: '',
  skip: 0,
  area: undefined, 
  list: []
})

/*
const result = splittedList.reduce((prev, current) => {
  console.log(current);
  if(isNaN(Number(current))) {
    prev.name += prev.name.length > 0 ?' ' + current: current
    return prev
  } else {
    const place = places.find(p => p.name === prev.name)
    if (!place) {
      throw new Error(prev.name);
    }
    const area = {
      placeId: place.id,
      placeName: place.name,
      numOfInfected: Number(current),
      travelHistoryChina: null,
      transmissionOutsideOfChina: null,
      underInvestigation: null,
      deaths: null,
    }
    prev.list.push(area)
    prev.name = ''
    return prev;
  }
}, {
  name: '',
  list: []
})
*/


console.log(result.list);