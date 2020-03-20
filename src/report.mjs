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
  const src = 'China 81174 58 3242 11 Local transmission 0 Republic of Korea 8413 93 84 3 Local transmission 0 Japan 873 44 29 1 Local transmission 0 Malaysia 673 120 2 2 Local transmission 0 Australia 510 96 6 1 Local transmission 0 Singapore 313 47 0 0 Local transmission 0 Philippines 187 0 14 2 Local transmission 1 Viet Nam 66 5 0 0 Local transmission 0 Brunei Darussalam 56 2 0 0 Local transmission 0 Cambodia 35 11 0 0 Local transmission 0 New Zealand 20 9 0 0 Local transmission 0 Mongolia 5 1 0 0 Imported cases only 0 Territories** Guam 5 2 0 0 Local transmission 0 French Polynesia 3 0 0 0 Imported cases only 3 European Region Italy 35713 4207 2978 473 Local transmission 0 Spain 13716 2538 598 107 Local transmission 0 France 9043 0 244 0 Local transmission 1 Germany 8198 1042 13 0 Local transmission 0 Switzerland 3010 353 21 2 Local transmission 0 The United Kingdom 2630 672 103 0 Local transmission 0 Netherlands 2051 0 58 0 Local transmission 1 Austria 1646 314 4 1 Local transmission 0 Belgium 1486 0 14 0 Local transmission 1 Norway 1423 115 3 0 Local transmission 0 Sweden 1279 112 3 0 Local transmission 0 Denmark 1044 67 4 0 Local transmission 0 Portugal 642 194 2 1 Local transmission 0 Czechia 522 30 0 0 Local transmission 0 Israel 427 0 0 0 Local transmission 2 Greece 418 0 5 0 Local transmission 1 Finland 359 40 0 0 Local transmission 0 Ireland 292 0 2 0 Local transmission 1 Poland 287 0 5 0 Local transmission 1 Slovenia 286 0 1 0 Local transmission 1 Estonia 258 33 0 0 Local transmission 0 Iceland 250 25 0 0 Local transmission 0 Romania 246 62 0 0 Local transmission 0 Luxembourg 210 63 2 1 Local transmission 0 Turkey 191 51 2 1 Local transmission 0 Russian Federation 147 54 0 0 Imported cases only 0 San Marino 109 5 14 3 Local transmission 0 Slovakia 105 8 0 0 Local transmission 0 Serbia†† 96 11 0 0 Local transmission 0 Bulgaria 92 11 2 0 Local transmission 0 Armenia 84 32 0 0 Local transmission 0 Croatia 81 16 0 0 Local transmission 0 Latvia 71 11 0 0 Imported cases only 0 Albania 59 2 2 1 Local transmission 0 Cyprus 58 25 0 0 Local transmission 0 Hungary 58 8 1 0 Local transmission 0 Malta 48 10 0 0 Imported cases only 0 Belarus 46 10 0 0 Local transmission 0 Georgia 38 4 0 0 Imported cases only 0 Bosnia and Herzegovina 36 7 0 0 Local transmission 0 Kazakhstan 36 3 0 0 Imported cases only 0 North Macedonia 36 5 0 0 Local transmission 0 Republic of Moldova 36 0 0 0 Local transmission 1 Azerbaijan 34 13 1 1 Imported cases only 0 Lithuania 26 1 0 0 Imported cases only 0 Liechtenstein 25 18 0 0 Imported cases only 0 Ukraine 16 7 2 0 Local transmission 0 Uzbekistan 16 0 0 0 Imported cases only 1 Monaco 9 0 0 0 Under investigation 2 Kyrgyzstan 3 3 0 0 Under investigation 0 Montenegro 2 0 0 0 Imported cases only 1 Holy See 1 0 0 0 Under investigation 12 Territories** Faroe Islands 58 11 0 0 Imported cases only 0 Andorra 39 23 0 0 Imported cases only 0 Gibraltar 8 5 0 0 Under investigation 0 Jersey 5 0 0 0 Imported cases only 1 Greenland 2 0 0 0 Under investigation 1 Guernsey 1 0 0 0 Imported cases only 9 South -East Asia Region Indonesia 227 55 19 14 Local transmission 0 Thailand 212 35 1 0 Local transmission 0 India 151 14 3 0 Local transmission 0 Sri Lanka 42 13 0 0 Local transmission 0 Maldives 13 0 0 0 Local transmission 3 Bangladesh 10 2 0 0 Local transmission 0 Bhutan 1 0 0 0 Imported cases only 12 Nepal 1 0 0 0 Imported cases only 55 Eastern Mediterranean Region Iran (Islamic Republic of) 17361 1192 1135 147 Local transmission 0 Qatar 442 0 0 0 Local transmission 1 Bahrain 256 5 1 0 Local transmission 0 Pakistan 241 54 0 0 Imported cases only 0 Saudi Arabia 238 67 0 0 Local transmission 0 Egypt 196 30 6 2 Local transmission 0 Iraq 164 0 12 0 Local transmission 1 Kuwait 142 12 0 0 Local transmission 0 Lebanon 133 13 4 1 Local transmission 0 United Arab Emirates 113 15 0 0 Local transmission 0 Jordan 52 13 0 0 Imported cases only 0 Morocco 49 11 2 0 Local transmission 0 Oman 33 9 0 0 Imported cases only 0 Tunisia 29 5 0 0 Local transmission 0 Afghanistan 22 0 0 0 Imported cases only 1 Djibouti 1 1 0 0 Under investigation 0 Somalia 1 0 0 0 Imported cases only 2 Sudan 1 0 1 0 Imported cases only 4 Territories** occupied Palestinian territory 44 3 0 0 Local transmission 0 Region of the Americas United States of America 7087 3551 100 42 Local transmission 0 Canada 569 145 8 7 Local transmission 0 Brazil 291 57 1 1 Local transmission 0 Chile 238 82 0 0 Local transmission 0 Ecuador 155 97 2 0 Local transmission 0 Peru 145 59 0 0 Local transmission 0 Colombia 93 48 0 0 Local transmission 0 Mexico 93 11 0 0 Imported cases only 0 Panama 86 17 1 0 Local transmission 0 Argentina 79 14 2 0 Local transmission 0 Costa Rica 50 9 0 0 Local transmission 0 Venezuela (Bolivarian Republic of) 36 3 0 0 Imported cases only 0 Uruguay 29 23 0 0 Imported cases only 0 Dominican Republic 21 0 1 0 Local transmission 1 Jamaica 13 1 0 0 Local transmission 0 Bolivia (Plurinational State of) 12 1 0 0 Imported cases only 0 Paraguay 11 2 0 0 Local transmission 0 Cuba 10 5 1 0 Local transmission 0 Honduras 9 1 0 0 Imported cases only 0 Trinidad and Tobago 7 2 0 0 Imported cases only 0 Guatemala 6 0 1 0 Imported cases only 1 Guyana 4 1 1 0 Local transmission 0 Bahamas 3 2 0 0 Local transmission 0 Barbados 2 2 0 0 Imported cases only 0 Saint Lucia 2 0 0 0 Imported cases only 3 Antigua and Barbuda 1 0 0 0 Imported cases only 5 Montserrat 1 1 0 0 Imported cases only 0 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 5 Suriname 1 0 0 0 Imported cases only 3 Territories** Guadeloupe 33 15 0 0 Imported cases only 0 Martinique 23 7 0 0 Imported cases only 0 French Guiana 11 4 0 0 Imported cases only 0 Puerto Rico 5 2 0 0 Imported cases only 0 Aruba 4 2 0 0 Imported cases only 0 Saint Martin 4 2 0 0 Under investigation 0 Cura çao 3 0 0 0 Imported cases only 1 Saint Barthélemy 3 0 0 0 Under investigation 3 United States Virgin Islands 2 0 0 0 Imported cases only 1 Cayman Islands 1 0 1 0 Imported cases only 5 African Region South Africa 116 54 0 0 Local transmission 0 Algeria 72 12 6 2 Local transmission 0 Senegal 36 9 0 0 Local transmission 0 Burkina Faso 26 6 1 1 Imported cases only 0 Rwanda 11 4 0 0 Local transmission 0 Cameroon 10 5 0 0 Local transmission 0 Cote d’Ivoire 9 3 0 0 Imported cases only 0 Ghana 9 1 0 0 Imported cases only 0 Nigeria 8 6 0 0 Imported cases only 0 Democratic Republic of the Congo 7 4 0 0 Local transmission 0 Kenya 7 4 0 0 Local transmission 0 Ethiopia 6 1 0 0 Imported cases only 0 Seychelles 6 2 0 0 Imported cases only 0 Congo 3 2 0 0 Imported cases only 0 Equatorial Guinea 3 2 0 0 Imported cases only 0 Gabon 3 2 0 0 Imported cases only 0 Mauritius 3 3 0 0 Under investigation 0 United Republic of Tanzania 3 2 0 0 Imported cases only 0 Liberia 2 1 0 0 Local transmission 0 Mauritania 2 1 0 0 Imported cases only 0 Namibia 2 0 0 0 Imported cases only 4 Zambia 2 2 0 0 Imported cases only 0 Benin 1 0 0 0 Imported cases only 1 Central African Republic 1 0 0 0 Imported cases only 4 Eswatini 1 0 0 0 Imported cases only 4 Gambia 1 1 0 0 Imported cases only 0 Guinea 1 0 0 0 Imported cases only 4 Togo 1 0 0 0 Imported cases only 11 Territories** Réunion 12 3 0 0 Imported cases only 0 Mayotte 3 2 0 0 Imported cases only 0 International conveyance (Diamond Princess) 712 0 7 0 Local transmission 3'
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
      .replace(/Local Transmission /g, '')
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
// const china = createhinaReport();
const areas = world
const result = {
  day: "2020-03-19",
  additionalInfo: {
    countries: 167,
  },
  areas
}

fs.writeFile('./src/data/dayOf19032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
