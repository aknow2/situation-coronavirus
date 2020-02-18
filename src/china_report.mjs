import places from './places.mjs';

const src = 'Hubei 5917 1933 909 100 58182 1696 Guangdong 11346 6 1 2 1322 4 Henan 9605 15 112 3 1246 16 Zhejiang 5737 4 13 0 1171 0 Hunan 6899 2 14 0 1006 3 Anhui 6324 11 9 0 973 6 Jiangxi 4648 5 2 0 930 1 Jiangsu 8051 9 3 0 626 0 Chongqing 3102 7 63 0 551 5 Shandong 10047 4 21 0 541 2 Sichuan 8341 14 40 0 495 3 Heilongjiang 3773 12 27 0 457 11 Beijing 2154 1 33 0 381 4 Shanghai 2424 3 67 0 331 1 Hebei 7556 1 2 0 301 3 Fujian 3941 3 3 0 290 0 Shaanxi 3864 4 15 0 240 0 Guangxi 4926 1 26 0 238 2 Yunnan 4830 2 22 0 171 0 Hainan 934 0 27 0 162 4 Guizhou 3600 2 2 0 146 1 Shanxi 3718 1 5 0 129 0 Tianjin 1560 2 88 0 124 3 Liaoning 4359 1 45 0 121 1 Gansu 2637 1 0 0 91 2 Jilin 2704 0 9 0 89 1 Xinjiang 2487 2 2 0 73 1 Inner Mongolia 2534 2 3 0 72 0 Ningxia 688 0 0 0 70 0 Hong Kong SAR 745 1 0 0 57 1 Taiwan 2359 2 0 1 20 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
const splittedList = src.split(' ').filter(s => s !== '' || s === '')
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