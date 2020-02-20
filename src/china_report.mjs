import places from './places.mjs';

const src = 'Hubei 5917 1693 596 132 61682 1921 Guangdong 11346 3 1 1 1331 5 Henan 9605 5 121 0 1262 19 Zhejiang 5737 1 9 0 1173 0 Hunan 6899 1 12 0 1008 4 Anhui 6324 4 0 0 986 6 Jiangxi 4648 1 0 0 934 1 Jiangsu 8051 2 0 0 631 0 Chongqing 3102 2 41 0 555 5 Shandong 10047 1 8 1 544 3 Sichuan 8341 6 30 0 514 3 Heilongjiang 3773 6 21 1 470 12 Beijing 2154 6 58 0 393 4 Shanghai 2424 0 78 0 333 1 Hebei 7556 4 0 0 306 4 Fujian 3941 1 4 0 293 0 Guangxi 4926 2 12 0 244 2 Shaanxi 3864 2 19 0 242 0 Yunnan 4830 1 16 0 173 0 Hainan 934 0 14 0 163 4 Guizhou 3600 0 2 1 146 2 Shanxi 3718 1 3 0 131 0 Tianjin 1560 3 62 0 128 3 Liaoning 4359 0 64 0 121 1 Gansu 2637 0 0 0 91 2 Jilin 2704 1 11 0 90 1 Xinjiang 2487 0 0 0 76 1 Inner Mongolia 2534 2 3 0 75 0 Ningxia 688 1 0 0 71 0 Hong Kong SAR 745 2 0 0 62 1 Taiwan 2359 1 0 0 23 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
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