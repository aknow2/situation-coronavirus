import places from './places.mjs';

const src = 'Hubei 31728 Guangdong 1177 Zhejiang 1117 Henan 1105 Hunan 912 Anhui 860 Jiangxi 804 Jiangsu 515 Chongqing 486 Shandong 486 Sichuan 417 Heilongjiang 360 Beijing 342 Shanghai 302 Fujian 267 Hebei 239 Shaanxi 219 Guangxi 215 Yunnan 149 Hainan 142 Shanxi 122 Guizhou 118 Liaoning 108 Tianjin 96 Gansu 86 Jilin 81 Inner Mongolia 58 Xinjiang 55 Ningxia 53 Hong Kong 42 Qinghai 18 Taiwan 18 Macau 10 Xizang 1'
const splittedList = src.split(' ')

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


console.log(result.list);