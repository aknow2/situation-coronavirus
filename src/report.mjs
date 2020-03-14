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
  const src = 'Republic of Korea 7979 110 66 0 Local transmission 0 Japan 675 55 19 4 Local transmission 0 Singapore 187 9 0 0 Local transmission 0 Australia 140 18 3 0 Local transmission 0 Malaysia 129 0 0 0 Local transmission 2 Philippines 52 0 2 0 Local transmission 1 Viet Nam 39 0 0 0 Local transmission 1 Brunei Darussalam 12 0 0 0 Imported cases only 1 Cambodia 5 2 0 0 Local transmission 0 New Zealand 5 0 0 0 Local transmission 6 Mongolia 1 0 0 0 Imported cases only 3 Territories** French Polynesia 1 0 0 0 Imported cases only 1 European Region Italy 15113 2651 1016 189 Local transmission 0 Spain 2965 825 84 36 Local transmission 0 France 2860 591 61 13 Local transmission 0 Germany 2369 802 6 3 Local transmission 0 Switzerland 858 213 6 2 Local transmission 0 Denmark 674 59 0 0 Local transmission 0 Sweden 620 159 0 0 Local transmission 0 Netherlands 614 111 5 0 Local transmission 0 The United Kingdom 594 134 8 2 Local transmission 0 Austria 361 59 1 1 Local transmission 0 Belgium 314 0 0 0 Local transmission 1 Norway 489 0 0 0 Local transmission 1 Czechia 116 22 0 0 Local transmission 0 Finland 109 69 0 0 Local transmission 0 Greece 98 0 1 0 Local transmission 1 Israel 75 0 0 0 Local transmission 2 Ireland 70 27 1 0 Local transmission 0 San Marino 63 0 2 0 Local transmission 2 Iceland 61 0 0 0 Local transmission 3 Slovenia 57 0 0 0 Local transmission 1 Poland 49 5 1 1 Local transmission 0 Romania 48 0 0 0 Local transmission 1 Portugal 41 0 0 0 Local transmission 2 Russian Federation 34 14 0 0 Imported cases only 0 Georgia 25 2 0 0 Imported cases only 0 Albania 23 13 0 0 Imported cases only 0 Slovakia 21 11 0 0 Local transmission 0 Serbia 19 0 0 0 Under investigation 1 Luxembourg 17 0 0 0 Imported cases only 1 Croatia 16 0 0 0 Local transmission 2 Hungary 16 3 0 0 Local transmission 0 Latvia 16 0 0 0 Imported cases only 1 Estonia 13 0 0 0 Imported cases only 2 Belarus 12 0 0 0 Local transmission 1 Azerbaijan 11 2 0 0 Imported cases only 0 Malta 9 3 0 0 Imported cases only 0 Bulgaria 7 0 1 0 Local transmission 1 North Macedonia 7 0 0 0 Local transmission 3 Cyprus 6 0 0 0 Imported cases only 1 Bosnia and Herzegovina 4 0 0 0 Local transmission 2 Liechtenstein 4 3 0 0 Imported cases only 0 Republic of Moldova 4 0 0 0 Imported cases only 1 Lithuania 3 0 0 0 Imported cases only 1 Ukraine 3 2 0 0 Imported cases only 0 Andorra 1 0 0 0 Imported cases only 10 Armenia 1 0 0 0 Imported cases only 11 Holy See 1 0 0 0 Under investigation 7 Monaco 1 0 0 0 Under investigation 12 Turkey 1 0 0 0 Imported cases only 1 Territories** Faroe Islands 2 0 0 0 Imported cases only 4 Gibraltar 1 0 0 0 Under investigation 9 Guernsey 1 0 0 0 Imported cases only 3 Jersey 2 2 0 0 Imported cases only 0 South -East Asia Region Thailand 75 5 1 0 Local transmission 0 India 74 1 1 1 Local transmission 0 Indonesia 34 0 1 0 Local transmission 1 Maldives 8 0 0 0 Local transmission 2 Bangladesh 3 0 0 0 Local transmission 4 Sri Lanka 3 1 0 0 Imported cases only 0 Bhutan 1 0 0 0 Imported cases only 7 Nepal 1 0 0 0 Imported cases only 49 Territories** Réunion 3 3 0 0 Imported cases only 0 Eastern Mediterranean Region Iran (Islamic Republic of) 10075 1075 429 75 Local transmission 0 Qatar 262 0 0 0 Imported cases only 1 Bahrain 195 6 0 0 Local transmission 0 United Arab Emirates 85 11 0 0 Local transmission 0 Kuwait 80 0 0 0 Imported cases only 1 Iraq 70 0 7 0 Local transmission 1 Egypt 67 0 1 0 Local transmission 1 Lebanon 66 0 3 0 Local transmission 1 Saudi Arabia 21 0 0 0 Imported cases only 1 Pakistan 20 1 0 0 Local transmission 0 Oman 18 0 0 0 Imported cases only 3 Afghanistan 7 0 0 0 Imported cases only 1 Tunisia 7 1 0 0 Imported cases only 0 Morocco 6 1 1 0 Imported cases only 0 Jordan 1 0 0 0 Imported cases only 10 Territories** occupied Palestinian territory 31 1 0 0 Local transmission 0 Region of the Americas United States of America 1264 277 36 7 Local transmission 0 Canada 138 45 1 0 Local transmission 0 Brazil 77 25 0 0 Local transmission 0 Chile 33 10 0 0 Local transmission 0 Argentina 31 12 1 0 Imported cases only 0 Costa Rica 22 9 0 0 Local transmission 0 Peru 22 5 0 0 Local transmission 0 Ecuador 17 0 0 0 Local transmission 1 Panama 14 4 1 0 Imported cases only 0 Mexico 12 1 0 0 Imported cases only 0 Colombia 9 0 0 0 Imported cases only 1 Dominican Republic 5 0 0 0 Imported cases only 3 Paraguay 5 0 0 0 Imported cases only 2 Bolivia (Plurinational State of) 3 1 0 0 Imported cases only 0 Cuba 3 3 0 0 Imported cases only 0 Honduras 2 0 0 0 Imported cases only 1 Guyana 1 1 1 1 Imported cases only 0 Jamaica 1 0 0 0 Imported cases only 2 Saint Vincent and the Grenadines 1 1 0 0 Imported cases only 0 Territories** French Guiana 6 1 0 0 Imported cases only 0 Martinique 4 1 0 0 Imported cases only 0 Saint Martin 2 0 0 0 Under investigation 10 Saint Barthelemy 1 0 0 0 Under investigation 10 African Region Algeria 25 0 1 0 Local transmission 1 South Africa 17 4 0 0 Imported cases only 0 Senegal 10 6 0 0 Imported cases only 0 Burkina Faso 2 0 0 0 Imported cases only 2 Cameroon 2 0 0 0 Local transmission 6 Nigeria 2 0 0 0 Imported cases only 4 Cote d Ivoire 1 0 0 0 Imported cases only 1 Democratic Republic of the Congo 1 0 0 0 Imported cases only 2 Togo 1 0 0 0 Imported cases only 6 International conveyance (Diamond Princess) 696 0 7 0 Local transmission 5'
  const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
      .replace('Iran (Islamic Republic of) ', 'Iran ')
      .replace(/Bolivia (Plurinational State of) /g, 'Bolivia ')
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

