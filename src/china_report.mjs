import places from './places.mjs';

const src = 'Hubei 5917 409 403 26 65596 2641 Guangdong 11346 0 0 0 1347 7 Henan 9605 1 2 1 1272 20 Zhejiang 5737 0 0 0 1205 1 Hunan 6899 1 0 0 1017 4 Anhui 6324 0 0 0 989 6 Jiangxi 4648 0 0 0 934 1 Shandong 10047 0 0 0 756 6 Jiangsu 8051 0 0 0 631 0 Chongqing 3102 0 11 0 576 6 Sichuan 8341 3 4 0 534 3 Heilongjiang 3773 0 0 1 480 13 Beijing 2154 10 10 1 410 5 Shanghai 2424 1 33 0 337 3 Hebei 7556 5 0 0 317 6 Fujian 3941 2 0 0 296 1 Guangxi 4926 0 0 0 252 2 Shaanxi 3864 0 0 0 245 1 Yunnan 4830 0 3 0 174 2 Hainan 934 0 4 0 168 5 Guizhou 3600 0 1 0 146 2 Tianjin 1560 0 20 0 135 3 Shanxi 3718 0 1 0 133 0 Liaoning 4359 0 14 0 121 1 Jilin 2704 0 2 0 93 1 Gansu 2637 0 0 0 91 2 Hong Kong SAR 745 6 0 0 91 2 Xinjiang 2487 0 0 0 76 2 Inner Mongolia 2534 0 0 0 75 0 Ningxia 688 1 0 0 72 0 Taiwan 2359 0 0 0 32 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
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