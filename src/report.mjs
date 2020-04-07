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
  const src = "China 83005 75 3340 2 Local transmission 0 Republic of Korea 10284 47 186 3 Local transmission 0 Australia 5744 109 36 2 Local transmission 0 Malaysia 3662 179 61 4 Local transmission 0 Japan 3654 383 73 3 Local transmission 0 Philippines 3246 152 152 8 Local transmission 0 Singapore 1309 120 6 1 Local transmission 0 New Zealand 911 39 1 0 Local transmission 0 Viet Nam 241 1 0 0 Local transmission 0 Brunei Darussalam 135 0 1 0 Local transmission 1 Cambodia 114 0 0 0 Local transmission 2 Mongolia 14 0 0 0 Imported cases only 4 Fiji 12 0 0 0 Local transmission 1 Lao People's Democratic Republic 11 1 0 0 Local transmission 0 Papua New Guinea 1 0 0 0 Imported cases only 16 Territories** Guam 112 19 4 0 Local transmission 0 French Polynesia 41 1 0 0 Local transmission 0 New Caledonia 18 0 0 0 Local transmission 3 Northern Mariana Islands (Commonwealth of the) 8 0 1 0 Local transmission 3 European Region Spain 130759 6023 12418 674 Local transmission 0 Italy 128948 4316 15889 527 Local transmission 0 Germany 95391 3677 1434 92 Local transmission 0 France 69607 1850 8064 518 Local transmission 0 The United Kingdom 47810 5903 4934 621 Local transmission 0 Turkey 27069 3135 574 73 Local transmission 0 Switzerland 21065 576 715 49 Local transmission 0 Belgium 19691 1260 1447 164 Local transmission 0 Netherlands 17851 1224 1766 115 Local transmission 0 Austria 11983 217 204 18 Local transmission 0 Portugal 11278 754 295 29 Local transmission 0 Israel 8018 429 46 4 Local transmission 0 Sweden 6830 387 401 28 Local transmission 0 Norway 5640 130 58 8 Local transmission 0 Russian Federation 5389 658 45 2 Local transmission 0 Ireland 5111 507 158 21 Local transmission 0 Czechia 4587 115 67 8 Local transmission 0 Denmark 4369 292 179 18 Local transmission 0 Poland 4102 475 94 15 Local transmission 0 Romania 3864 251 148 7 Local transmission 0 Luxembourg 2804 75 36 5 Local transmission 0 Finland 1927 45 28 3 Local transmission 0 Serbia 1908 284 51 12 Local transmission 0 Greece 1735 62 73 5 Local transmission 0 Iceland 1486 69 4 0 Local transmission 0 Ukraine 1319 68 38 6 Local transmission 0 Croatia 1182 56 15 3 Local transmission 0 Estonia 1097 79 15 2 Local transmission 0 Slovenia 997 20 28 6 Local transmission 0 Republic of Moldova 864 112 15 3 Local transmission 0 Lithuania 811 40 13 4 Local transmission 0 Armenia 746 0 7 0 Local transmission 1 Hungary 744 11 38 4 Local transmission 0 Bosnia and Herzegovina 662 30 21 0 Local transmission 0 Kazakhstan 604 73 5 0 Local transmission 0 Azerbaijan 584 72 5 0 Local transmission 0 Belarus 562 122 8 4 Local transmission 0 North Macedonia 555 72 18 1 Local transmission 0 Latvia 533 24 1 0 Local transmission 0 Bulgaria 531 28 20 3 Local transmission 0 Andorra 523 57 17 0 Local transmission 0 Slovakia 485 14 0 0 Local transmission 0 Cyprus 446 20 14 3 Local transmission 0 Uzbekistan 390 92 2 0 Local transmission 0 Albania 377 44 21 3 Local transmission 0 San Marino 266 7 32 0 Local transmission 0 Malta 234 21 0 0 Local transmission 0 Kyrgyzstan 216 69 4 3 Local transmission 0 Montenegro 203 6 2 0 Local transmission 0 Georgia 188 18 2 1 Local transmission 0 Liechtenstein 78 1 1 0 Under investigation 0 Monaco 37 0 0 0 Local transmission 5 Holy See 7 0 0 0 Under investigation 3 Territories** Faroe Islands 181 0 0 0 Local transmission 1 Jersey 155 32 3 0 Local transmission 0 Guernsey 154 18 3 1 Local transmission 0 Kosovo[1] 145 5 1 0 Local transmission 0 Isle of Man 127 1 1 0 Local transmission 0 Gibraltar 103 5 1 0 Local transmission 0 Greenland 11 1 0 0 Under investigation 0 South -East Asia Region India 4067 693 109 32 Local transmission 0 Indonesia 2273 181 198 7 Local transmission 0 Thailand 2169 102 23 3 Local transmission 0 Sri Lanka 176 17 5 0 Local transmission 0 Bangladesh 88 18 8 0 Local transmission 0 Myanmar 21 1 1 0 Local transmission 0 Maldives 19 0 0 0 Local transmission 3 Nepal 9 0 0 0 Local transmission 1 Bhutan 5 0 0 0 Imported cases only 3 Timor-Leste 1 0 0 0 Imported cases only 16 Eastern Mediterranean Region Iran (Islamic Republic of) 58226 2483 3603 151 Local transmission 0 Pakistan 3277 397 50 5 Local transmission 0 Saudi Arabia 2463 93 34 5 Local transmission 0 United Arab Emirates 1799 294 10 0 Local transmission 0 Qatar 1604 279 4 1 Local transmission 0 Egypt 1173 103 78 7 Local transmission 0 Morocco 1113 153 71 5 Local transmission 0 Iraq 961 83 61 5 Local transmission 0 Bahrain 700 12 4 0 Local transmission 0 Tunisia 574 21 22 3 Local transmission 0 Kuwait 556 0 1 0 Local transmission 1 Lebanon 527 0 18 0 Local transmission 1 Jordan 345 22 5 0 Local transmission 0 Afghanistan 337 38 7 0 Local transmission 0 Oman 331 33 2 0 Local transmission 0 Djibouti 59 8 0 0 Local transmission 0 Syrian Arab Republic 19 3 2 0 Local transmission 0 Libya 18 1 1 0 Local transmission 0 Sudan 12 2 2 0 Local transmission 0 Somalia 7 0 0 0 Local transmission 2 Territories** occupied Palestinian territory 246 29 1 0 Local transmission 0 Region of the Americas United States of America 307318 33510 8358 1338 Local transmission 0 Canada 13904 966 231 17 Local transmission 0 Brazil 10278 1222 432 73 Local transmission 0 Chile 4471 310 34 7 Local transmission 0 Ecuador 3465 0 172 0 Local transmission 1 Mexico 1890 202 79 19 Local transmission 0 Panama 1801 128 46 5 Local transmission 0 Peru 1746 151 73 12 Local transmission 0 Dominican Republic 1488 0 68 0 Local transmission 2 Argentina 1451 98 44 2 Local transmission 0 Colombia 1406 139 32 7 Local transmission 0 Costa Rica 435 19 2 0 Local transmission 0 Uruguay 400 14 5 1 Local transmission 0 Cuba 320 32 8 2 Local transmission 0 Honduras 268 4 22 7 Local transmission 0 Bolivia (Plurinational State of) 157 18 10 0 Local transmission 0 Venezuela (Bolivarian Republic of) 144 0 3 0 Local transmission 3 Paraguay 104 8 3 0 Local transmission 0 Trinidad and Tobago 103 3 6 0 Local transmission 0 El Salvador 62 6 3 0 Local transmission 0 Guatemala 61 11 2 1 Local transmission 0 Jamaica 55 2 3 0 Local transmission 0 Barbados 51 0 0 0 Local transmission 1 Bahamas 28 4 4 1 Local transmission 0 Guyana 24 1 4 0 Local transmission 0 Haiti 21 3 0 0 Imported cases only 0 Saint Lucia 14 1 0 0 Local transmission 0 Grenada 12 0 0 0 Local transmission 1 Dominica 11 0 0 0 Local transmission 10 Suriname 10 0 0 0 Local transmission 2 Saint Kitts and Nevis 9 0 0 0 Imported cases only 1 Antigua and Barbuda 7 0 0 0 Local transmission 9 Belize 5 1 0 0 Local transmission 0 Nicaragua 5 0 1 0 Imported cases only 4 Saint Vincent and the Grenadines 3 0 0 0 Imported cases only 2 Territories** Puerto Rico 452 0 18 0 Local transmission 1 Martinique 145 0 3 0 Local transmission 1 Guadeloupe 134 4 7 0 Local transmission 0 French Guiana 66 4 0 0 Local transmission 0 Aruba 64 0 0 0 Local transmission 1 United States Virgin Islands 42 2 0 0 Local transmission 0 Bermuda 37 2 0 0 Local transmission 0 Cayman Islands 35 7 1 0 Local transmission 0 Saint Martin 29 5 2 0 Under investigation 0 Sint Maarten 23 0 2 0 Imported cases only 2 Cura çao 11 0 1 0 Imported cases only 6 Montserrat 6 0 0 0 Imported cases only 1 Saint Barthélemy 6 0 0 0 Under investigation 6 Turks and Caicos Islands 5 0 1 1 Local transmission 6 Anguilla 3 0 0 0 Local transmission 2 British Virgin Islands 3 0 0 0 Imported cases only 5 Bonaire, Sint Eustatius and Saba 2 0 0 0 Imported cases only 2 Falkland Islands (Malvinas) 2 1 0 0 Under investigation 0 African Region South Africa 1655 70 11 2 Local transmission 0 Algeria 1251 0 130 0 Local transmission 1 Cameroon 555 0 9 0 Local transmission 1 Burkina Faso 302 0 15 0 Local transmission 1 Côte d’Ivoire 245 0 2 0 Local transmission 1 Mauritius 227 31 7 0 Local transmission 0 Senegal 222 3 2 0 Local transmission 0 Nigeria 208 0 4 0 Local transmission 1 Ghana 205 0 5 0 Local transmission 1 Democratic Republic of the Congo 161 13 18 2 Local transmission 0 Niger 144 0 8 0 Local transmission 1 Kenya 142 20 4 0 Local transmission 0 Guinea 111 0 0 0 Local transmission 1 Rwanda 102 0 0 0 Local transmission 1 Madagascar 77 7 0 0 Local transmission 0 Uganda 48 0 0 0 Local transmission 1 Congo 45 0 5 0 Local transmission 1 Togo 44 4 3 0 Local transmission 0 Ethiopia 43 5 1 1 Local transmission 0 Mali 39 0 4 0 Local transmission 1 Zambia 39 0 1 0 Local transmission 3 Eritrea 29 9 0 0 Local transmission 0 Benin 22 9 0 0 Local transmission 0 United Republic of Tanzania 22 2 1 0 Local transmission 0 Gabon 21 0 1 0 Imported cases only 2 Guinea-Bissau 18 0 0 0 Imported cases only 1 Equatorial Guinea 16 0 0 0 Local transmission 1 Namibia 16 2 0 0 Local transmission 0 Angola 14 4 2 0 Imported cases only 0 Liberia 13 3 3 2 Local transmission 0 Mozambique 10 0 0 0 Local transmission 4 Seychelles 10 0 0 0 Imported cases only 4 Central African Republic 9 0 0 0 Local transmission 1 Chad 9 2 0 0 Imported cases only 0 Eswatini 9 0 0 0 Imported cases only 9 Zimbabwe 9 0 1 0 Local transmission 2 Mauritania 6 0 1 0 Imported cases only 2 Sierra Leone 6 2 0 0 Imported cases only 0 Cabo Verde 5 0 1 0 Imported cases only 9 Botswana 4 0 1 0 Imported cases only 3 Gambia 4 0 1 0 Imported cases only 3 Malawi 4 1 0 0 Local transmission 0 Burundi 3 0 0 0 Local transmission 2 South Sudan 1 1 0 0 Under investigation 0 Territories** Réunion 344 10 0 0 Local transmission 0 Mayotte 147 0 2 0 Local transmission 1 International conveyance (Diamond Princess) 712 0 11 0 Local transmission 21"
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
  day: "2020-04-06",
  additionalInfo: {
    countries: 205,
  },
  areas
}

fs.writeFile('./src/data/dayOf06042020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
