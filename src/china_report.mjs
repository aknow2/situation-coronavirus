import places from './places.mjs';

const src = 'Hubei 11177 Zhejiang 724 Guangdong 683 Henan 566 Hunan 521 Anhui 408 Jiangxi 391 Chongqing 300 Jiangsu 271 Sichuan 254 Shandong 246 Beijing 212 Shanghai 193 Fujian 179 Shaanxi 128 Guangxi 127 Heilongjiang 118 Hebei 113 Yunnan 109 Liaoning 70 Hainan 70 Shanxi 66 Gansu 51 Tianjin 49 Guizhou 46 Inner Mongolia 33 Jilin 31 Ningxia 31 Xinjiang 24 Hong Kong SAR 15 Qinghai 13 Taiwan 10 Macau SAR 8 Xizang 1'
const splittedList = src.split(' ').filter(s => s !== '' || s === '')
/*
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
  }*
}, {
  name: '',
  skip: 0,
  area: undefined, 
  list: []
})
*/


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


console.log(result.list);