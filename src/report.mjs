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
  const src = "China 83071 66 3340 0 Local transmission 0 Republic of Korea 10331 47 192 6 Local transmission 0 Australia 5844 100 42 6 Local transmission 0 Japan 3906 252 80 7 Local transmission 0 Malaysia 3793 131 62 1 Local transmission 0 Philippines 3660 414 163 11 Local transmission 0 Singapore 1375 66 6 0 Local transmission 0 New Zealand 943 32 1 0 Local transmission 0 Viet Nam 245 4 0 0 Local transmission 0 Brunei Darussalam 135 0 1 0 Local transmission 2 Cambodia 115 1 0 0 Local transmission 0 Mongolia 15 1 0 0 Imported cases only 0 Fiji 14 2 0 0 Local transmission 0 Lao People's Democratic Republic 12 1 0 0 Local transmission 0 Papua New Guinea 1 0 0 0 Imported cases only 17 Territories** Guam 113 1 4 0 Local transmission 0 French Polynesia 42 1 0 0 Local transmission 0 New Caledonia 18 0 0 0 Local transmission 4 Northern Mariana Islands (Commonwealth of the) 8 0 1 0 Local transmission 4 European Region Spain 135032 4273 13055 637 Local transmission 0 Italy 132547 3599 16525 636 Local transmission 0 Germany 99225 3834 1607 173 Local transmission 0 France 73488 3881 8896 832 Local transmission 0 The United Kingdom 51612 3802 5373 439 Local transmission 0 Turkey 30217 3148 649 75 Local transmission 0 Switzerland 21574 509 715 0 Local transmission 0 Belgium 20814 1123 1632 185 Local transmission 0 Netherlands 18803 952 1867 101 Local transmission 0 Austria 12297 314 220 16 Local transmission 0 Portugal 11730 452 311 16 Local transmission 0 Israel 8611 593 52 6 Local transmission 0 Sweden 7206 376 477 76 Local transmission 0 Russian Federation 6343 954 47 2 Local transmission 0 Norway 5755 115 59 1 Local transmission 0 Ireland 5364 253 174 16 Local transmission 0 Czechia 4822 235 78 11 Local transmission 0 Denmark 4681 312 187 8 Local transmission 0 Poland 4413 311 107 13 Local transmission 0 Romania 4057 193 157 9 Local transmission 0 Luxembourg 2843 39 41 5 Local transmission 0 Serbia 2200 292 58 7 Local transmission 0 Finland 2176 249 28 0 Local transmission 0 Greece 1755 20 79 6 Local transmission 0 Iceland 1562 76 6 2 Local transmission 0 Ukraine 1462 143 45 7 Local transmission 0 Croatia 1222 40 16 1 Local transmission 0 Estonia 1108 11 19 4 Local transmission 0 Slovenia 1021 24 30 2 Local transmission 0 Republic of Moldova 965 101 19 4 Local transmission 0 Lithuania 843 32 14 1 Local transmission 0 Armenia 833 87 8 1 Local transmission 0 Hungary 817 73 47 9 Local transmission 0 Belarus 700 138 13 5 Local transmission 0 Bosnia and Herzegovina 695 33 28 7 Local transmission 0 Kazakhstan 670 66 6 1 Local transmission 0 Azerbaijan 641 57 7 2 Local transmission 0 North Macedonia 570 15 21 3 Local transmission 0 Bulgaria 549 18 22 2 Local transmission 0 Latvia 542 9 1 0 Local transmission 0 Andorra 540 17 21 4 Local transmission 0 Slovakia 534 49 2 2 Local transmission 0 Uzbekistan 472 82 2 0 Local transmission 0 Cyprus 465 19 14 0 Local transmission 0 Albania 377 0 22 1 Local transmission 1 San Marino 277 11 32 0 Local transmission 0 Malta 241 7 0 0 Local transmission 0 Kyrgyzstan 228 12 4 0 Local transmission 0 Montenegro 223 20 2 0 Local transmission 0 Georgia 195 7 2 0 Local transmission 0 Liechtenstein 78 0 1 0 Under investigation 1 Monaco 40 3 0 0 Local transmission 0 Holy See 7 0 0 0 Under investigation 4 Territories** Faroe Islands 181 0 0 0 Local transmission 2 Kosovo[1] 165 20 3 2 Local transmission 0 Jersey 155 0 3 0 Local transmission 1 Guernsey 154 0 3 0 Local transmission 1 Isle of Man 127 0 1 0 Local transmission 1 Gibraltar 103 0 1 0 Local transmission 1 Greenland 11 0 0 0 Under investigation 1 South -East Asia Region India 4067 0 109 0 Local transmission 1 Indonesia 2491 218 209 11 Local transmission 0 Thailand 2220 51 26 3 Local transmission 0 Sri Lanka 176 0 5 0 Local transmission 1 Bangladesh 123 35 12 4 Local transmission 0 Myanmar 21 0 1 0 Local transmission 1 Maldives 19 0 0 0 Local transmission 4 Nepal 9 0 0 0 Local transmission 2 Bhutan 5 0 0 0 Imported cases only 4 Timor-Leste 1 0 0 0 Imported cases only 17 Eastern Mediterranean Region Iran (Islamic Republic of) 60500 2274 3739 136 Local transmission 0 Pakistan 3864 587 54 4 Local transmission 0 Saudi Arabia 2752 289 38 4 Local transmission 0 United Arab Emirates 2076 277 11 1 Local transmission 0 Qatar 1832 228 4 0 Local transmission 0 Egypt 1322 149 85 7 Local transmission 0 Morocco 1141 28 83 12 Local transmission 0 Iraq 1031 70 64 3 Local transmission 0 Bahrain 756 56 4 0 Local transmission 0 Kuwait 665 109 1 0 Local transmission 0 Tunisia 596 22 22 0 Local transmission 0 Lebanon 541 14 19 1 Local transmission 0 Oman 371 40 2 0 Local transmission 0 Afghanistan 367 30 11 4 Local transmission 0 Jordan 349 4 6 1 Local transmission 0 Djibouti 90 31 0 0 Local transmission 0 Syrian Arab Republic 19 0 2 0 Local transmission 1 Libya 18 0 1 0 Local transmission 1 Sudan 14 2 2 0 Local transmission 0 Somalia 7 0 0 0 Local transmission 3 Territories** occupied Palestinian territory 254 8 1 0 Local transmission 0 Region of the Americas United States of America 333811 26493 9559 1201 Local transmission 0 Canada 15806 1902 293 62 Local transmission 0 Brazil 11130 852 486 54 Local transmission 0 Chile 4815 344 37 3 Local transmission 0 Ecuador 3747 282 191 19 Local transmission 0 Peru 2281 535 83 10 Local transmission 0 Mexico 2143 253 94 15 Local transmission 0 Panama 1988 187 54 8 Local transmission 0 Dominican Republic 1828 340 86 18 Local transmission 0 Argentina 1554 103 46 2 Local transmission 0 Colombia 1485 79 35 3 Local transmission 0 Costa Rica 454 19 2 0 Local transmission 0 Uruguay 406 6 6 1 Local transmission 0 Cuba 350 30 9 1 Local transmission 0 Honduras 298 30 22 0 Local transmission 0 Bolivia (Plurinational State of) 183 26 11 1 Local transmission 0 Venezuela (Bolivarian Republic of) 159 15 3 0 Local transmission 0 Paraguay 113 9 5 2 Local transmission 0 Trinidad and Tobago 105 2 8 2 Local transmission 0 Guatemala 70 9 3 1 Local transmission 0 El Salvador 69 7 3 0 Local transmission 0 Jamaica 58 3 3 0 Local transmission 0 Barbados 56 5 1 1 Local transmission 0 Bahamas 29 1 5 1 Local transmission 0 Guyana 29 5 4 0 Local transmission 0 Haiti 24 3 1 1 Imported cases only 0 Antigua and Barbuda 15 8 0 0 Local transmission 0 Dominica 14 3 0 0 Local transmission 0 Saint Lucia 14 0 0 0 Local transmission 1 Grenada 12 0 0 0 Local transmission 2 Saint Kitts and Nevis 10 1 0 0 Imported cases only 0 Suriname 10 0 1 1 Local transmission 3 Belize 7 2 1 1 Local transmission 0 Saint Vincent and the Grenadines 7 4 0 0 Imported cases only 0 Nicaragua 6 1 1 0 Imported cases only 0 Territories** Puerto Rico 513 61 21 3 Local transmission 0 Martinique 149 4 4 1 Local transmission 0 Guadeloupe 135 1 7 0 Local transmission 0 French Guiana 68 2 0 0 Local transmission 0 Aruba 64 0 0 0 Local transmission 2 United States Virgin Islands 43 1 1 1 Local transmission 0 Cayman Islands 39 4 1 0 Local transmission 0 Bermuda 37 0 0 0 Local transmission 1 Sint Maarten 37 14 6 4 Imported cases only 0 Saint Martin 31 2 2 0 Under investigation 0 Cura çao 13 2 1 0 Imported cases only 0 Montserrat 6 0 0 0 Imported cases only 2 Saint Barthélemy 6 0 0 0 Under investigation 7 Turks and Caicos Islands 5 0 1 0 Local transmission 7 Anguilla 3 0 0 0 Local transmission 3 British Virgin Islands 3 0 0 0 Imported cases only 6 Bonaire, Sint Eustatius and Saba 2 0 0 0 Imported cases only 3 Falkland Islands (Malvinas) 2 0 0 0 Under investigation 1 African Region South Africa 1686 31 12 1 Local transmission 0 Algeria 1423 172 173 43 Local transmission 0 Cameroon 555 0 9 0 Local transmission 2 Burkina Faso 345 43 17 2 Local transmission 0 Côte d’Ivoire 323 78 3 1 Local transmission 0 Mauritius 244 17 7 0 Local transmission 0 Nigeria 232 24 5 1 Local transmission 0 Senegal 226 4 2 0 Local transmission 0 Ghana 214 9 5 0 Local transmission 0 Niger 184 40 10 2 Local transmission 0 Democratic Republic of the Congo 161 0 18 0 Local transmission 1 Kenya 142 0 4 0 Local transmission 1 Guinea 111 0 0 0 Local transmission 2 Rwanda 104 2 0 0 Local transmission 0 Madagascar 77 0 0 0 Local transmission 1 Uganda 52 4 0 0 Local transmission 0 Congo 45 0 5 0 Local transmission 2 Togo 44 0 3 0 Local transmission 1 Ethiopia 43 0 1 0 Local transmission 1 Mali 39 0 4 0 Local transmission 2 Zambia 39 0 1 0 Local transmission 4 Guinea-Bissau 33 15 0 0 Imported cases only 0 Eritrea 29 0 0 0 Local transmission 1 United Republic of Tanzania 24 2 1 0 Local transmission 0 Benin 23 1 1 1 Local transmission 0 Gabon 21 0 1 0 Imported cases only 3 Angola 16 2 2 0 Imported cases only 0 Equatorial Guinea 16 0 0 0 Local transmission 2 Namibia 16 0 0 0 Local transmission 1 Liberia 14 1 3 0 Local transmission 0 Seychelles 11 1 0 0 Imported cases only 0 Mozambique 10 0 0 0 Local transmission 5 Central African Republic 9 0 0 0 Local transmission 2 Chad 9 0 0 0 Imported cases only 1 Eswatini 9 0 0 0 Imported cases only 10 Zimbabwe 9 0 1 0 Local transmission 3 Cabo Verde 7 2 1 0 Local transmission 0 Botswana 6 2 1 0 Imported cases only 0 Mauritania 6 0 1 0 Imported cases only 3 Sierra Leone 6 0 0 0 Imported cases only 1 Gambia 4 0 1 0 Imported cases only 4 Malawi 4 0 0 0 Local transmission 1 São Tomé and Príncipe 4 4 0 0 Under investigation 0 Burundi 3 0 0 0 Local transmission 3 South Sudan 1 0 0 0 Under investigation 1 Territories** Réunion 349 5 0 0 Local transmission 0 Mayotte 164 17 2 0 Local transmission 0 International conveyance (Diamond Princess) 712 0 11 0 Local transmission 22"
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
  day: "2020-04-07",
  additionalInfo: {
    countries: 206,
  },
  areas
}

fs.writeFile('./src/data/dayOf07042020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
