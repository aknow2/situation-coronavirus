import places from './places.mjs';
import fs from 'fs';

export const createWorldReport = () => {
  const src = 'Republic of Korea 6767 483 44 2 Local transmission 0 Japan 408 59 6 0 Local transmission 0 Singapore 130 13 0 0 Local transmission 0 Malaysia 83 28 0 0 Local transmission 1 Australia 62 5 2 0 Local transmission 0 Viet Nam 17 1 0 0 Local transmission 0 New Zealand 5 1 0 0 Local transmission 0 Philippines 5 0 1 0 Local transmission 1 Cambodia 1 0 0 0 Imported cases only 39 European Region Italy 4636 778 197 49 Local transmission 0 Germany 639 105 0 0 Local transmission 0 France 613 193 9 3 Local transmission 0 Spain 374 117 5 2 Local transmission 0 Switzerland 209 123 1 0 Local transmission 0 The United Kingdom 167 49 1 1 Local transmission 0 Sweden 137 76 0 0 Local transmission 0 Netherlands 128 46 1 1 Local transmission 0 Norway 113 27 0 0 Local transmission 0 Belgium 109 59 0 0 Local transmission 0 Austria 66 19 0 0 Imported cases only 0 Iceland 45 19 0 0 Local transmission 0 Greece 32 0 0 0 Local transmission 2 San Marino 24 3 0 0 Local transmission 0 Denmark 23 5 0 0 Local transmission 0 Finland 19 7 0 0 Local transmission 0 Israel 19 4 0 0 Local transmission 0 Ireland 18 4 0 0 Local transmission 0 Portugal 13 4 0 0 Local transmission 0 Czechia 12 0 0 0 Local transmission 1 Croatia 11 1 0 0 Local transmission 0 Estonia 10 7 0 0 Imported cases only 0 Azerbaijan 9 6 0 0 Imported cases only 0 Georgia 9 0 0 0 Imported cases only 1 Slovenia 9 3 0 0 Local transmission 0 Romania 7 1 0 0 Local transmission 0 Russian Federation 7 3 0 0 Imported cases only 0 Belarus 6 0 0 0 Local transmission 2 Poland 5 4 0 0 Imported cases only 0 Hungary 5 3 0 0 Imported cases only 0 North Macedonia 3 2 0 0 Imported cases only 0 Bosnia and Herzegovina 2 0 0 0 Local transmission 2 Luxembourg 2 1 0 0 Imported cases only 0 Andorra 1 0 0 0 Imported cases only 4 Armenia 1 0 0 0 Imported cases only 5 Holy See 1 1 0 0 Under investigation 1 Latvia 1 0 0 0 Imported cases only 4 Liechtenstein 1 0 0 0 Imported cases only 1 Lithuania 1 0 0 0 Imported cases only 8 Monaco 1 0 0 0 Under investigation 6 Serbia 1 0 0 0 Under investigation 1 Slovakia 1 1 0 0 Local transmission 0 Ukraine 1 0 0 0 Imported cases only 3 Territories** Gibraltar 1 0 0 0 Under investigation 3 South -East Asia Region Thailand 48 1 1 0 Local transmission 0 India 31 1 0 0 Local transmission 0 Indonesia 2 0 0 0 Local transmission 5 Bhutan 1 0 0 0 Imported cases only 1 Nepal 1 0 0 0 Imported cases only 43 Sri Lanka 1 0 0 0 Imported cases only 40 Eastern Mediterranean Region Iran (Islamic Republic of) 4747 1234 124 17 Local transmission 0 Kuwait 58 0 0 0 Imported cases only 2 Bahrain 49 0 0 0 Imported cases only 4 United Arab Emirates 45 18 0 0 Local transmission 0 Iraq 44 8 4 2 Imported cases only 0 Lebanon 22 6 0 0 Local transmission 0 Oman 16 0 0 0 Imported cases only 1 Qatar 11 3 0 0 Imported cases only 0 Saudi Arabia 8 0 0 0 Imported cases only 1 Pakistan 5 0 0 0 Imported cases only 4 Egypt 3 0 0 0 Imported cases only 1 Morocco 2 0 0 0 Imported cases only 2 Afghanistan 1 0 0 0 Imported cases only 12 Jordan 1 0 0 0 Imported cases only 4 Tunisia 1 0 0 0 Imported cases only 4 Territories** Occupied Palestinian Territory 16 9 0 0 Local transmission 0 Region of the Americas United States of America 213 65 11 1 Local transmission 0 Canada 51 6 0 0 Local transmission 0 Ecuador 14 1 0 0 Local transmission 0 Brazil 13 6 0 0 Imported cases only 0 Chile 5 4 0 0 Imported cases only 0 Mexico 5 0 0 0 Imported cases only 5 Argentina 2 1 0 0 Imported cases only 0 Colombia 1 1 0 0 Imported cases only 0 Dominican Republic 1 0 0 0 Imported cases only 5 Peru 1 1 0 0 Imported cases only 0 Territories** Saint Martin 2 0 0 0 Under investigation 4 Saint Barthelemy 1 0 0 0 Under investigation 4 African Region Algeria 17 5 0 0 Local transmission 0 Senegal 4 0 0 0 Imported cases only 2 Cameroon 2 1 0 0 Local transmission 0 Nigeria 1 0 0 0 Imported cases only 8 South Africa 1 0 0 0 Imported cases only 1 Togo 1 1 0 0 Imported cases only 0 International conveyance (Diamond Princess) 696 0 6 0 Clusters of cases 1'
  const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
      .replace('Iran (Islamic Republic of) ', 'Iran ')
      .replace(/†/g, '')
      .replace(/\*/g, '')
      .replace(/¶/g, '')
      .replace(/‡/g, '')
      .replace(/§/g, '')
      .replace(/Imported cases only /g, '')
      .replace(/Clusters of cases /g, '')
      .replace(/Territories /g, '')
      .replace(/territories /g, '')
      .replace(/Local transmission /g, '')
      .replace(/Local transmissio n /g, '')
      .replace(/Under investigation /g, '')
      .replace(/Western Pacific Region /g, '')
      .replace(/African Region /g, '')
      .replace(/South-East Asia Region/g, '')
      .replace(/South -East Asia Region/g, '')
      .replace(/Region of the Americas/g, '')
      .replace(/European Region/g, '')
      .replace(/Eastern Mediterranean Region/g, '')
      .replace('Other', '')
      .split(' ')
      .filter(a => !a.includes('(') && a !== '' )
  const result = formatted.reduce((prev, current) => {
          if(isNaN(Number(current))) {
            prev.name += prev.name.length > 0 ?' ' + current: current
            prev.skip = 0;
            return prev
          } else if (prev.area === undefined) {
            const place = places.find(p => p.name === prev.name)
            if (!place) {
              throw new Error(prev.name + ' not found');
            }
            prev.area = {
              placeId: place.id,
              placeName: place.name,
              numOfInfected: Number(current),
              travelHistoryChina: null,
              outsideReporting: null,
              transmissionOutsideOfChina: null,
              underInvestigation: null,
              deaths: null,
            }
            prev.name = ''
            return prev;
          } else if (prev.skip === 0) {
            prev.skip++;
            return prev
          } else if (prev.area.deaths === null) {
            prev.area.deaths = Number(current)
            return prev
          } else if (prev.skip === 1) {
            prev.skip++
            return prev
          } else {
            console.log(prev.area)
            prev.list.push(prev.area)
            prev.area = undefined
            return prev
          }
        }, {
          name: '',
          area: undefined, 
          list: []
        })
  return result.list
}

