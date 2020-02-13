import places from './places.mjs';

const src = 'Hubei 5917 33366 11295 1068 Guangdong 11346 1219 135 1 Zhejiang 5737 1131 263 0 Henan 9605 1135 538 8 Hunan 6899 946 135 2 Anhui 6324 889 79 4 Jiangxi 4648 844 155 1 Jiangsu 8051 543 62 0 Chongqing 3102 505 428 3 Shandong 10047 497 71 1 Sichuan 8341 436 432 1 Heilongjiang 3773 378 171 8 Beijing 2154 352 218 3 Shanghai 2424 306 177 1 Fujian 3941 272 74 0 Hebei 7556 251 43 2 Shaanxi 3864 225 367 0 Guangxi 4926 222 248 1 Yunnan 4830 154 89 0 Hainan 934 145 206 3 Shanxi 3718 124 65 0 Guizhou 3600 131 53 1 Liaoning 4359 111 287 0 Tianjin 1560 106 328 2 Gansu 2637 86 18 2 Jilin 2704 83 57 1 Inner Mongolia 2534 60 11 0 Xinjiang 2487 59 31 0 Ningxia 688 58 31 0 Hong Kong 745 49 0 1 Qinghai 603 18 0 0 Taiwan 2359 18 0 0 Macau 66 10 0 0 Xizang 344 1 0 0'
const splittedList = src.split(' ')

const result = splittedList.reduce((prev, current) => {
  if(isNaN(Number(current))) {
    prev.name += prev.name.length > 0 ?' ' + current: current
    return prev
  } else if (prev.area === undefined) {
    const place = places.find(p => p.name === prev.name)
    prev.area = {
      placeId: !!place ? place.id : prev.name,
      numOfInfected: null,
      population: Number(current),
      suspect: null,
      deaths: null,
    }
    prev.name = ''
    return prev;
  } else if (prev.area.numOfInfected === null) {
    prev.area.numOfInfected = Number(current)
    return prev
  } else if (prev.area.suspect === null) {
    prev.area.suspect = Number(current)
    return prev
  } else if (prev.area.deaths === null) {
    prev.area.deaths = Number(current)
    prev.list.push(prev.area)
    prev.area = undefined
    return prev
  }
}, {
  name: '',
  area: undefined, 
  list: []
})


console.log(result.list);