const src = 'Hubei 5917 5 1 6 67786 3062 Guangdong 11346 0 0 0 1356 8 Henan 9605 0 0 0 1273 22 Zhejiang 5737 0 0 0 1215 1 Hunan 6899 0 0 0 1018 4 Anhui 6324 0 0 0 990 6 Jiangxi 4648 0 0 0 935 1 Shandong 10047 0 0 1 760 7 Jiangsu 8051 0 0 0 631 0 Chongqing 3102 0 0 0 576 6 Sichuan 8341 0 0 0 539 3 Heilongjiang 3773 0 0 0 482 13 Beijing 2154 1 9 0 436 8 Shanghai 2424 2 23 0 346 3 Hebei 7556 0 0 0 318 6 Fujian 3941 0 0 0 296 1 Guangxi 4926 0 0 0 252 2 Shaanxi 3864 0 0 0 245 2 Yunnan 4830 0 0 0 174 2 Hainan 934 0 0 0 168 6 Guizhou 3600 0 0 0 146 2 Tianjin 1560 0 0 0 136 3 Shanxi 3718 0 0 0 133 0 Hong Kong SAR 745 2 0 0 131 3 Gansu 2637 0 0 0 127 2 Liaoning 4359 0 0 0 125 1 Jilin 2704 0 0 0 93 1 Xinjiang 2487 0 0 0 76 3 Ningxia 688 0 0 0 75 0 Inner Mongolia 2534 0 0 0 75 1 Taipei and environs 2359 1 0 0 49 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
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
  day: "2020-03-13",
  additionalInfo: {
    countries: 123,
  },
  areas
}

fs.writeFile('./src/data/dayOf13032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
