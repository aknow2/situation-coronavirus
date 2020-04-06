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
  const src = "China 82930 55 3338 3 Local transmission 0 Republic of Korea 10237 81 183 6 Local transmission 0 Australia 5635 181 34 6 Local transmission 0 Malaysia 3483 150 57 4 Local transmission 0 Japan 3271 351 70 1 Local transmission 0 Philippines 3094 76 144 8 Local transmission 0 Singapore 1189 75 5 0 Local transmission 0 New Zealand 872 48 1 0 Local transmission 0 Viet Nam 240 1 0 0 Local transmission 0 Brunei Darussalam 135 1 1 0 Local transmission 0 Cambodia 114 0 0 0 Local transmission 1 Mongolia 14 0 0 0 Imported cases only 3 Fiji 12 5 0 0 Local transmission 0 Lao People's Democratic Republic 10 0 0 0 Local transmission 3 Papua New Guinea 1 0 0 0 Imported cases only 15 Territories** Guam 93 9 4 1 Local transmission 0 French Polynesia 40 1 0 0 Local transmission 0 New Caledonia 18 0 0 0 Local transmission 2 Northern Mariana Islands (Commonwealth of the) 8 0 1 0 Local transmission 2 European Region Spain 124736 7026 11744 809 Local transmission 0 Italy 124632 4805 15362 681 Local transmission 0 Germany 91714 5936 1342 184 Local transmission 0 France 67757 4221 7546 1053 Local transmission 0 The United Kingdom 41907 3735 4313 708 Local transmission 0 Turkey 23934 3013 501 76 Local transmission 0 Switzerland 20489 783 666 59 Local transmission 0 Belgium 18431 1661 1283 140 Local transmission 0 Netherlands 16627 904 1651 164 Local transmission 0 Austria 11766 241 186 18 Local transmission 0 Portugal 10524 638 266 20 Local transmission 0 Israel 7589 559 42 6 Local transmission 0 Sweden 6443 365 373 40 Local transmission 0 Norway 5510 302 50 6 Local transmission 0 Russian Federation 4731 582 43 9 Local transmission 0 Ireland 4604 331 137 17 Local transmission 0 Czechia 4472 282 59 6 Local transmission 0 Denmark 4077 320 161 22 Local transmission 0 Poland 3627 244 79 8 Local transmission 0 Romania 3613 430 141 8 Local transmission 0 Luxembourg 2729 117 31 0 Local transmission 0 Finland 1882 267 25 5 Local transmission 0 Greece 1673 60 68 9 Local transmission 0 Serbia 1624 148 39 0 Local transmission 0 Iceland 1417 53 4 0 Local transmission 0 Ukraine 1251 155 32 4 Local transmission 0 Croatia 1126 47 12 4 Local transmission 0 Estonia 1018 57 13 1 Local transmission 0 Slovenia 977 43 22 2 Local transmission 0 Lithuania 771 0 9 0 Local transmission 1 Republic of Moldova 752 161 12 3 Local transmission 0 Armenia 746 10 7 0 Local transmission 0 Hungary 733 55 34 2 Local transmission 0 Bosnia and Herzegovina 632 46 21 3 Local transmission 0 Kazakhstan 531 71 5 2 Local transmission 0 Azerbaijan 512 69 5 0 Local transmission 0 Latvia 509 16 1 0 Local transmission 0 Bulgaria 503 18 17 3 Local transmission 0 North Macedonia 483 53 17 5 Local transmission 0 Slovakia 471 21 0 0 Local transmission 0 Andorra 466 24 17 1 Local transmission 0 Belarus 440 186 4 0 Local transmission 0 Cyprus 426 30 11 0 Local transmission 0 Albania 333 0 18 1 Local transmission 1 Uzbekistan 298 57 2 0 Local transmission 0 San Marino 259 7 32 0 Local transmission 0 Malta 213 11 0 0 Local transmission 0 Montenegro 197 37 2 0 Local transmission 0 Georgia 170 13 1 1 Local transmission 0 Kyrgyzstan 147 3 1 0 Local transmission 0 Liechtenstein 77 1 1 1 Under investigation 0 Monaco 37 0 0 0 Local transmission 4 Holy See 7 0 0 0 Under investigation 2 Territories** Faroe Islands 181 2 0 0 Local transmission 0 Kosovo[1] 140 8 1 0 Local transmission 0 Guernsey 136 22 2 0 Local transmission 0 Isle of Man 126 12 1 0 Local transmission 0 Jersey 123 5 3 1 Local transmission 0 Gibraltar 98 3 1 0 Local transmission 0 Greenland 10 0 0 0 Under investigation 7 South -East Asia Region India 3374 1073 77 21 Local transmission 0 Indonesia 2092 106 191 10 Local transmission 0 Thailand 2067 89 20 1 Local transmission 0 Sri Lanka 159 8 5 1 Local transmission 0 Bangladesh 70 9 8 2 Local transmission 0 Myanmar 20 0 1 0 Local transmission 1 Maldives 19 0 0 0 Local transmission 2 Nepal 9 3 0 0 Local transmission 0 Bhutan 5 0 0 0 Imported cases only 2 Timor-Leste 1 0 0 0 Imported cases only 15 Eastern Mediterranean Region Iran (Islamic Republic of) 55743 2560 3452 158 Local transmission 0 Pakistan 2880 430 45 10 Local transmission 0 Saudi Arabia 2370 331 29 4 Local transmission 0 United Arab Emirates 1505 241 10 1 Local transmission 0 Qatar 1325 250 3 0 Local transmission 0 Egypt 1070 85 71 5 Local transmission 0 Morocco 960 116 66 16 Local transmission 0 Iraq 878 58 56 2 Local transmission 0 Bahrain 688 15 4 0 Local transmission 0 Kuwait 556 77 1 0 Local transmission 0 Tunisia 553 58 19 1 Local transmission 0 Lebanon 527 19 18 1 Local transmission 0 Jordan 323 13 5 0 Local transmission 0 Afghanistan 299 29 7 2 Local transmission 0 Oman 298 21 2 1 Local transmission 0 Djibouti 51 1 0 0 Local transmission 0 Libya 17 0 1 0 Local transmission 1 Syrian Arab Republic 16 0 2 0 Local transmission 2 Sudan 10 0 2 0 Local transmission 1 Somalia 7 0 0 0 Local transmission 1 Territories** occupied Palestinian territory 217 24 1 0 Local transmission 0 Region of the Americas United States of America 273808 32105 7020 1166 Local transmission 0 Canada 12938 1206 214 62 Local transmission 0 Brazil 9056 1146 359 60 Local transmission 0 Chile 4161 424 27 5 Local transmission 0 Ecuador 3465 302 172 52 Local transmission 0 Mexico 1688 178 60 10 Local transmission 0 Panama 1673 198 41 4 Local transmission 0 Peru 1595 181 61 10 Local transmission 0 Dominican Republic 1488 0 68 0 Local transmission 1 Argentina 1353 88 42 5 Local transmission 0 Colombia 1267 106 25 6 Local transmission 0 Costa Rica 416 20 2 0 Local transmission 0 Uruguay 386 17 4 0 Local transmission 0 Cuba 288 19 6 0 Local transmission 0 Honduras 264 42 15 0 Local transmission 0 Venezuela (Bolivarian Republic of) 144 0 3 0 Local transmission 2 Bolivia (Plurinational State of) 139 7 10 1 Local transmission 0 Trinidad and Tobago 100 3 6 0 Local transmission 0 Paraguay 96 4 3 0 Local transmission 0 El Salvador 56 10 3 1 Local transmission 0 Jamaica 53 6 3 0 Local transmission 0 Barbados 51 6 0 0 Local transmission 0 Guatemala 50 0 1 0 Local transmission 1 Bahamas 24 0 3 0 Local transmission 1 Guyana 23 4 4 0 Local transmission 0 Haiti 18 0 0 0 Imported cases only 1 Saint Lucia 13 0 0 0 Local transmission 3 Grenada 12 2 0 0 Local transmission 0 Dominica 11 0 0 0 Local transmission 9 Suriname 10 0 0 0 Local transmission 1 Saint Kitts and Nevis 9 1 0 0 Imported cases only 0 Antigua and Barbuda 7 0 0 0 Imported cases only 8 Nicaragua 5 0 1 0 Imported cases only 3 Belize 4 1 0 0 Local transmission 0 Saint Vincent and the Grenadines 3 0 0 0 Imported cases only 1 Territories** Puerto Rico 452 74 18 3 Local transmission 0 Martinique 145 7 3 0 Local transmission 0 Guadeloupe 130 0 7 0 Local transmission 1 Aruba 64 2 0 0 Local transmission 0 French Guiana 62 5 0 0 Local transmission 0 United States Virgin Islands 40 3 0 0 Local transmission 0 Bermuda 35 0 0 0 Local transmission 1 Cayman Islands 28 0 1 0 Local transmission 1 Saint Martin 24 2 2 0 Under investigation 0 Sint Maarten 23 0 2 0 Imported cases only 1 Curaçao 11 0 1 0 Imported cases only 5 Montserrat 6 1 0 0 Imported cases only 0 Saint Barthélemy 6 0 0 0 Under investigation 5 Turks and Caicos Islands 5 0 0 0 Local transmission 5 Anguilla 3 0 0 0 Local transmission 1 British Virgin Islands 3 0 0 0 Imported cases only 4 Bonaire, Sint Eustatius and Saba 2 0 0 0 Imported cases only 1 Falkland Islands (Malvinas) 1 1 0 0 Under investigation 0 African Region South Africa 1585 80 9 2 Local transmission 0 Algeria 1251 265 130 47 Local transmission 0 Cameroon 555 309 9 2 Local transmission 0 Burkina Faso 302 41 15 0 Local transmission 0 Côte d’Ivoire 245 42 2 1 Local transmission 0 Senegal 219 12 2 1 Local transmission 0 Nigeria 210 20 4 2 Local transmission 0 Ghana 205 1 5 0 Local transmission 0 Mauritius 196 10 7 0 Local transmission 0 Democratic Republic of the Congo 148 14 16 3 Local transmission 0 Niger 144 46 8 3 Local transmission 0 Kenya 122 0 4 0 Local transmission 1 Guinea 111 59 0 0 Local transmission 0 Rwanda 102 13 0 0 Local transmission 0 Madagascar 70 5 0 0 Local transmission 0 Uganda 48 3 0 0 Local transmission 0 Congo 45 4 5 2 Local transmission 0 Togo 40 1 3 1 Local transmission 0 Mali 39 3 4 1 Local transmission 0 Zambia 39 0 1 0 Local transmission 2 Ethiopia 38 3 0 0 Local transmission 0 Gabon 21 0 1 0 Imported cases only 1 Eritrea 20 0 0 0 Local transmission 2 United Republic of Tanzania 20 0 1 0 Local transmission 3 Guinea-Bissau 18 3 0 0 Imported cases only 0 Equatorial Guinea 16 1 0 0 Local transmission 0 Namibia 14 1 0 0 Local transmission 0 Benin 13 0 0 0 Imported cases only 3 Angola 10 0 2 0 Imported cases only 1 Liberia 10 3 1 1 Local transmission 0 Mozambique 10 0 0 0 Local transmission 3 Seychelles 10 0 0 0 Imported cases only 3 Central African Republic 9 1 0 0 Local transmission 0 Eswatini 9 0 0 0 Imported cases only 8 Zimbabwe 9 0 1 0 Local transmission 1 Chad 7 0 0 0 Imported cases only 4 Mauritania 6 0 1 0 Imported cases only 1 Cabo Verde 5 0 1 0 Imported cases only 8 Botswana 4 0 1 0 Imported cases only 2 Gambia 4 0 1 0 Imported cases only 2 Sierra Leone 4 2 0 0 Imported cases only 0 Burundi 3 0 0 0 Local transmission 1 Malawi 3 0 0 0 Local transmission 2 Territories** Réunion 334 13 0 0 Local transmission 0 Mayotte 147 19 2 0 Local transmission 0 International conveyance (Diamond Princess) 712 0 11 0 Local transmission 20"
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
  day: "2020-04-05",
  additionalInfo: {
    countries: 204,
  },
  areas
}

fs.writeFile('./src/data/dayOf05042020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