export const createhinaReport = () => {

const src = 'Hubei 5917 74 47 28 67666 2959 Guangdong 11346 1 0 0 1352 7 Henan 9605 0 0 0 1272 22 Zhejiang 5737 0 0 0 1215 1 Hunan 6899 0 0 0 1018 4 Anhui 6324 0 0 0 990 6 Jiangxi 4648 0 0 0 935 1 Shandong 10047 0 0 0 758 6 Jiangsu 8051 0 0 0 631 0 Chongqing 3102 0 4 0 576 6 Sichuan 8341 0 0 0 539 3 Heilongjiang 3773 0 0 0 481 13 Beijing 2154 4 13 0 426 8 Shanghai 2424 3 16 0 342 3 Hebei 7556 0 0 0 318 6 Fujian 3941 0 0 0 296 1 Guangxi 4926 0 0 0 252 2 Shaanxi 3864 0 0 0 245 1 Yunnan 4830 0 0 0 174 2 Hainan 934 0 0 0 168 6 Guizhou 3600 0 0 0 146 2 Tianjin 1560 0 12 0 136 3 Shanxi 3718 0 0 0 133 0 Liaoning 4359 0 4 0 125 1 Gansu 2637 17 0 0 119 2 Hong Kong SAR 745 3 0 0 107 2 Jilin 2704 0 3 0 93 1 Xinjiang 2487 0 0 0 76 3 Inner Mongolia 2534 0 0 0 75 1 Ningxia 688 0 0 0 75 0 Taipei and environs 2359 0 0 0 45 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
const splittedList = src
  .replace(/Taipei and environs/g, 'Taiwan')
  .replace(/\*/g, '')
  .split(' ')
  .filter(s => s !== '' || s === '')
    
const result = splittedList.reduce((prev, current) => {
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

return result.list

}

const world = createWorldReport();
const china = createhinaReport();
const areas = china.concat(world)
const result = {
  day: "2020-03-07",
  additionalInfo: {
    countries: 89,
  },
  areas
}

fs.writeFile('./src/data/dayOf07032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
