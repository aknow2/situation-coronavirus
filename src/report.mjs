import places from './places.mjs';
import fs from 'fs';

const acc = []
for (const place of places) {
  const id = place.id
  if(acc.includes(id)) {
    throw new Error('duplicate id')
  } else {
    acc.push(id)
  }
}

export const createWorldReport = () => {
  const src = 'Republic of Korea 8086 107 72 6 Local transmission 0 Japan 716 41 21 2 Local transmission 0 Singapore 200 13 0 0 Local transmission 0 Australia 197 57 3 0 Local transmission 0 Malaysia 197 68 0 0 Local transmission 0 Philippines 64 12 2 0 Local transmission 0 Viet Nam 48 9 0 0 Local transmission 0 Brunei Darussalam 25 13 0 0 Local transmission 0 Cambodia 7 2 0 0 Local transmission 0 New Zealand 6 1 0 0 Local transmission 0 Mongolia 1 0 0 0 Imported cases only 4 Territories** French Polynesia 1 0 0 0 Imported cases only 2 European Region Italy 17660 2547 1268 252 Local transmission 0 Spain 4231 1266 120 36 Local transmission 0 France 3640 780 79 18 Local transmission 0 Germany 3062 693 6 0 Local transmission 0 Switzerland 1125 267 6 0 Local transmission 0 Netherlands 804 190 10 5 Local transmission 0 The United Kingdom 802 208 10 2 Local transmission 0 Denmark 801 127 0 0 Local transmission 0 Sweden 775 155 0 0 Local transmission 0 Norway 750 261 1 1 Local transmission 0 Belgium 599 285 0 0 Local transmission 0 Austria 504 143 1 0 Local transmission 0 Czechia 150 34 0 0 Local transmission 0 Slovenia 141 84 0 0 Local transmission 0 Portugal 112 71 0 0 Local transmission 0 Finland 109 0 0 0 Local transmission 1 Israel 100 25 0 0 Local transmission 0 Greece 98 0 1 0 Local transmission 2 Ireland 90 20 1 0 Local transmission 0 Estonia 79 66 0 0 Local transmission 0 San Marino 66 3 2 0 Local transmission 0 Romania 64 16 0 0 Local transmission 0 Poland 64 15 1 0 Local transmission 0 Iceland 61 0 0 0 Local transmission 4 Luxembourg 38 21 1 1 Local transmission 0 Russian Federation 34 0 0 0 Imported cases only 1 Albania 33 10 1 1 Local transmission 0 Serbia 31 12 0 0 Local transmission 0 Slovakia 30 9 0 0 Local transmission 0 Croatia 27 11 0 0 Local transmission 0 Georgia 25 0 0 0 Imported cases only 1 Belarus 21 9 0 0 Local transmission 0 Hungary 19 3 0 0 Local transmission 0 Latvia 16 0 0 0 Imported cases only 2 Cyprus 14 8 0 0 Imported cases only 0 Malta 12 3 0 0 Imported cases only 0 Azerbaijan 11 0 0 0 Imported cases only 1 Bosnia and Herzegovina 11 7 0 0 Local transmission 0 North Macedonia 9 2 0 0 Local transmission 0 Armenia 8 7 0 0 Imported cases only 0 Republic of Moldova 8 4 0 0 Imported cases only 0 Bulgaria 7 0 1 0 Local transmission 2 Lithuania 6 3 0 0 Imported cases only 0 Turkey 5 4 0 0 Imported cases only 0 Liechtenstein 4 0 0 0 Imported cases only 1 Ukraine 3 0 1 1 Local transmission 0 Andorra 2 1 0 0 Imported cases only 0 Monaco 2 1 0 0 Under investigation 0 Holy See 1 0 0 0 Under investigation 8 Territories** Faroe Islands 3 1 0 0 Imported cases only 0 Gibraltar 1 0 0 0 Under investigation 10 Guernsey 1 0 0 0 Imported cases only 4 Jersey 2 0 0 0 Imported cases only 1 South -East Asia Region India 82 8 2 1 Local transmission 0 Thailand 75 0 1 0 Local transmission 1 Indonesia 69 35 3 2 Local transmission 0 Maldives 9 1 0 0 Local transmission 0 Sri Lanka 6 3 0 0 Local transmission 0 Bangladesh 3 0 0 0 Local transmission 5 Bhutan 1 0 0 0 Imported cases only 8 Nepal 1 0 0 0 Imported cases only 50 Eastern Mediterranean Region Iran (Islamic Republic of) 11364 1289 514 85 Local transmission 0 Qatar 262 0 0 0 Local transmission 2 Bahrain 210 15 0 0 Local transmission 0 Kuwait 100 20 0 0 Local transmission 0 Egypt 93 26 2 1 Local transmission 0 Iraq 93 23 9 2 Local transmission 0 United Arab Emirates 85 0 0 0 Local transmission 1 Lebanon 77 11 4 1 Local transmission 0 Saudi Arabia 62 41 0 0 Local transmission 0 Pakistan 21 1 0 0 Imported cases only 0 Oman 19 1 0 0 Imported cases only 0 Tunisia 16 9 0 0 Local transmission 0 Afghanistan 7 0 0 0 Imported cases only 2 Morocco 7 1 1 0 Local transmission 0 Jordan 1 0 0 0 Imported cases only 11 Sudan 1 1 0 0 Imported cases only 0 Territories** occupied Palestinian territory 35 4 0 0 Local transmission 0 Region of the Americas United States of America 1678 414 41 5 Local transmission 0 Canada 176 38 1 0 Local transmission 0 Brazil 98 21 0 0 Local transmission 0 Chile 43 10 0 0 Local transmission 0 Argentina 34 3 2 1 Local transmission 0 Peru 28 6 0 0 Local transmission 0 Panama 27 13 1 0 Local transmission 0 Mexico 26 14 0 0 Imported cases only 0 Costa Rica 23 1 0 0 Local transmission 0 Ecuador 23 6 0 0 Local transmission 0 Colombia 16 7 0 0 Imported cases only 0 Jamaica 7 6 0 0 Imported cases only 0 Guyana 6 5 1 0 Imported cases only 0 Paraguay 6 1 0 0 Local transmission 0 Dominican Republic 5 0 0 0 Imported cases only 4 Cuba 4 1 0 0 Imported cases only 0 Bolivia (Plurinational State of) 3 0 0 0 Imported cases only 1 Puerto Rico 3 3 0 0 Imported cases only 0 Honduras 2 0 0 0 Imported cases only 2 Venezuela (Bolivarian Republic of) 2 2 0 0 Imported cases only 0 Antigua and Barbuda 1 1 0 0 Imported cases only 0 Guadeloupe 1 1 0 0 Imported cases only 0 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 1 Trinidad and Tobago 1 1 0 0 Imported cases only 0 Territories** French Guiana 6 0 0 0 Imported cases only 1 Martinique 6 2 0 0 Imported cases only 0 Saint Martin 2 0 0 0 Under investigation 11 Saint Barthelemy 1 0 0 0 Under investigation 11 Cayman Islands 1 1 0 0 Imported cases only 0 African Region Algeria 26 1 2 1 Local transmission 0 South Africa 17 0 0 0 Local transmission 1 Senegal 10 0 0 0 Local transmission 1 Burkina Faso 2 0 0 0 Imported cases only 3 Cameroon 2 0 0 0 Local transmission 7 Democratic Republic of the Congo 2 1 0 0 Imported cases only 0 Nigeria 2 0 0 0 Imported cases only 5 Cote d’Ivoire 1 0 0 0 Imported cases only 2 Ethiopia 1 1 0 0 Imported cases only 0 Gabon 1 1 0 0 Imported cases only 0 Ghana 1 1 0 0 Imported cases only 0 Guinea 1 1 0 0 Imported cases only 0 Kenya 1 1 0 0 Imported cases only 0 Togo 1 0 0 0 Imported cases only 7 Territories** Réunion 5 2 0 0 Imported cases only 0 International conveyance (Diamond Princess) 697 1 7 0 Local transmission 0'
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

const src = 'Hubei 5917 4 0 13 67790 3075 Guangdong 11346 0 0 0 1356 8 Henan 9605 0 0 0 1273 22 Zhejiang 5737 0 0 0 1227 1 Hunan 6899 0 0 0 1018 4 Anhui 6324 0 0 0 990 6 Jiangxi 4648 0 0 0 935 1 Shandong 10047 0 0 0 760 7 Jiangsu 8051 0 0 0 631 0 Chongqing 3102 0 0 0 576 6 Sichuan 8341 0 0 0 539 3 Heilongjiang 3773 0 0 0 482 13 Beijing 2154 1 5 0 437 8 Shanghai 2424 4 11 0 350 3 Hebei 7556 0 0 0 318 6 Fujian 3941 0 0 0 296 1 Guangxi 4926 0 0 0 252 2 Shaanxi 3864 0 0 0 245 2 Yunnan 4830 0 0 0 174 2 Hainan 934 0 0 0 168 6 Guizhou 3600 0 0 0 146 2 Hong Kong SAR 745 6 0 1 137 4 Tianjin 1560 0 1 0 136 3 Shanxi 3718 0 0 0 133 0 Gansu 2637 2 0 0 129 2 Liaoning 4359 0 0 0 125 1 Jilin 2704 0 0 0 93 1 Xinjiang 2487 0 0 0 76 3 Ningxia 688 0 0 0 75 0 Inner Mongolia 2534 0 0 0 75 1 Taipei and environs 2359 1 0 0 50 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
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
  day: "2020-03-15",
  additionalInfo: {
    countries: 134,
  },
  areas
}

fs.writeFile('./src/data/dayOf14032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
