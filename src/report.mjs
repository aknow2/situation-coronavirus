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
  const src = 'Republic of Korea 8162 76 75 3 Local transmission 0 Japan 780 64 22 1 Local transmission 0 Australia 249 52 3 0 Local transmission 0 Malaysia 238 41 0 0 Local transmission 0 Singapore 212 12 0 0 Local transmission 0 Philippines 111 47 6 4 Local transmission 0 Viet Nam 53 5 0 0 Local transmission 0 Brunei Darussalam 40 15 0 0 Local transmission 0 Cambodia 7 0 0 0 Local transmission 1 New Zealand 6 0 0 0 Local transmission 1 Mongolia 1 0 0 0 Imported cases only 5 Territories** French Polynesia 3 2 0 0 Imported cases only 0 European Region Italy 21157 3497 1441 173 Local transmission 0 Spain 5753 1522 136 16 Local transmission 0 France 4469 829 91 12 Local transmission 0 Germany 3795 733 8 2 Local transmission 0 Switzerland 1359 234 11 5 Local transmission 0 The United Kingdom 1144 342 21 11 Local transmission 0 Netherlands 959 155 12 2 Local transmission 0 Sweden 924 149 0 0 Local transmission 0 Norway 907 157 1 0 Local transmission 0 Denmark 827 26 0 0 Local transmission 0 Austria 800 296 1 0 Local transmission 0 Belgium 689 90 0 0 Local transmission 0 Greece 228 130 2 1 Local transmission 0 Czechia 214 64 0 0 Local transmission 0 Finland 210 101 0 0 Local transmission 0 Israel 178 78 0 0 Local transmission 0 Slovenia 141 0 0 0 Local transmission 1 Iceland 138 77 0 0 Local transmission 0 Ireland 129 39 2 1 Local transmission 0 Romania 123 59 0 0 Local transmission 0 Portugal 112 0 0 0 Local transmission 1 Poland 111 47 3 2 Local transmission 0 San Marino 92 26 5 3 Local transmission 0 Estonia 79 0 0 0 Local transmission 1 Slovakia 44 14 0 0 Local transmission 0 Bulgaria 43 36 2 1 Local transmission 0 Serbia 41 10 0 0 Local transmission 0 Albania 38 5 1 0 Local transmission 0 Luxembourg 38 0 1 0 Local transmission 1 Croatia 37 10 0 0 Local transmission 0 Russian Federation 34 0 0 0 Imported cases only 2 Hungary 32 13 0 0 Local transmission 0 Georgia 30 5 0 0 Imported cases only 0 Latvia 30 14 0 0 Imported cases only 0 Belarus 21 0 0 0 Local transmission 1 Cyprus 21 7 0 0 Imported cases only 0 Azerbaijan 19 8 0 0 Imported cases only 0 Bosnia and Herzegovina 18 7 0 0 Local transmission 0 North Macedonia 13 4 0 0 Local transmission 0 Malta 12 0 0 0 Imported cases only 2 Republic of Moldova 12 4 0 0 Imported cases only 0 Lithuania 9 3 0 0 Imported cases only 0 Armenia 8 0 0 0 Local transmission 1 Kazakhstan 6 6 0 0 Imported cases only 0 Turkey 5 0 0 0 Imported cases only 1 Liechtenstein 4 0 0 0 Imported cases only 2 Ukraine 3 0 1 0 Local transmission 1 Andorra 2 0 0 0 Imported cases only 1 Monaco 2 0 0 0 Under investigation 1 Holy See 1 0 0 0 Under investigation 9 Territories** Faroe Islands 9 6 0 0 Imported cases only 0 Gibraltar 1 0 0 0 Under investigation 11 Guernsey 1 0 0 0 Imported cases only 5 Jersey 2 0 0 0 Imported cases only 2 South -East Asia Region Indonesia 117 48 4 1 Local transmission 0 India 107 25 2 0 Local transmission 0 Thailand 75 0 1 0 Local transmission 2 Sri Lanka 11 5 0 0 Local transmission 0 Maldives 10 1 0 0 Local transmission 0 Bangladesh 3 0 0 0 Local transmission 6 Bhutan 1 0 0 0 Imported cases only 9 Nepal 1 0 0 0 Imported cases only 51 Eastern Mediterranean Region Iran (Islamic Republic of) 12729 1365 608 94 Local transmission 0 Qatar 337 75 0 0 Local transmission 0 Bahrain 211 1 0 0 Local transmission 0 Kuwait 112 12 0 0 Local transmission 0 Saudi Arabia 103 41 0 0 Local transmission 0 Egypt 93 0 2 0 Local transmission 1 Iraq 93 0 9 0 Local transmission 1 Lebanon 93 16 3 0 Local transmission 0 United Arab Emirates 85 0 0 0 Local transmission 2 Pakistan 28 7 0 0 Imported cases only 0 Oman 20 1 0 0 Imported cases only 0 Morocco 18 11 1 0 Local transmission 0 Tunisia 16 0 0 0 Local transmission 1 Afghanistan 10 3 0 0 Imported cases only 0 Jordan 1 0 0 0 Imported cases only 12 Sudan 1 0 0 0 Imported cases only 1 Territories** occupied Palestinian territory 38 3 0 0 Local transmission 1 Region of the Americas United States of America 1678 0 41 0 Local transmission 1 Canada 244 68 1 0 Local transmission 0 Brazil 121 23 0 0 Local transmission 0 Chile 61 18 0 0 Local transmission 0 Argentina 45 11 2 0 Local transmission 0 Peru 43 15 0 0 Local transmission 0 Mexico 41 15 0 0 Imported cases only 0 Panama 27 0 1 0 Local transmission 1 Colombia 24 8 0 0 Local transmission 0 Costa Rica 23 0 0 0 Local transmission 1 Ecuador 23 0 0 0 Local transmission 1 Jamaica 8 1 0 0 Local transmission 0 Guyana 1 0 1 0 Imported cases only 2 Paraguay 6 0 0 0 Local transmission 1 Dominican Republic 5 0 0 0 Imported cases only 5 Cuba 4 0 0 0 Imported cases only 1 Bolivia (Plurinational State of) 3 0 0 0 Imported cases only 2 Puerto Rico 3 0 0 0 Imported cases only 1 Honduras 2 0 0 0 Imported cases only 3 Venezuela (Bolivarian Republic of) 2 0 0 0 Imported cases only 1 Antigua and Barbuda 1 0 0 0 Imported cases only 1 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 2 Trinidad and Tobago 1 0 0 0 Imported cases only 1 Territories** French Guiana 7 1 0 0 Imported cases only 2 Martinique 10 4 0 0 Imported cases only 0 Saint Martin 2 0 0 0 Under investigation 12 Saint Barthelemy 1 0 0 0 Under investigation 12 Cayman Islands 1 0 0 0 Imported cases only 1 Guadeloupe 3 2 0 0 Imported cases only 0 Curaçao 2 2 0 0 Imported cases only 0 African Region South Africa 38 21 0 0 Local transmission 0 Algeria 37 11 3 1 Local transmission 0 Senegal 21 11 0 0 Local transmission 0 Burkina Faso 3 1 0 0 Imported cases only 0 Cameroon 3 1 0 0 Local transmission 0 Cote d’Ivoire 3 2 0 0 Imported cases only 0 Democratic Republic of the Congo 2 0 0 0 Imported cases only 1 Ghana 2 1 0 0 Imported cases only 0 Namibia 2 2 0 0 Imported cases only 0 Nigeria 2 0 0 0 Imported cases only 6 Central African Republic 1 1 0 0 Imported cases only 0 Congo 1 1 0 0 Imported cases only 0 Equatorial Guinea 1 1 0 0 Imported cases only 0 Eswatini 1 1 0 0 Imported cases only 0 Ethiopia 1 0 0 0 Imported cases only 1 Gabon 1 0 0 0 Imported cases only 1 Guinea 1 0 0 0 Imported cases only 1 Kenya 1 0 0 0 Imported cases only 1 Mauritania 1 1 0 0 Imported cases only 0 Togo 1 0 0 0 Imported cases only 8 Territories** Réunion 6 1 0 0 Imported cases only 0 Mayotte 1 1 0 0 Imported cases only 0 International conveyance (Diamond Princess) 697 0 7 0 Local transmission 1'
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

