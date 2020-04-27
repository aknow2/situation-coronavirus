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
  const src = "China 83797 52 3352 0 Clusters of cases 0 Republic of Korea 10613 22 229 4 Clusters of cases 0 Japan 8582 482 136 17 Clusters of cases 0 Australia 6458 42 63 2 Clusters of cases 0 Philippines 5453 230 349 14 Clusters of cases 0 Malaysia 5072 85 83 1 Clusters of cases 0 Singapore 3699 447 10 0 Clusters of cases 0 New Zealand 1084 6 9 0 Clusters of cases 0 Viet Nam 267 1 0 0 Clusters of cases 0 Brunei Darussalam 136 0 1 0 Sporadic cases 5 Cambodia 122 0 0 0 Sporadic cases 4 Mongolia 30 0 0 0 Sporadic cases 1 Lao People's Democratic Republic 19 0 0 0 Sporadic cases 3 Fiji 16 0 0 0 Sporadic cases 5 Papua New Guinea 2 0 0 0 Sporadic cases 7 Territories** Guam 135 0 5 0 Clusters of cases 1 French Polynesia 55 0 0 0 Sporadic cases 2 New Caledonia 18 0 0 0 Sporadic cases 13 Northern Mariana Islands (Commonwealth of the) 13 0 2 0 Pending 1 European Region Spain 177633 5092 18579 523 Pending 0 Italy 165155 2667 21647 578 Pending 0 Germany 130450 2866 3569 315 Pending 0 France 105155 2622 17146 1438 Pending 0 The United Kingdom 98480 4603 12868 761 Pending 0 Turkey 69392 4281 1518 115 Community transmission 0 Belgium 33573 2454 4440 283 Pending 0 Netherlands 28153 734 3134 189 Pending 0 Russian Federation 27938 3448 232 34 Clusters of cases 0 Switzerland 26336 583 973 73 Community transmission 0 Portugal 18091 643 599 32 Pending 0 Austria 14370 136 393 9 Pending 0 Ireland 12547 1068 444 38 Pending 0 Israel 12200 332 126 9 Pending 0 Sweden 11927 482 1203 170 Pending 0 Poland 7582 380 286 23 Pending 0 Romania 7216 337 372 28 Pending 0 Denmark 6681 170 309 10 Pending 0 Norway 6677 111 130 3 Pending 0 Czechia 6303 162 166 5 Pending 0 Serbia 4873 408 99 5 Pending 0 Ukraine 4162 398 115 7 Clusters of cases 0 Belarus 3728 447 36 3 Clusters of cases 0 Luxembourg 3373 66 69 0 Pending 0 Finland 3237 76 72 8 Pending 0 Greece 2192 22 102 1 Pending 0 Republic of Moldova 2049 115 46 5 Pending 0 Croatia 1741 37 34 3 Pending 0 Iceland 1727 7 8 0 Pending 0 Hungary 1652 73 142 8 Pending 0 Estonia 1402 29 35 4 Pending 0 Uzbekistan 1349 135 4 0 Clusters of cases 0 Kazakhstan 1295 20 16 4 Pending 0 Azerbaijan 1253 56 13 0 Clusters of cases 0 Slovenia 1248 28 61 5 Pending 0 Armenia 1135 68 18 2 Clusters of cases 0 Bosnia and Herzegovina 1116 30 41 1 Community transmission 0 Lithuania 1091 21 29 5 Pending 0 North Macedonia 974 66 45 1 Clusters of cases 0 Slovakia 863 28 6 4 Pending 0 Bulgaria 747 34 36 1 Pending 0 Cyprus 715 20 17 0 Pending 0 Andorra 673 14 33 2 Community transmission 0 Latvia 666 9 5 0 Pending 0 Albania 494 19 25 1 Clusters of cases 0 Kyrgyzstan 466 17 5 0 Pending 0 Malta 399 6 3 0 Pending 0 San Marino 393 21 36 0 Community transmission 0 Georgia 336 30 3 0 Clusters of cases 0 Montenegro 288 0 4 0 Clusters of cases 1 Monaco 93 0 0 0 Sporadic cases 2 Liechtenstein 81 0 1 0 Pending 1 Holy See 8 0 0 0 Sporadic cases 7 Territories** Kosovo[1] 397 10 9 1 Community transmission 0 Isle of Man 254 12 2 0 Pending 0 Guernsey 223 4 7 1 Pending 0 Jersey 217 0 6 2 Pending 1 Faroe Islands 184 0 0 0 Pending 8 Gibraltar 129 0 0 0 Pending 3 Greenland 11 0 0 0 Pending 10 South-East Asia Region India 12380 941 414 37 Clusters of cases 0 Indonesia 5136 297 469 10 Community transmission 0 Thailand 2672 29 46 3 Pending 0 Bangladesh 1231 219 50 4 Pending 0 Sri Lanka 238 5 7 0 Clusters of cases 0 Myanmar 85 11 4 0 Clusters of cases 0 Maldives 21 1 0 0 Sporadic cases 0 Nepal 16 0 0 0 Sporadic cases 2 Timor-Leste 6 0 0 0 Sporadic cases 2 Bhutan 5 0 0 0 Sporadic cases 13 Eastern Mediterranean Region Iran (Islamic Republic of) 76389 1512 4777 94 Community transmission 0 Pakistan 6505 517 124 17 Clusters of cases 0 Saudi Arabia 5862 493 79 6 Clusters of cases 0 United Arab Emirates 5365 432 33 5 Pending 0 Qatar 3711 283 7 0 Pending 0 Egypt 2505 155 183 5 Clusters of cases 0 Morocco 2024 136 127 1 Clusters of cases 0 Bahrain 1677 149 7 0 Clusters of cases 0 Iraq 1415 15 79 1 Clusters of cases 0 Kuwait 1405 50 3 0 Clusters of cases 0 Oman 1019 109 4 0 Clusters of cases 0 Afghanistan 794 24 29 4 Clusters of cases 0 Tunisia 780 33 35 1 Community transmission 0 Lebanon 658 17 21 0 Clusters of cases 0 Djibouti 435 72 2 0 Clusters of cases 0 Jordan 401 4 7 0 Clusters of cases 0 Somalia 80 20 5 3 Sporadic cases 0 Libya 48 13 1 0 Clusters of cases 0 Syrian Arab Republic 33 4 2 0 Community transmission 0 Sudan 32 0 5 0 Sporadic cases 1 Yemen 1 0 0 0 Pending 5 Territories** occupied Palestinian territory 293 5 2 0 Clusters of cases 0 Region of the Americas United States of America 604070 25802 25871 2395 Community transmission 0 Canada 27540 1394 954 131 Community transmission 0 Brazil 25262 1832 1532 204 Community transmission 0 Peru 10303 2784 230 37 Community transmission 0 Chile 8273 356 94 2 Community transmission 0 Ecuador 7858 255 388 19 Community transmission 0 Mexico 5399 385 406 74 Community transmission 0 Dominican Republic 3614 328 189 6 Community transmission 0 Panama 3574 102 95 1 Community transmission 0 Colombia 2979 127 127 15 Community transmission 0 Argentina 2477 141 108 7 Community transmission 0 Cuba 814 48 24 3 Clusters of cases 0 Costa Rica 618 6 3 0 Clusters of cases 0 Uruguay 492 9 8 0 Clusters of cases 0 Honduras 419 12 31 5 Clusters of cases 0 Bolivia (Plurinational State of) 397 43 28 0 Clusters of cases 0 Venezuela (Bolivarian Republic of) 193 12 9 0 Clusters of cases 0 Guatemala 180 13 5 0 Clusters of cases 0 Paraguay 161 2 8 1 Community transmission 0 El Salvador 159 10 6 0 Clusters of cases 0 Trinidad and Tobago 114 1 8 0 Sporadic cases 0 Jamaica 105 32 5 1 Clusters of cases 0 Barbados 73 1 5 1 Clusters of cases 0 Bahamas 49 0 8 0 Clusters of cases 1 Guyana 48 1 6 0 Clusters of cases 0 Haiti 41 1 3 0 Clusters of cases 0 Antigua and Barbuda 23 0 2 0 Clusters of cases 2 Belize 18 0 2 0 Sporadic cases 1 Dominica 16 0 0 0 Clusters of cases 5 Saint Lucia 15 0 0 0 Sporadic cases 4 Grenada 14 0 0 0 Clusters of cases 4 Saint Kitts and Nevis 14 2 0 0 Sporadic cases 0 Saint Vincent and the Grenadines 12 0 0 0 Sporadic cases 5 Suriname 10 0 1 0 Sporadic cases 12 Nicaragua 9 0 1 0 Pending 3 Territories** Puerto Rico 974 51 51 6 Clusters of cases 0 Martinique 158 1 8 0 Clusters of cases 0 Guadeloupe 145 0 8 0 Clusters of cases 1 French Guiana 95 7 0 0 Clusters of cases 0 Aruba 93 1 1 1 Clusters of cases 0 Bermuda 57 0 5 0 Clusters of cases 2 Cayman Islands 54 0 1 0 Clusters of cases 1 Sint Maarten 53 1 9 0 Clusters of cases 0 United States Virgin Islands 51 0 1 0 Clusters of cases 5 Saint Martin 35 0 2 0 Sporadic cases 1 Curaçao 14 0 1 0 Sporadic cases 7 Falkland Islands (Malvinas) 11 0 0 0 Clusters of cases 1 Montserrat 11 0 0 0 Sporadic cases 2 Turks and Caicos Islands 10 0 1 0 Sporadic cases 1 Saint Barthélemy 6 0 0 0 Sporadic cases 16 Bonaire, Sint Eustatius and Saba 4 0 0 0 Sporadic cases 1 Anguilla 3 0 0 0 Sporadic cases 12 British Virgin Islands 3 0 0 0 Sporadic cases 15 Saint Pierre and Miquelon 1 0 0 0 Sporadic cases 8 African Region South Africa 2506 91 34 7 Community transmission 0 Algeria 2160 90 336 10 Community transmission 0 Cameroon 855 0 17 2 Clusters of cases 1 Côte d’Ivoire 654 16 6 0 Clusters of cases 0 Ghana 636 0 8 0 Clusters of cases 1 Niger 584 14 14 0 Clusters of cases 0 Burkina Faso 528 13 28 0 Clusters of cases 0 Guinea 404 41 1 1 Clusters of cases 0 Nigeria 373 30 11 1 Clusters of cases 0 Mauritius 324 0 9 0 Clusters of cases 3 Senegal 314 15 2 0 Clusters of cases 0 Democratic Republic of the Congo 267 13 22 1 Clusters of cases 0 Kenya 225 9 10 1 Clusters of cases 0 Mali 144 21 13 3 Sporadic cases 0 Rwanda 136 2 0 0 Sporadic cases 0 Congo 117 43 5 0 Clusters of cases 0 Madagascar 110 0 0 0 Clusters of cases 1 United Republic of Tanzania 88 35 4 1 Sporadic cases 0 Gabon 87 7 1 0 Sporadic cases 0 Ethiopia 85 3 3 0 Sporadic cases 0 Togo 77 0 3 0 Sporadic cases 1 Liberia 59 0 6 0 Sporadic cases 1 Uganda 55 1 0 0 Sporadic cases 0 Equatorial Guinea 51 10 0 0 Sporadic cases 0 Zambia 48 3 2 0 Sporadic cases 0 Guinea -Bissau 43 3 0 0 Sporadic cases 0 Benin 35 0 1 0 Sporadic cases 4 Eritrea 35 1 0 0 Sporadic cases 0 Mozambique 28 0 0 0 Sporadic cases 1 Chad 27 4 0 0 Sporadic cases 0 Zimbabwe 23 5 3 0 Sporadic cases 0 Angola 19 0 2 0 Sporadic cases 7 Eswatini 16 1 0 0 Sporadic cases 0 Malawi 16 0 2 0 Sporadic cases 2 Namibia 16 0 0 0 Sporadic cases 10 Botswana 13 0 1 0 Sporadic cases 6 Sierra Leone 13 2 0 0 Sporadic cases 0 Central African Republic 11 0 0 0 Sporadic cases 5 Seychelles 11 0 0 0 Sporadic cases 9 Cabo Verde 10 0 1 0 Sporadic cases 2 Gambia 9 0 1 0 Sporadic cases 4 Mauritania 7 0 1 0 Sporadic cases 5 Burundi 5 0 0 0 Sporadic cases 3 São Tomé and Príncipe 4 0 0 0 Pending 9 South Sudan 4 0 0 0 Pending 4 Territories** Réunion 390 0 0 0 Clusters of cases 2 Mayotte 221 4 3 0 Clusters of cases 0 International conveyance (Diamond Princess) 712 0 12 0 Not Applicable†† 31"
  const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
      .replace('Iran (Islamic Republic of) ', 'Iran ')
      .replace(/Bolivia (Plurinational State of) /g, 'Bolivia ')
      .replace(/Northern Mariana Islands (Commonwealth of the) /g, 'Northern Mariana Islands ')
      .replace(/†/g, '')
      .replace(/\[1 \]/g, '')
      .replace(/\*/g, '')
      .replace(/¶/g, '')
      .replace(/‡/g, '')
      .replace(/§/g, '')
      .replace(/\[1\]/g, '')
      .replace(/\^/g, '')
      .replace(/Saint Barthelemy/g, 'Saint Barthélemy')
      .replace(/Imported cases only /g, '')
      .replace(/Clusters of cases /g, '')
      .replace(/ Not Applicable /g, '')
      .replace(/Territories /g, '')
      .replace(/territories /g, '')
      .replace(/Pending /g, '')
      .replace(/Cluster of cases /g, '')
      .replace(/Sporadic Cases /g, '')
      .replace(/Sporadic cases /g, '')
      .replace(/Community Transmission /g, '')
      .replace(/Community transmission /g, '')
      .replace(/Local Transmission /g, '')
      .replace(/Local transmission /g, '')
      .replace(/Local transmissio n /g, '')
      .replace(/Under investigation /g, '')
      .replace(/Western Pacific Region /g, '')
      .replace(/African Region /g, '')
      .replace(/South-East Asia Region/g, '')
      .replace(/South -East Asia Region/g, '')
      .replace(/Sout h -East Asia Region/g, '')
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
  day: "2020-04-16",
  additionalInfo: {
    countries: 208,
  },
  areas
}

fs.writeFile('./src/data/dayOf16042020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
