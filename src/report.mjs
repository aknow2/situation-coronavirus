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
  const src = "China 84338 14 4642 0 Clusters of cases 0 Japan 13182 353 348 14 Clusters of cases 0 Singapore 12693 618 12 0 Clusters of cases 0 Republic of Korea 10728 10 242 2 Clusters of cases 0 Philippines 7294 102 494 17 Clusters of cases 0 Australia 6703 16 81 2 Clusters of cases 0 Malaysia 5742 51 98 2 Clusters of cases 0 New Zealand 1121 4 18 0 Clusters of cases 0 Viet Nam 270 0 0 0 Clusters of cases 1 Brunei Darussalam 138 0 1 0 Sporadic cases 6 Cambodia 122 0 0 0 Sporadic cases 14 Mongolia 37 1 0 0 Sporadic cases 0 Lao People's Democratic Republic 19 0 0 0 Sporadic cases 13 Fiji 18 0 0 0 Sporadic cases 5 Papua New Guinea 8 0 0 0 Sporadic cases 3 Territories** Guam 137 1 5 0 Clusters of cases 0 French Polynesia 57 0 0 0 Sporadic cases 4 New Caledonia 18 0 0 0 Sporadic cases 23 Northern Mariana Islands (Commonwealth of the) 14 0 2 0 Pending 8 European Region Spain 219764 0 22524 0 Pending 1 Italy 195351 2357 26384 415 Community transmission 0 Germany 154175 1737 5640 140 Community transmission 0 The United Kingdom 148381 4913 20319 813 Community transmission 0 France 122875 1537 22580 368 Community transmission 0 Turkey 107773 2861 2706 106 Community transmission 0 Russian Federation 74588 5966 681 66 Clusters of cases 0 Belgium 45325 1032 6917 238 Community transmission 0 Netherlands 37190 655 4409 120 Community transmission 0 Switzerland 28978 383 1336 28 Community transmission 0 Portugal 23392 595 880 26 Pending 0 Ireland 18561 377 1063 234 Pending 0 Sweden 18177 610 2192 40 Community transmission 0 Israel 15398 370 199 5 Pending 0 Austria 15134 66 536 23 Pending 0 Poland 11273 381 524 30 Pending 0 Romania 10635 218 575 23 Community transmission 0 Belaru s 9590 817 67 4 Clusters of cases 0 Ukraine 8617 492 209 8 Community transmission 0 Denmark 8445 235 418 15 Pending 0 Serbia 7779 296 151 7 Pending 0 Norway 7467 59 193 2 Pending 0 Czechia 7352 79 218 3 Community transmission 0 Finland 4475 80 186 9 Pending 0 Luxembourg 3711 16 85 0 Pending 0 Republic of Moldova 3304 194 94 7 Pending 0 Kazakhstan 2601 185 25 0 Pending 0 Greece 2506 16 130 0 Pending 0 Hungary 2500 57 272 10 Clusters of cases 0 Croatia 2016 7 54 3 Community transmission 0 Uzbekistan 1865 29 8 0 Clusters of cases 0 Iceland 1790 1 10 0 Community transmission 0 Armenia 1746 150 28 1 Clusters of cases 0 Estonia 1635 30 46 0 Pending 0 Azerbaijan 1617 25 21 0 Clusters of cases 0 Bosnia and Herzegovina 1485 57 56 2 Community transmission 0 Lithuania 1438 28 41 1 Pending 0 Slovenia 1388 15 81 1 Community transmission 0 Slovakia 1373 13 17 0 Clusters of cases 0 North Macedonia 1367 41 59 2 Clusters of cases 0 Bulgaria 1247 59 55 1 Pending 0 Cyprus 810 6 17 0 Clusters of cases 0 Latvia 804 20 12 0 Pending 0 Andorra 738 5 40 0 Community transmission 0 Albania 712 34 27 0 Clusters of cases 0 Kyrgyzstan 682 17 8 0 Pending 0 San Marino 513 0 40 0 Community transmission 1 Georgia 485 29 5 0 Community transmission 0 Malta 448 1 4 1 Pending 0 Montenegro 319 0 6 1 Clusters of cases 1 Liechtenstein 83 1 1 0 Pending 0 Monaco 68 0 1 0 Sporadic cases 12 Holy See 9 0 0 0 Sporadic cases 5 Territories** Kosovo[1] 731 28 20 1 Community transmission 0 Isle of Man 308 0 18 1 Pending 1 Jersey 278 2 19 0 Pending 0 Guernsey 245 0 11 1 Community transmission 1 Faroe Islands 187 0 0 0 Pending 2 Gibraltar 136 3 0 0 Clusters of cases 0 Greenland 11 0 0 0 Pending 20 South-East Asia Region India 26496 1990 824 49 Clusters of cases 0 Indonesia 8607 396 720 31 Community transmission 0 Bangladesh 4998 309 140 9 Pending 0 Thailand 2922 15 51 0 Pending 0 Sri Lanka 460 40 7 0 Clusters of cases 0 Myanmar 146 2 5 0 Clusters of cases 0 Maldives 137 21 0 0 Clusters of cases 0 Nepal 49 0 0 0 Sporadic cases 1 Timor-Leste 24 0 0 0 Clusters of cases 2 Bhutan 7 0 0 0 Sporadic cases 3 Eastern Mediterranean Region Iran (Islamic Republic of) 89328 1134 5650 76 Community transmission 0 Saudi Arabia 16299 1197 136 9 Clusters of cases 0 Pakistan 12723 783 269 16 Clusters of cases 0 United Arab Emirates 9813 532 71 7 Pending 0 Qatar 9358 833 10 0 Pending 0 Egypt 4319 227 307 13 Clusters of cases 0 Morocco 3897 139 159 1 Clusters of cases 0 Kuwait 2892 278 19 4 Clusters of cases 0 Bahrain 2589 71 8 0 Clusters of cases 0 Oman 1998 93 10 0 Clusters of cases 0 Iraq 1763 55 86 0 Clusters of cases 0 Afghanistan 1463 133 49 6 Clusters of cases 0 Djibouti 1008 9 2 0 Clusters of cases 0 Tunisia 939 17 38 0 Community transmission 0 Lebanon 704 8 24 2 Clusters of cases 0 Jordan 444 3 7 0 Clusters of cases 0 Somalia 390 62 18 2 Sporadic cases 0 Sudan 213 39 17 1 Sporadic cases 0 Libya 61 0 2 0 Clusters of cases 1 Syrian Arab Republic 42 0 3 0 Community transmission 4 Yemen 1 0 0 0 Pending 15 Territories** occupied Palestinian territory 342 2 2 0 Clusters of cases 0 Region of the Americas United States of America 899281 38509 46204 2151 Community transmission 0 Brazil 52995 3503 3670 357 Community transmission 0 Canada 44353 1614 2350 153 Community transmission 0 Ecuador 22719 0 576 0 Community transmission 1 Peru 21648 734 634 62 Community transmission 0 Mexico 12872 1239 1221 152 Community transmission 0 Chile 12858 552 181 7 Community transmission 0 Dominican Republic 5926 177 273 6 Community transmission 0 Panama 5338 172 154 8 Community transmission 0 Colombia 4881 320 225 10 Community transmission 0 Argentina 3701 222 179 12 Community transmission 0 Cuba 1337 52 51 2 Clusters of cases 0 Bolivia (Plurinational State of) 807 104 44 1 Clusters of cases 0 Costa Rica 687 1 6 0 Clusters of cases 0 Honduras 591 29 55 8 Clusters of cases 0 Uruguay 563 6 12 0 Clusters of cases 0 Guatemala 430 46 13 2 Clusters of cases 0 Venezuela (Bolivarian Republic of) 318 0 10 0 Clusters of cases 1 Jamaica 288 31 7 0 Clusters of cases 0 El Salvador 274 13 8 0 Clusters of cases 0 Paraguay 223 3 9 0 Community transmission 0 Trinidad and Tobago 115 0 8 0 Sporadic cases 3 Barbados 77 1 6 0 Clusters of cases 0 Guyana 73 3 7 0 Clusters of cases 0 Bahamas 72 0 11 0 Clusters of cases 1 Haiti 72 0 6 1 Clusters of cases 1 Antigua and Barbuda 24 0 3 0 Clusters of cases 3 Belize 18 0 2 0 Sporadic cases 11 Dominica 16 0 0 0 Clusters of cases 15 Grenada 15 0 0 0 Clusters of cases 2 Saint Kitts and Nevis 15 0 0 0 Sporadic cases 5 Saint Lucia 15 0 0 0 Sporadic cases 14 Saint Vincent and the Grenadines 14 0 0 0 Sporadic cases 1 Nicaragua 11 0 3 0 Pending 1 Suriname 10 0 1 0 Sporadic cases 22 Territories** Puerto Rico 1276 0 77 26 Clusters of cases 4 Martinique 170 0 14 0 Clusters of cases 2 Guadeloupe 149 0 12 0 Clusters of cases 1 French Guiana 109 0 1 0 Clusters of cases 1 Aruba 100 0 2 0 Clusters of cases 3 Bermuda 99 0 5 0 Clusters of cases 2 Sint Maarten 73 0 12 0 Clusters of cases 2 Cayman Islands 70 4 1 0 Clusters of cases 0 United States Virgin Islands 55 1 3 0 Clusters of cases 0 Saint Marti n 38 0 3 1 Sporadic cases 3 Curaçao 14 0 1 0 Sporadic cases 17 Falkland Islands (Malvinas) 13 1 0 0 Clusters of cases 0 Montserrat 11 0 1 1 Sporadic cases 12 Turks and Caicos Islands 11 0 1 0 Sporadic cases 9 British Virgin Islands 6 1 1 0 Sporadic cases 0 Saint Barthélemy 6 0 0 0 Sporadic cases 26 Bonaire, Sint Eustatius and Saba 5 0 0 0 Sporadic cases 8 Anguilla 3 0 0 0 Sporadic cases 22 Saint Pierre and Miquelon 1 0 0 0 Sporadic cases 18 African Region South Africa 4361 141 86 7 Community transmission 0 Algeria 3256 129 419 4 Community transmission 0 Cameroon 1518 115 53 4 Clusters of cases 0 Ghana 1279 0 10 0 Clusters of cases 1 Nigeria 1182 87 35 3 Community transmission 0 Côte d’Ivoire 1111 34 14 0 Clusters of cases 0 Guinea 996 42 7 1 Community transmission 0 Niger 684 3 27 3 Clusters of cases 0 Burkina Faso 629 13 41 0 Community transmission 0 Senegal 614 69 7 0 Clusters of cases 0 Democratic Republic of the Congo 442 26 28 0 Clusters of cases 0 Mali 370 45 21 0 Clusters of cases 0 Kenya 343 7 14 0 Clusters of cases 0 Mauritius 331 0 9 0 Community transmission 2 United Republic of Tanzania 300 0 10 0 Clusters of cases 1 Equatorial Guinea 258 46 1 0 Clusters of cases 0 Congo 200 0 8 2 Clusters of cases 1 Rwanda 183 7 0 0 Clusters of cases 0 Gabon 176 4 3 0 Clusters of cases 0 Madagascar 124 2 0 0 Clusters of cases 0 Ethiopia 122 5 3 0 Clusters of cases 0 Liberia 120 3 11 3 Clusters of cases 0 Togo 96 6 6 0 Clusters of cases 0 Cabo Verde 90 2 1 0 Sporadic cases 0 Sierra Leone 86 4 3 0 Clusters of cases 0 Zambia 84 0 3 0 Sporadic cases 1 Uganda 75 0 0 0 Sporadic cases 1 Mozambique 70 5 0 0 Sporadic cases 0 Benin 58 0 1 0 Sporadic cases 2 Eswatini 56 16 1 0 Sporadic cases 0 Guinea-Bissau 52 0 0 0 Sporadic cases 2 Chad 46 6 0 0 Sporadic cases 0 Eritrea 39 0 0 0 Sporadic cases 7 Malawi 33 0 3 0 Sporadic cases 2 Zimbabwe 31 2 4 0 Sporadic cases 0 Angola 25 0 2 0 Sporadic cases 2 Botswana 22 0 1 0 Sporadic cases 3 Central African Republic 19 0 0 0 Sporadic cases 1 Namibia 16 0 0 0 Sporadic cases 20 Burundi 12 0 1 0 Sporadic cases 1 Seychelles 11 0 0 0 Sporadic cases 19 Gambia 10 0 1 0 Sporadic cases 5 São Tomé and Príncipe 8 0 0 0 Sporadic cases 2 Mauritania 7 0 1 0 Sporadic cases 15 South Sudan 5 0 0 0 Sporadic cases 1 Territories** Réunion 412 0 0 0 Clusters of cases 2 Mayotte 354 0 4 0 Clusters of cases 1 International conveyance (Diamond Princess) 712 0 13 0 Not Applicable†† 41"
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
      .replace(/Clusters of case s /g, '')
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
  day: "2020-04-26",
  additionalInfo: {
    countries: 208,
  },
  areas
}

fs.writeFile('./src/data/dayOf26042020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
