import places from './places.mjs';
import fs from 'fs';

const acc = []
for (const place of places) {
  const id = place.id
  if(acc.includes(id)) {
    throw new Error(id)
  } else {
    acc.push(id)
  }
}

export const createWorldReport = () => {
  const src = 'Republic of Korea 7382 248 51 1 Local transmission 0 Japan 488 33 7 1 Local transmission 0 Singapore 150 12 0 0 Local transmission 0 Malaysia 93 0 0 0 Local transmission 1 Australia 77 3 3 0 Local transmission 0 Viet Nam 30 9 0 0 Local transmission 0 Philippines 10 4 1 0 Local transmission 0 New Zealand 5 0 0 0 Local transmission 2 Cambodia 2 0 0 0 Local transmission 1 European Region Italy 7375 1492 366 132 Local transmission 0 France 1116 410 19 9 Local transmission 0 Germany 1112 317 0 0 Local transmission 0 Spain 589 159 10 5 Local transmission 0 Switzerland 332 68 2 0 Local transmission 0 The United Kingdom 277 67 2 0 Local transmission 0 Netherlands 265 77 3 2 Local transmission 0 Sweden 203 42 0 0 Local transmission 0 Belgium 200 31 0 0 Local transmission 0 Norway 169 22 0 0 Local transmission 0 Austria 112 10 0 0 Local transmission 0 Greece 73 7 0 0 Local transmission 0 Iceland 55 10 0 0 Local transmission 0 Israel 39 14 0 0 Local transmission 0 San Marino 37 10 1 0 Local transmission 0 Denmark 36 5 0 0 Local transmission 0 Czechia 32 6 0 0 Local transmission 0 Finland 30 11 0 0 Local transmission 0 Portugal 30 9 0 0 Local transmission 0 Ireland 21 2 0 0 Local transmission 0 Slovenia 16 4 0 0 Local transmission 0 Romania 15 2 0 0 Local transmission 0 Georgia 13 1 0 0 Imported cases only 0 Croatia 11 0 0 0 Local transmission 2 Poland 11 5 0 0 Imported cases only 0 Estonia 10 0 0 0 Imported cases only 2 Azerbaijan 9 0 0 0 Imported cases only 2 Hungary 9 2 0 0 Local transmission 0 Russian Federation 7 0 0 0 Imported cases only 2 Belarus 6 0 0 0 Local transmission 4 Slovakia 5 2 0 0 Local transmission 0 Bulgaria 4 2 0 0 Local transmission 0 Latvia 3 2 0 0 Imported cases only 0 Malta 3 0 0 0 Imported cases only 1 North Macedonia 3 0 0 0 Imported cases only 2 Albania 2 2 0 0 Imported cases only 0 Bosnia and Herzegovina 2 0 0 0 Local transmission 4 Luxembourg 2 0 0 0 Imported cases only 2 Andorra 1 0 0 0 Imported cases only 6 Armenia 1 0 0 0 Imported cases only 7 Holy See 1 0 0 0 Under investigation 3 Liechtenstein 1 0 0 0 Imported cases only 3 Lithuania 1 0 0 0 Imported cases only 10 Monaco 1 0 0 0 Under investigation 8 Republic of Moldova 1 0 0 0 Imported cases only 1 Serbia 1 0 0 0 Under investigation 3 Ukraine 1 0 0 0 Imported cases only 5 Territories** Faroe Islands 2 1 0 0 Imported cases only 0 Gibraltar 1 0 0 0 Under investigation 5 South -East Asia Region Thailand 50 0 1 0 Local transmission 1 India 43 9 0 0 Local transmission 0 Indonesia 6 2 0 0 Local transmission 0 Maldives 4 2 0 0 Local transmission 0 Bangladesh 3 3 0 0 Local transmission 0 Bhutan 1 0 0 0 Imported cases only 3 Nepal 1 0 0 0 Imported cases only 45 Sri Lanka 1 0 0 0 Imported cases only 42 Eastern Mediterranean Region Iran (Islamic Republic of) 6566 743 194 49 Local transmission 0 Bahrain 79 23 0 0 Local transmission 0 Kuwait 64 2 0 0 Imported cases only 0 Iraq 60 6 6 2 Local transmission 0 Egypt 55 7 1 1 Local transmission 0 United Arab Emirates 45 0 0 0 Local transmission 2 Lebanon 32 4 0 0 Local transmission 0 Oman 16 0 0 0 Imported cases only 3 Qatar 15 3 0 0 Imported cases only 0 Saudi Arabia 15 8 0 0 Imported cases only 0 Pakistan 6 1 0 0 Imported cases only 0 Afghanistan 4 0 0 0 Imported cases only 1 Morocco 2 0 0 0 Imported cases only 4 Tunisia 2 1 0 0 Imported cases only 0 Jordan 1 0 0 0 Imported cases only 6 Territories** occupied Palestinian territory 19 3 0 0 Local transmission 0 Region of the Americas United States of America 213 0 11 0 Local transmission 2 Canada 62 5 0 0 Local transmission 0 Brazil 25 6 0 0 Local transmission 0 Ecuador 15 1 0 0 Local transmission 0 Argentina 12 3 1 0 Imported cases only 0 Chile 10 5 0 0 Local transmission 0 Costa Rica 9 4 0 0 Local transmission 0 Mexico 7 0 0 0 Imported cases only 1 Peru 6 0 0 0 Local transmission 2 Colombia 1 0 0 0 Imported cases only 2 Dominican Republic 1 0 0 0 Imported cases only 7 Paraguay 1 1 0 0 Imported cases only 0 Territories** French Guiana 5 0 0 0 Imported cases only 1 Martinique 2 0 0 0 Imported cases only 1 Saint Martin 2 0 0 0 Under investigation 6 Saint Barthelemy 1 0 0 0 Under investigation 6 African Region Algeria 20 3 0 0 Local transmission 0 Senegal 4 0 0 0 Imported cases only 4 South Africa 3 1 0 0 Imported cases only 0 Cameroon 2 0 0 0 Local transmission 2 Nigeria 2 1 0 0 Imported cases only 0 Togo 1 0 0 0 Imported cases only 2 International conveyance (Diamond Princess) 696 0 7 0 Local transmission 1'
  const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
      .replace('Iran (Islamic Republic of) ', 'Iran ')
      .replace(/†/g, '')
      .replace(/\*/g, '')
      .replace(/¶/g, '')
      .replace(/‡/g, '')
      .replace(/§/g, '')
      .replace(/Saint Barthelemy/g, 'Saint Barthélemy')
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
          console.log(current)
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

const src = 'Hubei 5917 36 28 21 67743 3007 Guangdong 11346 0 0 1 1352 8 Henan 9605 0 0 0 1272 22 Zhejiang 5737 0 0 0 1215 1 Hunan 6899 0 0 0 1018 4 Anhui 6324 0 0 0 990 6 Jiangxi 4648 0 0 0 935 1 Shandong 10047 0 0 0 758 6 Jiangsu 8051 0 0 0 631 0 Chongqing 3102 0 0 0 576 6 Sichuan 8341 0 0 0 539 3 Heilongjiang 3773 0 1 0 481 13 Beijing 2154 0 8 0 428 8 Shanghai 2424 0 10 0 342 3 Hebei 7556 0 0 0 318 6 Fujian 3941 0 0 0 296 1 Guangxi 4926 0 0 0 252 2 Shaanxi 3864 0 0 0 245 1 Yunnan 4830 0 0 0 174 2 Hainan 934 0 0 0 168 6 Guizhou 3600 0 0 0 146 2 Tianjin 1560 0 10 0 136 3 Shanxi 3718 0 0 0 133 0 Liaoning 4359 0 2 0 125 1 Gansu 2637 4 0 0 124 2 Hong Kong SAR 745 5 0 1 114 3 Jilin 2704 0 1 0 93 1 Xinjiang 2487 0 0 0 76 3 Inner Mongolia 2534 0 0 0 75 1 Ningxia 688 0 0 0 75 0 Taipei and environs 2359 0 0 0 45 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
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
  day: "2020-03-09",
  additionalInfo: {
    countries: 105,
  },
  areas
}

fs.writeFile('./src/data/dayOf09032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