const src = 'Hubei 5917 4 1 10 67794 3085 Guangdong 11346 1 1 0 1357 8 Henan 9605 0 0 0 1273 22 Zhejiang 5737 4 2 0 1231 1 Hunan 6899 0 0 0 1018 4 Anhui 6324 0 0 0 990 6 Jiangxi 4648 0 0 0 935 1 Shandong 10047 0 0 0 760 7 Jiangsu 8051 0 1 0 631 0 Chongqing 3102 0 0 0 576 6 Sichuan 8341 0 0 0 539 3 Heilongjiang 3773 0 0 0 482 13 Beijing 2154 5 9 0 442 8 Shanghai 2424 3 24 0 353 3 Hebei 7556 0 0 0 318 6 Fujian 3941 0 0 0 296 1 Guangxi 4926 0 0 0 252 2 Shaanxi 3864 0 0 0 245 2 Yunnan 4830 0 0 0 174 2 Hainan 934 0 0 0 168 6 Guizhou 3600 0 0 0 146 2 Hong Kong SAR 745 4 0 0 141 4 Tianjin 1560 0 1 0 136 3 Shanxi 3718 0 0 0 133 0 Gansu 2637 3 0 0 132 2 Liaoning 4359 0 0 0 125 1 Jilin 2704 0 0 0 93 1 Xinjiang 2487 0 0 0 76 3 Ningxia 688 0 0 0 75 0 Inner Mongolia 2534 0 0 0 75 1 Taipei and environs 2359 3 0 0 53 1 Qinghai 603 0 0 0 18 0 Macao SAR 66 0 0 0 10 0 Xizang 344 0 0 0 1 0'
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
    countries: 144,
  },
  areas
}

fs.writeFile('./src/data/dayOf15032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
