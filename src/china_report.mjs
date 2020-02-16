import places from './places.mjs';

const src = 'Hubei 5917 1282 1138 2420 1216 139 37884 16522 54406 1457 Guangdong 11346 33 - 33 9 0 1294 - 1294 2 Henan 9605 28 - 28 153 2 1212 - 1212 13 Zhejiang 5737 7 - 7 23 0 1162 - 1162 0 Hunan 6899 13 - 13 50 0 1001 - 1001 2 Anhui 6324 16 - 16 13 0 950 - 950 6 Jiangxi 4648 13 - 13 21 0 913 - 913 1 Jiangsu 8051 11 - 11 3 0 604 - 604 0 Chongqing 3102 8 - 8 98 1 537 - 537 5 Shandong 10047 11 - 11 27 0 530 - 530 2 Sichuan 8341 7 - 7 72 0 470 - 470 1 Heilongjiang 3773 7 - 7 48 0 425 - 425 11 Beijing 2154 3 - 3 51 1 375 - 375 4 Shanghai 2424 8 - 8 87 0 326 - 326 1 Hebei 7556 8 - 8 8 0 291 - 291 3 Fujian 3941 4 - 4 6 0 285 - 285 0 Guangxi 4926 9 - 9 44 0 235 - 235 2 Shaanxi 3864 2 - 2 37 0 232 - 232 0 Yunnan 4830 6 - 6 39 0 168 - 168 0 Hainan 934 5 - 5 36 0 162 - 162 4 Guizhou 3600 3 - 3 4 0 143 - 143 1 Shanxi 3718 1 - 1 12 0 127 - 127 0 Tianjin 1560 1 - 1 128 0 120 - 120 3 Liaoning 4359 2 - 2 66 0 119 - 119 1 Gansu 2637 0 - 0 4 0 90 - 90 2 Jilin 2704 2 - 2 8 0 88 - 88 1 Ningxia 688 3 - 3 3 0 70 - 70 0 Xinjiang 2487 5 - 5 4 0 70 - 70 1 Inner Mongolia 2534 5 - 5 7 0 68 - 68 0 Hong Kong SAR 745 3 - 3 0 0 56 - 56 1 Taiwan 2359 0 - 0 0 0 18 - 18 0 Qinghai 603 0 - 0 0 0 18 - 18 0 Macau SAR 66 0 - 0 0 0 10 - 10 0 Xizang 344 0 - 0 0 0 1 - 1 0'
const splittedList = src.split(' ').filter(s => s !== '' || s === '')
const result = splittedList.reduce((prev, current) => {
  console.log(current);
  if(isNaN(Number(current))&& current !== '-') {
    prev.name += prev.name.length > 0 ?' ' + current: current
    return prev
  }else if (prev.area === undefined) {
    const place = places.find(p => p.name === prev.name)
    if (!place) {
      console.log('#### ' + current);
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
  }  else if(prev.skip < 5){
    prev.skip++;
    return prev;
  } else if (prev.area.numOfInfected === null) {
    prev.area.numOfInfected = Number(current)
    return prev
  } else if(prev.area.clinicallyDiagnosed === null) {
    prev.area.clinicallyDiagnosed = current === '-'?0:Number(current);
    return prev
  } else if (prev.skip === 5) {
    prev.skip++;
    return prev;
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