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
  const src = "China 82447 106 3310 4 Local transmission 0 Republic of Korea 9661 78 158 6 Local transmission 0 Australia 3966 0 16 0 Local transmission 1 Malaysia 2470 150 34 7 Local transmission 0 Japan 1866 173 54 2 Local transmission 0 Philippines 1418 343 71 3 Local transmission 0 Singapore 844 42 3 1 Local transmission 0 New Zealand 552 76 1 0 Local transmission 0 Viet Nam 188 9 0 0 Local transmission 0 Brunei Darussalam 126 6 1 0 Local transmission 0 Cambodia 103 1 0 0 Local transmission 0 Mongolia 12 0 0 0 Imported cases only 2 Lao People's Democratic Republic 8 2 0 0 Local transmission 0 Fiji 5 0 0 0 Local transmission 4 Papua New Guinea 1 0 0 0 Imported cases only 9 Territories** Guam 56 0 1 0 Local transmission 1 French Polynesia 35 1 0 0 Local transmission 0 New Caledonia 15 0 0 0 Local transmission 2 Northern Mariana Islands (Commonwealth of the) 2 0 0 0 Under investigation 1 European Region Italy 97689 5217 10781 758 Local transmission 0 Spain 78797 6549 6528 838 Local transmission 0 Germany 57298 4751 455 66 Local transmission 0 France 39642 2497 2602 291 Local transmission 0 The United Kingdom 19526 2433 1228 209 Local transmission 0 Switzerland 14274 1122 257 22 Local transmission 0 Netherlands 10866 1104 771 132 Local transmission 0 Belgium 10836 1702 431 78 Local transmission 0 Turkey 9271 1869 131 23 Local transmission 0 Austria 8813 522 86 18 Local transmission 0 Portugal 5962 792 119 19 Local transmission 0 Israel 4247 382 15 0 Local transmission 0 Norway 4102 257 22 2 Local transmission 0 Sweden 3700 253 110 8 Local transmission 0 Czechia 2829 166 16 5 Local transmission 0 Ireland 2615 200 46 10 Local transmission 0 Denmark 2395 194 72 7 Local transmission 0 Luxembourg 1950 119 21 3 Local transmission 0 Poland 1862 224 22 4 Local transmission 0 Romania 1760 308 40 11 Local transmission 0 Russian Federation 1534 0 10 2 Local transmission 1 Finland 1218 0 11 2 Local transmission 1 Greece 1156 95 38 6 Local transmission 0 Iceland 1020 57 2 0 Local transmission 0 Serbia 741 82 13 3 Local transmission 0 Slovenia 730 39 11 2 Local transmission 0 Croatia 713 56 6 1 Local transmission 0 Estonia 679 39 3 2 Local transmission 0 Lithuania 484 90 7 0 Local transmission 0 Armenia 482 58 3 0 Local transmission 0 Ukraine 480 62 11 2 Local transmission 0 Hungary 447 39 15 2 Local transmission 0 Latvia 376 71 0 0 Local transmission 0 Bulgaria 346 15 8 1 Local transmission 0 Andorra 341 20 6 2 Local transmission 0 Slovakia 336 41 0 0 Local transmission 0 Bosnia and Herzegovina 325 56 6 0 Local transmission 0 Kazakhstan 294 29 1 0 Under investigation 0 Republic of Moldova 263 32 2 0 Local transmission 0 North Macedonia 259 18 6 2 Local transmission 0 San Marino 229 1 24 2 Local transmission 0 Albania 223 11 10 0 Local transmission 0 Cyprus 214 35 6 1 Local transmission 0 Azerbaijan 190 26 4 0 Local transmission 0 Malta 151 12 0 0 Local transmission 0 Uzbekistan 145 12 2 0 Local transmission 0 Georgia 98 8 0 0 Local transmission 0 Belarus 94 0 0 0 Local transmission 2 Montenegro 85 3 1 0 Local transmission 0 Kyrgyzstan 84 0 0 0 Local transmission 1 Liechtenstein 62 1 0 0 Under investigation 0 Monaco 46 27 0 0 Local transmission 0 Holy See 6 2 0 0 Under investigation 0 Territories** Faroe Islands 159 4 0 0 Local transmission 0 Kosovo[1] 94 3 1 0 Local transmission 0 Gibraltar 65 9 0 0 Local transmission 0 Jersey 63 2 2 1 Local transmission 0 Isle of Man 42 10 0 0 Local transmission 0 Guernsey 39 0 0 0 Local transmission 1 Greenland 10 0 0 0 Under investigation 1 South -East Asia Region Thailand 1524 136 9 2 Local transmission 0 Indonesia 1285 130 114 12 Local transmission 0 India 1071 92 29 4 Local transmission 0 Sri Lanka 120 14 1 1 Local transmission 0 Bangladesh 49 1 5 0 Local transmission 0 Maldives 17 1 0 0 Local transmission 0 Myanmar 8 0 0 0 Local transmission 1 Nepal 5 0 0 0 Imported cases only 1 Bhutan 4 1 0 0 Imported cases only 0 Timor -Leste 1 0 0 0 Under investigation 9 Eastern Mediterranean Region Iran (Islamic Republic of) 38309 2901 2640 123 Local transmission 0 Pakistan 1625 99 18 5 Local transmission 0 Saudi Arabia 1299 96 8 4 Local transmission 0 Qatar 634 44 2 1 Local transmission 0 Egypt 609 33 40 4 Local transmission 0 United Arab Emirates 570 102 3 1 Local transmission 0 Iraq 547 41 42 0 Local transmission 0 Morocco 516 79 27 1 Local transmission 0 Bahrain 515 39 4 0 Local transmission 0 Lebanon 438 26 10 2 Local transmission 0 Tunisia 312 34 8 0 Local transmission 0 Jordan 259 13 3 2 Local transmission 0 Kuwait 255 20 0 0 Local transmission 0 Oman 167 0 0 0 Local transmission 1 Afghanistan 114 0 4 0 Local transmission 1 Djibouti 19 4 0 0 Local transmission 0 Syrian Arab Republic 9 4 1 1 Imported cases only 0 Libya 8 5 0 0 Local transmission 0 Sudan 6 1 2 1 Imported cases only 0 Somalia 3 0 0 0 Imported cases only 3 Territories** occupied Palestinian territory 115 11 1 0 Local transmission 0 Region of the Americas United States of America 122653 19332 2112 444 Local transmission 0 Canada 5655 898 61 6 Local transmission 0 Brazil 3904 487 114 22 Local transmission 0 Chile 1909 0 6 0 Local transmission 1 Ecuador 1835 12 48 0 Local transmission 0 Panama 901 115 17 3 Local transmission 0 Mexico 848 131 16 4 Local transmission 0 Argentina 745 55 19 2 Local transmission 0 Peru 671 36 11 0 Local transmission 0 Colombia 608 69 6 0 Local transmission 0 Dominican Republic 581 0 20 0 Local transmission 2 Uruguay 303 29 0 0 Local transmission 0 Costa Rica 295 32 2 0 Local transmission 0 Cuba 119 0 3 0 Local transmission 1 Venezuela (Bolivarian Republic of) 113 0 2 0 Local transmission 1 Honduras 110 43 2 1 Local transmission 0 Trinidad and Tobago 76 2 3 1 Local transmission 0 Bolivia (Plurinational State of) 74 0 0 0 Local transmission 1 Paraguay 59 3 3 0 Local transmission 0 Guatemala 34 2 1 0 Local transmission 0 Jamaica 32 2 1 0 Local transmission 0 Barbados 26 2 0 0 Local transmission 0 El Salvador 24 5 0 0 Local transmission 0 Haiti 15 7 0 0 Imported cases only 0 Dominica 11 0 0 0 Local transmission 3 Bahamas 10 0 0 0 Local transmission 1 Suriname 8 0 0 0 Imported cases only 2 Antigua and Barbuda 7 0 0 0 Imported cases only 2 Grenada 7 0 0 0 Local transmission 3 Guyana 5 0 1 0 Local transmission 11 Nicaragua 4 0 1 0 Imported cases only 1 Saint Kitts and Nevis 4 2 0 0 Imported cases only 0 Saint Lucia 4 1 0 0 Imported cases only 0 Belize 2 0 0 0 Local transmission 4 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 17 Territories** Martinique 105 12 2 1 Imported cases only 0 Guadeloupe 96 0 2 0 Imported cases only 2 Puerto Rico 64 0 2 0 Imported cases only 3 Aruba 46 0 0 0 Local transmission 1 French Guiana 31 0 0 0 Local transmission 2 Bermuda 22 5 0 0 Local transmission 0 United States Virgin Islands 22 5 0 0 Imported cases only 0 Cayman Islands 8 0 1 0 Imported cases only 4 Curaçao 7 0 1 0 Imported cases only 3 Saint Martin 6 0 0 0 Under investigation 0 Montserrat 5 0 0 0 Imported cases only 2 Saint Barthélemy 5 0 0 0 Under investigation 2 Turks and Caicos Islands 4 2 0 0 Local transmission 0 Sint Maarten 3 0 0 0 Imported cases only 2 Anguilla 2 0 0 0 Local transmission 3 British Virgin Islands 2 0 0 0 Imported cases only 3 African Region South Africa 1280 93 1 0 Local transmission 0 Algeria 454 45 29 3 Local transmission 0 Burkina Faso 222 76 3 0 Local transmission 0 Cote d’Ivoire 165 25 0 0 Local transmission 0 Ghana 152 15 5 1 Local transmission 0 Senegal 142 23 0 0 Local transmission 0 Cameroon 113 22 2 0 Local transmission 0 Mauritius 102 0 2 0 Local transmission 1 Democratic Republic of the Congo 81 13 8 2 Local transmission 0 Rwanda 70 10 0 0 Local transmission 0 Nigeria 65 0 1 0 Local transmission 3 Madagascar 37 11 0 0 Imported cases only 0 Uganda 33 19 0 0 Local transmission 0 Togo 28 0 1 1 Local transmission 0 Kenya 25 0 1 0 Local transmission 5 Ethiopia 21 5 0 0 Local transmission 0 Niger 20 10 3 2 Local transmission 0 Congo 19 0 0 0 Imported cases only 2 Mali 18 0 0 0 Local transmission 1 Guinea 16 8 0 0 Imported cases only 0 Zambia 16 0 0 0 Local transmission 1 United Republic of Tanzania 14 0 0 0 Under investigation 1 Equatorial Guinea 13 7 0 0 Local transmission 0 Namibia 11 3 0 0 Imported cases only 0 Eswatini 9 0 0 0 Imported cases only 2 Mozambique 8 0 0 0 Local transmission 1 Seychelles 8 1 0 0 Imported cases only 0 Gabon 7 0 1 0 Imported cases only 2 Benin 6 0 0 0 Imported cases only 3 Central African Republic 6 0 0 0 Imported cases only 2 Eritrea 6 0 0 0 Imported cases only 3 Cabo Verde 5 0 1 0 Imported cases only 2 Chad 5 0 0 0 Imported cases only 3 Mauritania 5 0 0 0 Imported cases only 1 Zimbabwe 5 0 1 0 Local transmission 2 Gambia 3 0 1 0 Imported cases only 1 Liberia 3 0 0 0 Local transmission 8 Angola 2 0 0 0 Imported cases only 8 Guinea-Bissau 2 0 0 0 Imported cases only 4 Territories** Réunion 207 64 0 0 Local transmission 0 Mayotte 82 32 0 0 Local transmission 0 International conveyance (Diamond Princess) 712 0 7 0 Local transmission 14"
  const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
      .replace('Iran (Islamic Republic of) ', 'Iran ')
      .replace(/Bolivia (Plurinational State of) /g, 'Bolivia ')
      .replace(/Northern Mariana Islands (Commonwealth of the) /g, 'Northern Mariana Islands ')
      .replace(/†/g, '')
      .replace(/\*/g, '')
      .replace(/¶/g, '')
      .replace(/‡/g, '')
      .replace(/§/g, '')
      .replace(/\[1\]/g, '')
      .replace(/\^/g, '')
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
  day: "2020-03-30",
  additionalInfo: {
    countries: 198,
  },
  areas
}

fs.writeFile('./src/data/dayOf30032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
