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
  const src = 'China 81300 126 3253 11 Local transmission 0 Republic of Korea 8652 239 94 10 Local transmission 0 Japan 950 77 33 4 Local transmission 0 Malaysia 900 227 2 0 Local transmission 0 Australia 709 199 6 0 Local transmission 0 Singapore 345 32 0 0 Local transmission 0 Philippines 217 30 17 3 Local transmission 0 Viet Nam 85 19 0 0 Local transmission 0 Brunei Darussalam 73 17 0 0 Local transmission 0 Cambodia 47 12 0 0 Local transmission 0 New Zealand 39 19 0 0 Local transmission 0 Mongolia 6 1 0 0 Imported cases only 0 Fiji 1 1 0 0 Imported cases only 0 Territories** Guam 12 7 0 0 Local transmission 0 French Polynesia 11 8 0 0 Imported cases only 0 New Caledonia 2 2 0 0 Imported cases only 0 European Region Italy 41035 5322 3407 429 Local transmission 0 Spain 17147 3431 767 169 Local transmission 0 Germany 10999 2801 20 8 Local transmission 0 France 10877 1834 372 128 Local transmission 0 Switzerland 3863 853 33 12 Local transmission 0 The United Kingdom 3277 647 144 41 Local transmission 0 Netherlands 2460 409 76 18 Local transmission 0 Austria 1843 197 5 1 Local transmission 0 Belgium 1795 309 14 0 Local transmission 0 Norway 1552 129 6 3 Local transmission 0 Sweden 1423 144 3 0 Local transmission 0 Denmark 1132 88 6 2 Local transmission 0 Portugal 785 143 3 1 Local transmission 0 Czechia 694 172 0 0 Local transmission 0 Ireland 557 265 3 1 Local transmission 0 Israel 529 102 0 0 Local transmission 0 Greece 418 0 5 0 Local transmission 1 Finland 369 10 0 0 Local transmission 0 Luxembourg 345 135 4 2 Local transmission 0 Iceland 330 80 0 0 Local transmission 0 Poland 325 38 5 0 Local transmission 0 Slovenia 319 33 1 0 Local transmission 0 Estonia 267 9 0 0 Local transmission 0 Romania 260 14 0 0 Local transmission 0 Russian Federation 199 52 0 0 Imported cases only 0 Turkey 191 0 2 0 Local transmission 1 San Marino 126 17 14 0 Local transmission 0 Serbia†† 123 41 0 0 Local transmission 0 Slovakia 123 18 0 0 Local transmission 0 Armenia 122 38 0 0 Local transmission 0 Bulgaria 94 2 3 1 Local transmission 0 Latvia 86 15 0 0 Imported cases only 0 Croatia 81 0 0 0 Local transmission 1 Hungary 73 15 1 0 Local transmission 0 Albania 70 11 2 0 Local transmission 0 Cyprus 58 0 0 0 Local transmission 1 Malta 53 5 0 0 Imported cases only 0 Republic of Moldova 49 13 0 0 Local transmission 0 North Macedonia 48 17 0 0 Local transmission 0 Belarus 46 0 0 0 Local transmission 1 Kazakhstan 46 10 0 0 Imported cases only 0 Bosnia and Herzegovina 44 8 0 0 Local transmission 0 Georgia 38 4 0 0 Imported cases only 0 Lithuania 36 10 0 0 Imported cases only 0 Azerbaijan 34 0 1 0 Imported cases only 1 Liechtenstein 25 0 0 0 Imported cases only 1 Uzbekistan 21 5 0 0 Local transmission 0 Ukraine 16 0 2 0 Local transmission 1 Montenegro 10 8 0 0 Imported cases only 0 Monaco 9 0 0 0 Under investigation 3 Kyrgyzstan 3 0 0 0 Under investigation 1 Holy See 1 0 0 0 Under investigation 13 Territories** Andorra 75 36 0 0 Imported cases only 0 Faroe Islands 72 14 0 0 Imported cases only 0 Gibraltar 10 2 0 0 Under investigation 0 Jersey 5 0 0 0 Imported cases only 2 Greenland 2 0 0 0 Under investigation 1 Guernsey 1 0 0 0 Imported cases only 10 South -East Asia Region Thailand 322 110 1 0 Local transmission 0 Indonesia 309 82 25 6 Local transmission 0 India 195 44 4 1 Local transmission 0 Sri Lanka 59 17 0 0 Local transmission 0 Bangladesh 17 7 1 1 Local transmission 0 Maldives 13 0 0 0 Local transmission 4 Bhutan 2 1 0 0 Imported cases only 0 Nepal 1 0 0 0 Imported cases only 56 Eastern Mediterranean Region Iran (Islamic Republic of) 18407 1046 1284 149 Local transmission 0 Qatar 452 10 0 0 Local transmission 0 Pakistan 302 61 2 2 Imported cases only 0 Bahrain 269 13 1 0 Local transmission 0 Saudi Arabia 238 0 0 0 Local transmission 1 Egypt 210 14 6 0 Local transmission 0 Iraq 177 13 12 0 Local transmission 0 Lebanon 149 29 4 0 Local transmission 0 Kuwait 148 6 0 0 Local transmission 0 United Arab Emirates 140 27 0 0 Local transmission 0 Morocco 61 12 2 0 Local transmission 0 Jordan 56 4 0 0 Imported cases only 0 Oman 39 6 0 0 Imported cases only 0 Tunisia 39 10 0 0 Local transmission 0 Afghanistan 22 0 0 0 Imported cases only 2 Djibouti 1 0 0 0 Under investigation 1 Somalia 1 0 0 0 Imported cases only 3 Sudan 1 0 1 0 Imported cases only 5 Territories** occupied Palestinian territory 47 3 0 0 Local transmission 0 Region of the Americas United States of America 10442 3355 150 50 Local transmission 0 Canada 736 167 9 0 Local transmission 0 Brazil 428 137 4 3 Local transmission 0 Chile 342 104 0 0 Local transmission 0 Peru 234 89 0 0 Local transmission 0 Ecuador 199 44 3 1 Local transmission 0 Mexico 118 25 1 1 Imported cases only 0 Panama 109 23 1 0 Local transmission 0 Colombia 108 15 0 0 Local transmission 0 Argentina 97 0 2 0 Local transmission 1 Costa Rica 87 37 1 0 Local transmission 0 Uruguay 79 50 0 0 Imported cases only 0 Venezuela (Bolivarian Republic of) 36 0 0 0 Imported cases only 1 Dominican Republic 34 13 2 1 Local transmission 0 Bolivia (Plurinational State of) 15 3 0 0 Imported cases only 0 Jamaica 15 2 1 1 Local transmission 0 Honduras 12 3 0 0 Imported cases only 0 Cuba 11 1 1 0 Local transmission 0 Paraguay 11 0 0 0 Local transmission 1 Guatemala 9 3 1 0 Imported cases only 0 Trinidad and Tobago 9 2 0 0 Imported cases only 0 Guyana 5 0 1 0 Local transmission 1 Bahamas 3 0 0 0 Local transmission 1 Barbados 2 0 0 0 Imported cases only 1 Bermuda 2 0 0 0 Imported cases only 1 Saint Lucia 2 0 0 0 Imported cases only 4 Antigua and Barbuda 1 0 0 0 Imported cases only 6 El Salvador 1 1 0 0 Imported cases only 0 Montserrat 1 0 0 0 Imported cases only 1 Nicaragua 1 1 0 0 Under investigation 0 Suriname 1 0 0 0 Imported cases only 4 Saint Vincent and the Grenadines 1 0 0 0 Imported cases only 6 Territories** Guadeloupe 45 12 0 0 Imported cases only 0 Martinique 32 9 0 0 Imported cases only 0 French Guiana 15 4 0 0 Local transmission 0 Puerto Rico 6 1 0 0 Imported cases only 0 Aruba 5 1 0 0 Imported cases only 0 Saint Martin 4 0 0 0 Under investigation 1 Cayman Islands 3 2 1 0 Imported cases only 0 Curaçao 3 0 0 0 Imported cases only 2 Saint Barthélemy 3 0 0 0 Under investigation 4 United States Virgin Islands 3 0 0 0 Imported cases only 1 Sint Maarten 1 0 0 0 Imported cases only 1 African Region South Africa 150 34 0 0 Local transmission 0 Algeria 82 10 7 1 Local transmission 0 Burkina Faso 40 14 1 0 Imported cases only 0 Senegal 38 2 0 0 Local transmission 0 Cameroon 15 5 0 0 Local transmission 0 Democratic Republic of the Congo 14 7 0 0 Local transmission 0 Nigeria 12 4 0 0 Imported cases only 0 Ghana 11 2 0 0 Local transmission 0 Rwanda 11 0 0 0 Local transmission 1 Cote d’Ivoire 9 0 0 0 Imported cases only 1 Ethiopia 9 3 0 0 Imported cases only 0 Togo 9 8 0 0 Imported cases only 0 Kenya 7 0 0 0 Local transmission 1 Mauritius 7 4 0 0 Under investigation 0 Seychelles 6 0 0 0 Imported cases only 1 United Republic of Tanzania 6 3 0 0 Imported cases only 0 Equatorial Guinea 4 1 0 0 Imported cases only 0 Congo 3 0 0 0 Imported cases only 1 Gabon 3 0 0 0 Imported cases only 1 Namibia 3 1 0 0 Imported cases only 0 Benin 2 1 0 0 Imported cases only 0 Guinea 2 1 0 0 Imported cases only 0 Liberia 2 0 0 0 Local transmission 1 Mauritania 2 0 0 0 Imported cases only 1 Zambia 2 0 0 0 Imported cases only 1 Central African Republic 1 0 0 0 Imported cases only 5 Chad 1 1 0 0 Imported cases only 0 Eswatini 1 0 0 0 Imported cases only 5 Gambia 1 0 0 0 Imported cases only 1 Niger 1 1 0 0 Imported cases only 0 Territories** Réunion 15 3 0 0 Imported cases only 0 Mayotte 4 1 0 0 Imported cases only 0 International conveyance (Diamond Princess) 712 0 7 0 Local transmission 4'
  const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
      .replace('Iran (Islamic Republic of) ', 'Iran ')
      .replace(/Bolivia (Plurinational State of) /g, 'Bolivia ')
      .replace(/†/g, '')
      .replace(/\*/g, '')
      .replace(/¶/g, '')
      .replace(/‡/g, '')
      .replace(/§/g, '')
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
  day: "2020-03-20",
  additionalInfo: {
    countries: 173,
  },
  areas
}

fs.writeFile('./src/data/dayOf20032020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
