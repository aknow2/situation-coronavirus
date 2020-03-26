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
  const src = 'China 81848 101 3287 4 Local transmission 0 Republic of Korea 9137 100 126 6 Local transmission 0 Australia 2252 543 8 1 Local transmission 0 Malaysia 1624 106 16 2 Local transmission 0 Japan 1193 65 43 1 Local transmission 0 Singapore 558 51 2 0 Local transmission 0 Philippines 552 90 35 2 Local transmission 0 New Zealand 189 87 0 0 Local transmission 0 Viet Nam 134 11 0 0 Local transmission 0 Brunei Darussalam 104 13 0 0 Local transmission 0 Cambodia 91 4 0 0 Local transmission 0 Mongolia 10 0 0 0 Imported cases only 3 Fiji 4 1 0 0 Local transmission 0 Lao People`s Democratic Republic 2 2 0 0 Under investigation 0 Papua New Guinea 1 0 0 0 Imported cases only 4 Territories** Guam 32 3 1 0 Local transmission 0 French Polynesia 25 7 0 0 Local transmission 0 New Caledonia 10 2 0 0 Local transmission 0 European Region Italy 69176 5249 6820 743 Local transmission 0 Spain 39673 6584 2696 514 Local transmission 0 Germany 31554 2342 149 23 Local transmission 0 France 22025 2410 1100 240 Local transmission 0 Switzerland 8789 774 86 20 Local transmission 0 The United Kingdom 8081 1427 422 87 Local transmission 0 Netherlands 5560 811 276 63 Local transmission 0 Austria 5282 796 30 5 Local transmission 0 Belgium 4269 526 122 34 Local transmission 0 Norway 2566 195 10 2 Local transmission 0 Portugal 2362 302 33 10 Local transmission 0 Sweden 2272 256 36 11 Local transmission 0 Israel 2170 932 5 4 Local transmission 0 Turkey 1872 343 44 7 Local transmission 0 Denmark 1591 131 32 8 Local transmission 0 Czechia 1394 158 3 2 Local transmission 0 Ireland 1329 204 7 1 Local transmission 0 Luxembourg 1099 224 8 0 Local transmission 0 Poland 901 152 10 2 Local transmission 0 Finland 792 92 1 0 Local transmission 0 Romania 762 186 11 4 Local transmission 0 Greece 743 48 20 3 Local transmission 0 Russian Federation 658 220 0 0 Local transmission 0 Iceland 648 60 2 0 Local transmission 0 Slovenia 480 38 3 2 Local transmission 0 Croatia 382 76 1 1 Local transmission 0 Estonia 369 17 0 0 Local transmission 0 Serbia 303 54 3 1 Local transmission 0 Armenia 265 30 0 0 Local transmission 0 Hungary 226 39 10 2 Local transmission 0 Bulgaria 220 19 3 0 Local transmission 0 Lithuania 209 30 2 1 Local transmission 0 Slovakia 204 13 0 0 Local transmission 0 Latvia 197 17 0 0 Local transmission 0 Andorra 188 24 1 0 Local transmission 0 San Marino 187 0 21 1 Local transmission 1 Bosnia and Herzegovina 164 33 2 1 Local transmission 0 North Macedonia 148 12 2 0 Local transmission 0 Albania 146 23 5 1 Local transmission 0 Republic of Moldova 125 16 1 0 Local transmission 0 Cyprus 124 8 3 3 Local transmission 0 Malta 120 13 0 0 Local transmission 0 Ukraine 113 29 4 1 Local transmission 0 Azerbaijan 87 15 1 0 Local transmission 0 Belarus 81 0 0 0 Local transmission 1 Kazakhstan 79 16 0 0 Imported cases only 0 Georgia 73 6 0 0 Local transmission 0 Uzbekistan 50 4 0 0 Local transmission 0 Liechtenstein 47 1 0 0 Imported cases only 0 Kyrgyzstan 42 26 0 0 Local transmission 0 Montenegro 29 7 0 0 Imported cases only 0 Monaco 23 0 0 0 Local transmission 2 Holy See 1 0 0 0 Under investigation 18 Territories** Faroe Islands 122 4 0 0 Local transmission 0 Kosovo[1] 63 2 1 0 Local transmission 0 Guernsey 23 3 0 0 Local transmission 0 Isle of Man 23 10 0 0 Imported cases only 0 Jersey 16 0 0 0 Local transmission 1 Gibraltar 15 0 0 0 Local transmission 2 Greenland 4 0 0 0 Under investigation 1 South -East Asia Region Thailand 934 107 4 0 Local transmission 0 Indonesia 686 107 55 6 Local transmission 0 India 562 128 9 0 Local transmission 0 Sri Lanka 102 5 0 0 Local transmission 0 Bangladesh 39 6 4 1 Local transmission 0 Maldives 13 0 0 0 Local transmission 9 Myanmar 3 1 0 0 Imported cases only 0 Bhutan 2 0 0 0 Imported cases only 5 Nepal 2 0 0 0 Imported cases only 1 Timor -Leste 1 0 0 0 Imported cases only 4 Eastern Mediterranean Region Iran (Islamic Republic of) 24811 1762 1934 122 Local transmission 0 Pakistan 991 104 7 1 Local transmission 0 Saudi Arabia 767 205 1 1 Local transmission 0 Qatar 526 25 0 0 Local transmission 0 Egypt 402 36 20 1 Local transmission 0 Bahrain 392 15 3 1 Local transmission 0 Iraq 316 50 27 4 Local transmission 0 Lebanon 304 37 4 0 Local transmission 0 United Arab Emirates 248 50 2 0 Local transmission 0 Kuwait 195 4 0 0 Local transmission 0 Morocco 170 27 5 1 Local transmission 0 Jordan 153 26 0 0 Imported cases only 0 Tunisia 114 25 3 0 Local transmission 0 Oman 99 15 0 0 Local transmission 0 Afghanistan 74 32 1 0 Imported cases only 0 Djibouti 3 0 0 0 Imported cases only 1 Sudan 3 1 1 0 Imported cases only 0 Libya 1 1 0 0 Imported cases only 0 Somalia 1 0 0 0 Imported cases only 8 Syrian Arab Republic 1 0 0 0 Imported cases only 2 Territories** occupied Palestinian territory 60 1 0 0 Local transmission 0 Region of the Americas United States of America 51914 9750 673 202 Local transmission 0 Brazil 2201 655 46 21 Local transmission 0 Canada 1739 307 25 5 Local transmission 0 Ecuador 1049 259 27 12 Local transmission 0 Chile 922 176 2 1 Local transmission 0 Peru 416 21 5 3 Local transmission 0 Mexico 370 0 4 0 Local transmission 1 Panama 345 0 6 0 Local transmission 1 Dominican Republic 312 67 6 3 Local transmission 0 Colombia 306 29 3 0 Local transmission 0 Argentina 301 35 4 0 Local transmission 0 Costa Rica 177 19 2 0 Local transmission 0 Uruguay 162 0 0 0 Imported cases only 1 Venezuela (Bolivarian Republic of) 77 7 0 0 Local transmission 0 Trinidad and Tobago 57 6 0 0 Imported cases only 0 Cuba 48 8 1 0 Local transmission 0 Honduras 30 0 0 0 Local transmission 1 Bolivia (Plurinational State of) 28 1 0 0 Local transmission 0 Paraguay 27 5 2 1 Local transmission 0 Guatemala 21 1 1 0 Local transmission 0 Jamaica 21 2 1 0 Local transmission 0 Barbados 18 1 0 0 Local transmission 0 Haiti 7 1 0 0 Imported cases only 0 Suriname 6 4 0 0 Imported cases only 0 El Salvador 5 2 0 0 Imported cases only 0 Guyana 5 0 1 0 Local transmission 6 Bahamas 4 0 0 0 Local transmission 4 Antigua and Barbuda 3 2 0 0 Imported cases only 0 Saint Lucia 3 0 0 0 Imported cases only 1 Dominica 2 1 0 0 Imported cases only 0 Nicaragua 2 0 0 0 Imported cases only 3 Belize 1 0 0 0 Imported cases only 1 Grenada 1 0 0 0 Imported cases only 2 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 12 Territories** Guadeloupe 73 11 0 0 Imported cases only 0 Martinique 57 4 0 0 Imported cases only 0 Puerto Rico 39 8 2 0 Imported cases only 0 French Guiana 23 3 0 0 Local transmission 0 United States Virgin Islands 17 0 0 0 Imported cases only 1 Aruba 12 3 0 0 Local transmission 0 Saint Martin 8 0 0 0 Under investigation 1 Bermuda 6 0 0 0 Imported cases only 1 Curaçao 6 2 1 0 Imported cases only 0 Cayman Islands 5 0 1 0 Imported cases only 1 Saint Barthélemy 3 0 0 0 Under investigation 9 Sint Maarten 2 0 0 0 Imported cases only 1 Montserrat 1 0 0 0 Imported cases only 7 Turks and Caicos Islands 1 0 0 0 Imported cases only 1 African Region South Africa 554 152 0 0 Local transmission 0 Algeria 264 33 17 0 Local transmission 0 Burkina Faso 114 15 3 0 Local transmission 0 Senegal 86 7 0 0 Local transmission 0 Cameroon 72 0 1 1 Local transmission 1 Côte d’Ivoire 72 47 0 0 Imported cases only 0 Ghana 53 26 2 0 Local transmission 0 Democratic Republic of the Congo 45 9 2 0 Local transmission 0 Mauritius 42 6 2 2 Imported cases only 0 Nigeria 42 20 0 0 Imported cases only 0 Rwanda 40 4 0 0 Local transmission 0 Kenya 25 9 0 0 Local transmission 0 Togo 20 2 0 0 Imported cases only 0 Madagascar 19 6 0 0 Imported cases only 0 Ethiopia 12 1 0 0 Imported cases only 0 United Republic of Tanzania 12 0 0 0 Imported cases only 2 Uganda 9 0 0 0 Imported cases only 1 Seychelles 7 0 0 0 Imported cases only 3 Equatorial Guinea 6 0 0 0 Imported cases only 3 Gabon 6 0 1 0 Imported cases only 2 Benin 5 0 0 0 Imported cases only 1 Central African Republic 4 0 0 0 Imported cases only 2 Congo 4 0 0 0 Imported cases only 3 Eswatini 4 0 0 0 Imported cases only 2 Guinea 4 0 0 0 Imported cases only 1 Namibia 4 1 0 0 Imported cases only 0 Cabo Verde 3 0 0 0 Imported cases only 3 Chad 3 0 0 0 Imported cases only 1 Liberia 3 0 0 0 Local transmission 3 Mozambique 3 2 0 0 Imported cases only 0 Zambia 3 0 0 0 Imported cases only 2 Angola 2 0 0 0 Imported cases only 3 Gambia 2 1 0 0 Imported cases only 0 Mauritania 2 0 0 0 Imported cases only 6 Niger 2 0 0 0 Imported cases only 1 Zimbabwe 2 0 1 0 Imported cases only 3 Eritrea 1 0 0 0 Imported cases only 3 Territories** Réunion 83 12 0 0 Local transmission 0 Mayotte 30 6 0 0 Local transmission 0 International conveyance (Diamond Princess) 712 0 7 0 Local transmission 9'
  const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
      .replace('Iran (Islamic Republic of) ', 'Iran ')
      .replace(/Bolivia (Plurinational State of) /g, 'Bolivia ')
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
  day: "2020-03-25",
  additionalInfo: {
    countries: 192,
  },
  areas
}

fs.writeFile('./src/data/dayOf25032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
