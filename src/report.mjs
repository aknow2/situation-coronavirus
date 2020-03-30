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
  const src = "China 82356 126 3306 5 Local transmission 0 Republic of Korea 9583 105 152 8 Local transmission 0 Australia 3966 331 16 2 Local transmission 0 Malaysia 2320 159 27 1 Local transmission 0 Japan 1693 194 52 3 Local transmission 0 Philippines 1075 272 68 14 Local transmission 0 Singapore 802 70 2 0 Local transmission 0 New Zealand 476 60 1 1 Local transmission 0 Viet Nam 179 10 0 0 Local transmission 0 Brunei Darussalam 120 5 1 0 Local transmission 0 Cambodia 102 0 0 0 Local transmission 1 Mongolia 12 0 0 0 Imported cases only 1 Lao People's Democratic Republic 6 0 0 0 Local transmission 2 Fiji 5 0 0 0 Local transmission 3 Papua New Guinea 1 0 0 0 Imported cases only 8 Territories** Guam 56 5 1 0 Local transmission 0 French Polynesia 34 4 0 0 Local transmission 0 New Caledonia 15 0 0 0 Local transmission 1 Northern Mariana Islands (Commonwealth of the) 2 2 0 0 Under investigation 0 European Region Italy 92472 5974 10023 887 Local transmission 0 Spain 72248 8189 5690 832 Local transmission 0 Germany 52547 3965 389 64 Local transmission 0 France 37145 4603 2311 319 Local transmission 0 The United Kingdom 17093 2546 1019 260 Local transmission 0 Switzerland 13152 1048 235 38 Local transmission 0 Netherlands 9762 1159 639 93 Local transmission 0 Belgium 9134 1850 353 64 Local transmission 0 Austria 8291 594 68 0 Local transmission 0 Turkey 7402 1704 108 16 Local transmission 0 Portugal 5170 902 100 24 Local transmission 0 Israel 3865 405 81 69 Local transmission 0 Norway 3845 264 20 4 Local transmission 0 Sweden 3447 401 102 10 Local transmission 0 Czechia 2663 384 11 2 Local transmission 0 Ireland 2415 294 36 14 Local transmission 0 Denmark 2201 155 65 13 Local transmission 0 Luxembourg 1831 226 18 3 Local transmission 0 Poland 1638 249 18 2 Local transmission 0 Russian Federation 1534 270 8 4 Local transmission 0 Romania 1452 160 29 5 Local transmission 0 Finland 1218 193 9 2 Local transmission 0 Greece 1061 95 32 4 Local transmission 0 Iceland 963 73 2 0 Local transmission 0 Slovenia 691 59 9 0 Local transmission 0 Serbia 659 131 10 3 Local transmission 0 Croatia 657 71 5 2 Local transmission 0 Estonia 640 65 1 0 Local transmission 0 Armenia 424 52 3 2 Local transmission 0 Ukraine 418 107 9 1 Local transmission 0 Hungary 408 65 13 2 Local transmission 0 Lithuania 394 36 7 2 Local transmission 0 Bulgaria 331 38 7 4 Local transmission 0 Andorra 321 32 4 1 Local transmission 0 Latvia 305 25 0 0 Local transmission 0 Slovakia 295 0 0 0 Local transmission 1 Bosnia and Herzegovina 269 36 6 2 Local transmission 0 Kazakhstan 265 61 1 0 Under investigation 0 North Macedonia 241 22 4 1 Local transmission 0 Republic of Moldova 231 32 2 0 Local transmission 0 San Marino 228 0 22 1 Local transmission 1 Albania 212 15 10 1 Local transmission 0 Cyprus 179 17 5 0 Local transmission 0 Azerbaijan 164 17 4 1 Local transmission 0 Malta 139 0 0 0 Local transmission 1 Uzbekistan 133 29 2 1 Local transmission 0 Belarus 94 0 0 0 Local transmission 1 Georgia 90 5 0 0 Local transmission 0 Kyrgyzstan 84 26 0 0 Local transmission 0 Montenegro 82 12 1 0 Local transmission 0 Liechtenstein 61 1 0 0 Under investigation 0 Monaco 19 0 0 0 Local transmission 6 Holy See 4 0 0 0 Under investigation 3 Territories** Faroe Islands 155 11 0 0 Local transmission 0 Kosovo[1] 91 3 1 0 Local transmission 0 Jersey 61 9 1 0 Local transmission 0 Gibraltar 56 1 0 0 Local transmission 0 Guernsey 39 3 0 0 Local transmission 0 Isle of Man 32 3 0 0 Local transmission 0 Greenland 10 1 0 0 Under investigation 0 South -East Asia Region Thailand 1388 252 7 2 Local transmission 0 Indonesia 1155 109 102 15 Local transmission 0 India 979 255 25 8 Local transmission 0 Sri Lanka 106 0 0 0 Local transmission 2 Bangladesh 48 0 5 0 Local transmission 2 Maldives 16 3 0 0 Local transmission 0 Myanmar 8 3 0 0 Local transmission 0 Nepal 5 2 0 0 Imported cases only 0 Bhutan 3 0 0 0 Imported cases only 2 Timor -Leste 1 0 0 0 Under investigation 8 Eastern Mediterranean Region Iran (Islamic Republic of) 35408 3076 2517 139 Local transmission 0 Pakistan 1526 291 13 4 Local transmission 0 Saudi Arabia 1203 99 4 1 Local transmission 0 Qatar 590 28 1 1 Local transmission 0 Egypt 576 40 36 6 Local transmission 0 Iraq 506 48 42 2 Local transmission 0 Bahrain 476 3 4 0 Local transmission 0 United Arab Emirates 468 63 2 0 Local transmission 0 Morocco 437 79 26 3 Local transmission 0 Lebanon 412 21 8 0 Local transmission 0 Tunisia 278 51 8 2 Local transmission 0 Jordan 246 11 1 0 Local transmission 0 Kuwait 235 0 0 0 Local transmission 1 Oman 167 15 0 0 Local transmission 0 Afghanistan 114 8 4 2 Local transmission 0 Djibouti 15 2 0 0 Local transmission 0 Sudan 5 2 1 0 Under investigation 0 Syrian Arab Republic 5 0 0 0 Imported cases only 3 Libya 3 2 0 0 Imported cases only 0 Somalia 3 0 0 0 Imported cases only 2 Territories** occupied Palestinian territory 104 7 1 0 Local transmission 0 Region of the Americas United States of America 103321 18093 1668 425 Local transmission 0 Canada 4757 739 55 16 Local transmission 0 Brazil 3417 502 92 15 Local transmission 0 Chile 1909 299 6 1 Local transmission 0 Ecuador 1823 228 48 12 Local transmission 0 Panama 786 112 14 5 Local transmission 0 Mexico 717 128 12 4 Local transmission 0 Argentina 690 101 17 5 Local transmission 0 Peru 635 55 11 2 Local transmission 0 Dominican Republic 581 0 20 0 Local transmission 1 Colombia 539 48 6 0 Local transmission 0 Uruguay 274 36 0 0 Local transmission 0 Costa Rica 263 32 2 0 Local transmission 0 Cuba 119 39 3 1 Local transmission 0 Venezuela (Bolivarian Republic of) 113 7 2 2 Local transmission 0 Bolivia (Plurinational State of) 74 13 0 0 Local transmission 0 Trinidad and Tobago 74 8 2 0 Local transmission 0 Honduras 67 0 1 0 Local transmission 1 Paraguay 56 4 3 0 Local transmission 0 Guatemala 32 7 1 0 Local transmission 0 Jamaica 30 4 1 0 Local transmission 0 Barbados 24 0 0 0 Local transmission 1 El Salvador 19 6 0 0 Local transmission 0 Dominica 11 0 0 0 Local transmission 2 Bahamas 10 1 0 0 Local transmission 0 Haiti 8 0 0 0 Imported cases only 3 Suriname 8 0 0 0 Imported cases only 1 Antigua and Barbuda 7 0 0 0 Imported cases only 1 Grenada 7 0 0 0 Local transmission 2 Guyana 5 0 1 0 Local transmission 10 Nicaragua 4 2 1 0 Imported cases only 0 Saint Lucia 3 0 0 0 Imported cases only 5 Belize 2 0 0 0 Local transmission 3 Saint Kitts and Nevis 2 0 0 0 Imported cases only 3 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 16 Territories** Guadeloupe 96 0 2 0 Imported cases only 1 Martinique 93 0 1 0 Imported cases only 1 Puerto Rico 64 0 2 0 Imported cases only 2 Aruba 46 18 0 0 Local transmission 0 French Guiana 31 0 0 0 Local transmission 1 Bermuda 17 2 0 0 Local transmission 0 United States Virgin Islands 17 0 0 0 Imported cases only 5 Saint Martin 12 0 0 0 Under investigation 1 Cayman Islands 8 0 1 0 Imported cases only 3 Curaçao 7 0 1 0 Imported cases only 2 Montserrat 5 0 0 0 Imported cases only 1 Saint Barthélemy 5 0 0 0 Under investigation 1 Sint Maarten 3 0 0 0 Imported cases only 1 Anguilla 2 0 0 0 Local transmission 2 British Virgin Islands 2 0 0 0 Imported cases only 2 Turks and Caicos Islands 2 0 0 0 Imported cases only 2 African Region South Africa 1187 17 1 0 Local transmission 0 Algeria 409 42 26 1 Local transmission 0 Burkina Faso 146 0 3 0 Local transmission 3 Cote d’Ivoire 140 48 0 0 Local transmission 0 Ghana 137 0 4 0 Local transmission 1 Senegal 119 0 0 0 Local transmission 1 Mauritius 102 6 2 0 Local transmission 0 Cameroon 91 16 2 1 Local transmission 0 Democratic Republic of the Congo 68 10 6 2 Local transmission 0 Nigeria 65 0 1 0 Local transmission 2 Rwanda 60 6 0 0 Local transmission 0 Togo 29 4 0 0 Imported cases only 0 Madagascar 26 0 0 0 Imported cases only 1 Kenya 25 0 1 0 Local transmission 4 Congo 19 0 0 0 Imported cases only 1 Mali 18 9 0 0 Local transmission 0 Ethiopia 16 0 0 0 Imported cases only 1 Zambia 16 3 0 0 Local transmission 0 Uganda 14 0 0 0 Imported cases only 3 United Republic of Tanzania 14 1 0 0 Under investigation 0 Niger 10 0 1 0 Local transmission 2 Eswatini 9 0 0 0 Imported cases only 1 Guinea 8 0 0 0 Imported cases only 1 Mozambique 8 1 0 0 Local transmission 0 Namibia 8 0 0 0 Imported cases only 2 Gabon 7 0 1 0 Imported cases only 1 Seychelles 7 0 0 0 Imported cases only 7 Benin 6 0 0 0 Imported cases only 2 Central African Republic 6 0 0 0 Imported cases only 1 Equatorial Guinea 6 0 0 0 Imported cases only 7 Eritrea 6 0 0 0 Imported cases only 2 Cabo Verde 5 0 1 0 Imported cases only 1 Chad 5 0 0 0 Imported cases only 2 Mauritania 5 2 0 0 Imported cases only 0 Zimbabwe 5 0 1 0 Local transmission 1 Gambia 3 1 1 0 Imported cases only 0 Liberia 3 0 0 0 Local transmission 7 Angola 2 0 0 0 Imported cases only 7 Guinea-Bissau 2 0 0 0 Imported cases only 3 Territories** Réunion 143 8 0 0 Local transmission 0 Mayotte 50 0 0 0 Local transmission 2 International conveyance (Diamond Princess) 712 0 7 0 Local transmission 13"
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
  day: "2020-03-29",
  additionalInfo: {
    countries: 198,
  },
  areas
}

fs.writeFile('./src/data/dayOf29032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
