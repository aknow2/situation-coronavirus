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
  const src = "China 82545 98 3314 4 Local transmission 0 Republic of Korea 9786 125 162 4 Local transmission 0 Australia 4359 393 18 2 Local transmission 0 Malaysia 2626 156 37 3 Local transmission 0 Japan 1953 87 56 2 Local transmission 0 Philippines 1546 128 78 7 Local transmission 0 Singapore 879 35 3 0 Local transmission 0 New Zealand 600 48 1 0 Local transmission 0 Viet Nam 203 15 0 0 Local transmission 0 Brunei Darussalam 127 1 1 0 Local transmission 0 Cambodia 107 4 0 0 Local transmission 0 Mongolia 12 0 0 0 Imported cases only 3 Lao People's Democratic Republic 8 0 0 0 Local transmission 1 Fiji 5 0 0 0 Local transmission 5 Papua New Guinea 1 0 0 0 Imported cases only 10 Territories** Guam 58 2 1 0 Local transmission 0 French Polynesia 36 1 0 0 Local transmission 0 New Caledonia 15 0 0 0 Local transmission 3 Northern Mariana Islands (Commonwealth of the) 2 0 0 0 Under investigation 2 European Region Italy 101739 4050 11591 810 Local transmission 0 Spain 85195 6398 7340 812 Local transmission 0 Germany 61913 4615 583 128 Local transmission 0 France 43977 4335 3017 415 Local transmission 0 The United Kingdom 22145 2619 1408 180 Local transmission 0 Switzerland 15412 1138 295 38 Local transmission 0 Belgium 11899 1063 513 82 Local transmission 0 Netherlands 11750 884 864 93 Local transmission 0 Turkey 10827 1556 168 37 Local transmission 0 Austria 9618 805 108 22 Local transmission 0 Portugal 6408 446 140 21 Local transmission 0 Israel 4831 584 17 2 Local transmission 0 Norway 4226 124 26 4 Local transmission 0 Sweden 4028 328 146 36 Local transmission 0 Czechia 3002 173 24 8 Local transmission 0 Ireland 2910 295 54 8 Local transmission 0 Denmark 2577 182 77 5 Local transmission 0 Poland 2055 193 31 9 Local transmission 0 Luxembourg 1988 38 22 1 Local transmission 0 Romania 1952 192 44 4 Local transmission 0 Russian Federation 1837 303 9 0 Local transmission 0 Finland 1313 95 13 2 Local transmission 0 Greece 1212 56 43 5 Local transmission 0 Iceland 1086 66 2 0 Local transmission 0 Croatia 790 77 6 0 Local transmission 0 Serbia 785 44 13 0 Local transmission 0 Slovenia 763 33 11 0 Local transmission 0 Estonia 715 36 3 0 Local transmission 0 Ukraine 549 69 13 2 Local transmission 0 Lithuania 484 0 7 0 Local transmission 1 Armenia 482 0 3 0 Local transmission 1 Hungary 447 0 15 0 Local transmission 1 Latvia 376 0 0 0 Local transmission 1 Andorra 370 29 8 2 Local transmission 0 Bosnia and Herzegovina 359 34 9 3 Local transmission 0 Bulgaria 359 13 8 0 Local transmission 0 Slovakia 336 0 0 0 Local transmission 1 Kazakhstan 312 18 1 0 Local transmission 0 Republic of Moldova 298 35 2 0 Local transmission 0 North Macedonia 285 26 7 1 Local transmission 0 Azerbaijan 273 83 4 0 Local transmission 0 Cyprus 230 16 7 1 Local transmission 0 San Marino 230 1 25 1 Local transmission 0 Albania 223 0 11 1 Local transmission 1 Malta 156 5 0 0 Local transmission 0 Belarus 152 0 0 0 Local transmission 1 Uzbekistan 149 4 2 0 Local transmission 0 Kyrgyzstan 107 23 0 0 Local transmission 0 Georgia 103 5 0 0 Local transmission 0 Montenegro 91 6 1 0 Local transmission 0 Liechtenstein 64 2 0 0 Under investigation 0 Monaco 49 3 0 0 Local transmission 0 Holy See 6 0 0 0 Under investigation 1 Territories** Faroe Islands 168 9 0 0 Local transmission 0 Kosovo[1 ] 106 12 1 0 Local transmission 0 Gibraltar 69 4 0 0 Local transmission 0 Jersey 63 0 2 0 Local transmission 1 Guernsey 45 6 0 0 Local transmission 0 Isle of Man 42 0 0 0 Local transmission 1 Greenland 10 0 0 0 Under investigation 2 South -East Asia Region Thailand 1524 0 9 0 Local transmission 1 Indonesia 1414 129 122 8 Local transmission 0 India 1071 0 29 0 Local transmission 1 Sri Lanka 120 0 1 0 Local transmission 1 Bangladesh 49 0 5 0 Local transmission 1 Maldives 17 0 0 0 Local transmission 1 Myanmar 10 2 0 0 Local transmission 0 Nepal 5 0 0 0 Imported cases only 2 Bhutan 4 0 0 0 Imported cases only 1 Timor -Leste 1 0 0 0 Under investigation 10 Eastern Mediterranean Region Iran (Islamic Republic of) 41495 3186 2757 117 Local transmission 0 Pakistan 1865 240 25 7 Local transmission 0 Saudi Arabia 1453 154 8 0 Local transmission 0 Qatar 693 59 1 0 Local transmission 0 Egypt 656 47 41 1 Local transmission 0 Iraq 630 83 46 4 Local transmission 0 United Arab Emirates 611 41 5 2 Local transmission 0 Morocco 574 58 33 6 Local transmission 0 Bahrain 515 0 4 0 Local transmission 1 Lebanon 446 8 11 1 Local transmission 0 Tunisia 362 50 9 1 Local transmission 0 Jordan 268 9 5 2 Local transmission 0 Kuwait 266 11 0 0 Local transmission 0 Oman 179 12 0 0 Local transmission 0 Afghanistan 166 52 4 0 Local transmission 0 Djibouti 26 7 0 0 Local transmission 0 Syrian Arab Republic 10 1 2 1 Imported cases only 0 Libya 8 0 0 0 Local transmission 1 Sudan 6 0 2 0 Imported cases only 1 Somalia 3 0 0 0 Imported cases only 4 Territories** occupied Palestinian territory 117 2 1 0 Local transmission 0 Region of the Americas United States of America 140640 17987 2398 286 Local transmission 0 Canada 6317 662 66 5 Local transmission 0 Brazil 4256 352 136 22 Local transmission 0 Chile 2449 540 8 2 Local transmission 0 Ecuador 1962 127 60 12 Local transmission 0 Mexico 993 145 20 4 Local transmission 0 Panama 989 88 24 7 Local transmission 0 Dominican Republic 901 320 42 22 Local transmission 0 Peru 852 181 11 0 Local transmission 0 Argentina 820 75 20 1 Local transmission 0 Colombia 702 94 10 4 Local transmission 0 Costa Rica 314 19 2 0 Local transmission 0 Uruguay 309 6 0 0 Local transmission 0 Cuba 170 51 4 1 Local transmission 0 Honduras 139 29 2 0 Local transmission 0 Venezuela (Bolivarian Republic of) 129 16 3 1 Local transmission 0 Bolivia (Plurinational State of) 97 23 5 5 Local transmission 0 Trinidad and Tobago 82 6 3 0 Local transmission 0 Paraguay 64 5 3 0 Local transmission 0 Guatemala 36 2 1 0 Local transmission 0 Jamaica 36 4 1 0 Local transmission 0 Barbados 33 7 0 0 Local transmission 0 El Salvador 30 6 0 0 Local transmission 0 Haiti 15 0 0 0 Imported cases only 1 Bahamas 14 4 0 0 Local transmission 0 Cayman Islands 12 4 1 0 Imported cases only 0 Grenada 9 2 0 0 Local transmission 0 Saint Lucia 9 5 0 0 Local transmission 0 Guyana 8 3 1 0 Local transmission 0 Suriname 8 0 0 0 Imported cases only 3 Antigua and Barbuda 7 0 0 0 Imported cases only 3 Nicaragua 4 0 1 0 Imported cases only 2 Belize 3 1 0 0 Local transmission 0 Saint Kitts and Nevis 2 0 0 0 Imported cases only 0 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 18 Territories** Puerto Rico 174 110 6 4 Imported cases only 0 Martinique 111 6 2 0 Local transmission 0 Guadeloupe 106 10 4 2 Imported cases only 0 Aruba 50 4 0 0 Local transmission 0 French Guiana 43 12 0 0 Local transmission 0 United States Virgin Islands 30 8 0 0 Imported cases only 0 Bermuda 22 0 0 0 Local transmission 1 Saint Martin 18 12 1 1 Under investigation 0 Curaçao 11 4 1 0 Imported cases only 0 Dominica 11 0 0 0 Local transmission 4 Saint Barthélemy 6 1 0 0 Under investigation 0 Sint Maarten 6 3 0 0 Imported cases only 0 Montserrat 5 0 0 0 Imported cases only 3 Turks and Caicos Islands 5 1 0 0 Local transmission 0 Anguilla 2 0 0 0 Local transmission 4 British Virgin Islands 2 0 0 0 Imported cases only 4 African Region South Africa 1326 46 3 2 Local transmission 0 Algeria 511 57 31 2 Local transmission 0 Burkina Faso 246 24 12 9 Local transmission 0 Cote d’Ivoire 169 4 0 0 Local transmission 0 Senegal 162 20 0 0 Local transmission 0 Ghana 152 0 5 0 Local transmission 1 Cameroon 139 26 6 4 Local transmission 0 Nigeria 111 46 1 0 Local transmission 0 Mauritius 107 5 2 0 Local transmission 0 Democratic Republic of the Congo 98 17 8 0 Local transmission 0 Rwanda 70 0 0 0 Local transmission 1 Madagascar 46 9 0 0 Imported cases only 0 Kenya 38 13 1 0 Local transmission 0 Zambia 35 19 0 0 Local transmission 0 Togo 34 6 1 0 Local transmission 0 Uganda 33 0 0 0 Local transmission 1 Ethiopia 23 2 0 0 Local transmission 0 Niger 20 0 3 0 Local transmission 1 Congo 19 0 0 0 Imported cases only 3 United Republic of Tanzania 19 5 0 0 Under investigation 0 Mali 18 0 0 0 Local transmission 2 Guinea 16 0 0 0 Local transmission 1 Equatorial Guinea 14 1 0 0 Local transmission 0 Namibia 11 0 0 0 Imported cases only 1 Eswatini 9 0 0 0 Imported cases only 3 Mozambique 8 0 0 0 Local transmission 2 Seychelles 8 0 0 0 Imported cases only 1 Gabon 7 0 1 0 Imported cases only 3 Benin 6 0 0 0 Imported cases only 4 Central African Republic 6 0 0 0 Imported cases only 3 Eritrea 6 0 0 0 Imported cases only 4 Cabo Verde 5 0 1 0 Imported cases only 3 Chad 5 0 0 0 Imported cases only 4 Mauritania 5 0 0 0 Imported cases only 2 Zimbabwe 5 0 1 0 Local transmission 3 Gambia 3 0 1 0 Imported cases only 2 Liberia 3 0 0 0 Local transmission 9 Angola 2 0 0 0 Imported cases only 9 Guinea-Bissau 2 0 0 0 Imported cases only 5 Territories** Réunion 207 0 0 0 Local transmission 1 Mayotte 82 0 0 0 Local transmission 1 International conveyance (Diamond Princess) 712 0 7 0 Local transmission 15"
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
  day: "2020-03-31",
  additionalInfo: {
    countries: 198,
  },
  areas
}

fs.writeFile('./src/data/dayOf31032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
