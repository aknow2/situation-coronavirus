import places from './places.mjs';

const src = 'Hubei 5917 631 1279 115 62662 2144 Guangdong 11346 1 1 0 1333 5 Henan 9605 2 31 0 1267 19 Zhejiang 5737 28 4 1 1203 1 Hunan 6899 1 5 0 1011 4 Anhui 6324 1 1 0 988 6 Jiangxi 4648 0 0 0 934 1 Shandong 10047 202 14 0 748 4 Jiangsu 8051 0 1 0 631 0 Chongqing 3102 7 28 1 567 6 Sichuan 8341 5 15 0 525 3 Heilongjiang 3773 3 1 0 479 12 Beijing 2154 1 41 0 396 4 Shanghai 2424 1 62 0 334 2 Hebei 7556 1 0 0 308 5 Fujian 3941 0 0 0 293 1 Guangxi 4926 1 15 0 246 2 Shaanxi 3864 0 8 0 245 1 Yunnan 4830 2 21 1 174 2 Hainan 934 0 16 0 168 4 Guizhou 3600 0 3 0 146 2 Shanxi 3718 1 5 0 132 0 Tianjin 1560 1 37 0 131 3 Liaoning 4359 0 20 0 121 1 Jilin 2704 0 4 0 91 1 Gansu 2637 0 1 0 91 2 Xinjiang 2487 0 0 0 76 1 Inner Mongolia 2534 0 0 0 75 0 Ningxia 688 0 1 0 71 0 Hong Kong SAR 745 3 0 0 68 2 Taiwan 2359 2 0 0 26 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
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