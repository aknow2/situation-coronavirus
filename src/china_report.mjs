import places from './places.mjs';

const src = 'Hubei 5917 34874 Guangdong 11346 1241 Zhejiang 5737 1145 Henan 9605 1169 Hunan 6899 968 Anhui 6324 910 Jiangxi 4648 872 Jiangsu 8051 570 Chongqing 3102 518 Shandong 10047 506 Sichuan 8341 451 Heilongjiang 3773 395 Beijing 2154 366 Shanghai 2424 313 Fujian 3941 279 Hebei 7556 265 Shaanxi 3864 229 Guangxi 4926 222 Yunnan 4830 155 Hainan 934 157 Shanxi 3718 126 Guizhou 3600 135 Liaoning 4359 116 Tianjin 1560 112 Gansu 2637 87 Jilin 2704 84 Inner Mongolia 2534 61 Xinjiang 2487 63 Ningxia 688 64 Hong Kong 745 50 Qinghai 603 18 Taiwan 2359 18 Macau 66 10 Xizang 344 1'
const splittedList = src.split(' ')

const result = splittedList.reduce((prev, current) => {
  if(isNaN(Number(current))) {
    prev.name += prev.name.length > 0 ?' ' + current: current
    return prev
  } else if (prev.area === undefined) {
    const place = places.find(p => p.name === prev.name)
    if (!place) {
      throw new Error();
    }
    prev.area = {
      placeId: place.id,
      numOfInfected: null,
      population: Number(current),
      suspect: null,
      deaths: null,
    }
    prev.name = ''
    return prev;
  } else if (prev.area.numOfInfected === null) {
    prev.area.numOfInfected = Number(current)
    prev.list.push(prev.area)
    prev.area = undefined
    return prev
  } /*else if (prev.area.suspect === null) {
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
  area: undefined, 
  list: []
})


/*
 v1
const result = splittedList.reduce((prev, current) => {
  if(isNaN(Number(current))) {
    prev.name += prev.name.length > 0 ?' ' + current: current
    return prev
  } else {
    const place = places.find(p => p.name === prev.name)
    const area = {
      placeId: !!place ? place.id : prev.name,
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