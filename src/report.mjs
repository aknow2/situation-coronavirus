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
  const src = "China 83369 64 3349 4 Clusters of cases 0 Republic of Korea 10480 30 211 3 Clusters of cases 0 Australia 6238 86 54 2 Clusters of cases 0 Japan 6005 658 94 6 Clusters of cases 0 Malaysia 4346 118 70 3 Clusters of cases 0 Philippines 4195 119 221 18 Clusters of cases 0 Singapore 2108 198 7 0 Clusters of cases 0 New Zealand 1035 20 4 3 Sporadic cases 0 Viet Nam 257 2 0 0 Clusters of cases 0 Brunei Darussalam 136 1 1 0 Sporadic cases 0 Cambodia 120 2 0 0 Sporadic cases 0 Fiji 16 1 0 0 Sporadic cases 0 Lao People's Democratic Republic 16 1 0 0 Sporadic cases 0 Mongolia 16 0 0 0 Sporadic cases 2 Papua New Guinea 2 0 0 0 Sporadic cases 2 Territories** Guam 130 2 4 0 Clusters of cases 0 French Polynesia 51 0 0 0 Sporadic cases 2 New Caledonia 18 0 0 0 Sporadic cases 8 Northern Mariana Islands (Commonwealth of the) 11 0 2 0 Pending 2 European Region Spain 157022 4576 15843 605 Pending 0 Italy 147577 3951 18851 570 Pending 0 Germany 117658 4133 2544 171 Pending 0 France 89683 4332 13179 987 Pending 0 The United Kingdom 70276 5195 8958 980 Pending 0 Turkey 47029 4747 1006 98 Community transmission 0 Belgium 26667 1684 3019 496 Pending 0 Switzerland 24228 733 805 49 Community transmission 0 Netherlands 23097 1335 2511 115 Pending 0 Portugal 15472 1516 435 26 Pending 0 Russian Federation 13584 1667 106 12 Clusters of cases 0 Austria 13560 312 319 24 Pending 0 Israel 10095 340 92 13 Pending 0 Sweden 9685 544 870 77 Pending 0 Ireland 8089 696 287 24 Pending 0 Norway 6244 84 92 4 Pending 0 Poland 5955 380 181 7 Pending 0 Denmark 5819 184 247 10 Pending 0 Czechia 5732 163 119 7 Pending 0 Romania 5467 265 257 28 Pending 0 Luxembourg 3223 108 54 2 Pending 0 Serbia 3105 238 71 6 Pending 0 Finland 2769 164 48 6 Pending 0 Ukraine 2511 308 73 4 Clusters of cases 0 Greece 2011 56 90 4 Pending 0 Belarus 1981 915 19 6 Clusters of cases 0 Iceland 1675 27 7 1 Pending 0 Croatia 1495 88 21 1 Pending 0 Republic of Moldova 1438 149 29 0 Pending 0 Hungary 1310 120 85 8 Pending 0 Estonia 1258 51 24 0 Pending 0 Slovenia 1160 36 45 2 Pending 0 Lithuania 999 44 17 2 Pending 0 Azerbaijan 991 65 10 1 Clusters of cases 0 Armenia 937 0 11 0 Clusters of cases 1 Bosnia and Herzegovina 901 26 37 1 Community transmission 0 Kazakhstan 859 57 10 1 Pending 0 Slovakia 715 14 2 0 Pending 0 North Macedonia 711 48 32 2 Clusters of cases 0 Bulgaria 635 11 25 1 Pending 0 Uzbekistan 624 0 3 0 Clusters of cases 1 Latvia 612 23 2 0 Pending 0 Andorra 602 13 26 0 Community transmission 0 Cyprus 595 31 15 0 Pending 0 Albania 416 0 23 0 Clusters of cases 1 Malta 350 13 2 0 Pending 0 San Marino 344 0 34 0 Community transmission 1 Kyrgyzstan 339 41 5 0 Pending 0 Montenegro 255 3 2 0 Clusters of cases 0 Georgia 233 3 3 0 Clusters of cases 0 Liechtenstein 80 1 1 0 Pending 0 Monaco 54 0 0 0 Sporadic cases 2 Holy See 8 0 0 0 Sporadic cases 2 Territories** Kosovo[1] 250 23 7 0 Community transmission 0 Guernsey 191 10 5 0 Pending 0 Isle of Man 190 25 1 0 Pending 0 Faroe Islands 184 0 0 0 Pending 3 Jersey 183 13 4 1 Pending 0 Gibraltar 113 0 1 0 Pending 3 Greenland 11 0 0 0 Pending 5 South-East Asia Region India 7447 1035 239 40 Clusters of cases 0 Indonesia 3512 0 306 0 Clusters of cases 1 Thailand 2518 45 35 2 Clusters of cases 0 Bangladesh 424 94 27 6 Clusters of cases 0 Sri Lanka 197 7 7 0 Clusters of cases 0 Myanmar 28 1 3 0 Clusters of cases 0 Maldives 19 0 0 0 Clusters of cases 8 Nepal 9 0 0 0 Sporadic cases 6 Bhutan 5 0 0 0 Sporadic cases 8 Timor-Leste 2 1 0 0 Sporadic cases 0 Eastern Mediterranean Region Iran (Islamic Republic of) 68192 1972 4232 122 Community transmission 0 Pakistan 4788 187 71 5 Clusters of cases 0 Saudi Arabia 3651 364 47 3 Clusters of cases 0 United Arab Emirates 3360 370 16 2 Pending 0 Qatar 2512 136 6 0 Pending 0 Egypt 1794 95 135 17 Clusters of cases 0 Morocco 1448 71 107 10 Clusters of cases 0 Iraq 1280 48 71 2 Clusters of cases 0 Bahrain 998 111 6 1 Clusters of cases 0 Kuwait 993 83 1 0 Clusters of cases 0 Tunisia 671 28 25 0 Community transmission 0 Lebanon 609 27 20 1 Clusters of cases 0 Oman 546 62 3 0 Clusters of cases 0 Afghanistan 521 0 15 0 Clusters of cases 1 Jordan 372 0 7 0 Clusters of cases 1 Djibouti 150 10 1 0 Clusters of cases 0 Libya 24 0 1 0 Clusters of cases 1 Syrian Arab Republic 19 0 2 0 Community transmission 5 Sudan 17 2 2 0 Sporadic cases 0 Somalia 12 0 1 0 Sporadic cases 2 Yemen 1 1 0 0 Pending 0 Territories** occupied Palestinian territory 268 2 2 1 Clusters of cases 0 Region of the Americas United States of America 461275 35386 16596 1931 Community transmission 0 Canada 21226 1467 531 70 Community transmission 0 Brazil 17857 1930 941 141 Community transmission 0 Ecuador 7161 2196 297 25 Community transmission 0 Chile 6501 529 65 8 Community transmission 0 Peru 5256 914 138 17 Community transmission 0 Mexico 3441 260 194 20 Community transmission 0 Panama 2752 224 66 3 Community transmission 0 Dominican Republic 2349 0 118 0 Community transmission 1 Colombia 2223 169 69 14 Community transmission 0 Argentina 1929 134 79 12 Community transmission 0 Cuba 564 49 15 0 Clusters of cases 0 Costa Rica 539 37 3 0 Clusters of cases 0 Uruguay 473 17 7 0 Clusters of cases 0 Honduras 382 39 23 0 Clusters of cases 0 Bolivia (Plurinational State of) 268 4 19 1 Clusters of cases 0 Venezuela (Bolivarian Republic of) 171 5 9 2 Clusters of cases 0 Paraguay 129 5 6 1 Clusters of cases 0 Guatemala 126 31 3 0 Clusters of cases 0 El Salvador 117 14 6 1 Clusters of cases 0 Trinidad and Tobago 109 0 8 0 Clusters of cases 1 Barbados 66 3 4 1 Clusters of cases 0 Jamaica 63 0 4 0 Clusters of cases 2 Bahamas 41 1 8 1 Clusters of cases 0 Guyana 37 0 6 0 Clusters of cases 1 Haiti 30 0 2 0 Clusters of cases 1 Antigua and Barbuda 19 0 2 0 Clusters of cases 2 Dominica 16 1 0 0 Clusters of cases 0 Saint Lucia 14 0 0 0 Sporadic cases 5 Grenada 12 0 0 0 Clusters of cases 6 Saint Vincent and the Grenadines 12 4 0 0 Sporadic cases 0 Saint Kitts and Nevis 11 0 0 0 Sporadic cases 2 Belize 10 1 1 0 Sporadic cases 0 Suriname 10 0 1 0 Sporadic cases 7 Nicaragua 7 1 1 0 Pending 0 Territories** Puerto Rico 725 42 39 6 Clusters of cases 0 Martinique 154 0 6 0 Clusters of cases 1 Guadeloupe 143 2 8 0 Clusters of cases 0 Aruba 86 4 0 0 Clusters of cases 0 French Guiana 84 1 0 0 Clusters of cases 0 Sint Maarten 50 7 9 1 Sporadic cases 0 United States Virgin Islands 50 4 1 0 Clusters of cases 0 Bermuda 48 9 4 1 Clusters of cases 0 Cayman Islands 45 0 1 0 Clusters of cases 2 Saint Martin 32 0 2 0 Sporadic cases 1 Curaçao 14 0 1 0 Sporadic cases 2 Montserrat 9 1 0 0 Sporadic cases 0 Turks and Caicos Islands 8 0 1 0 Sporadic cases 3 Saint Barthélemy 6 0 0 0 Sporadic cases 11 Falkland Islands (Malvinas) 5 0 0 0 Sporadic cases 2 Anguilla 3 0 0 0 Sporadic cases 7 British Virgin Islands 3 0 0 0 Sporadic cases 10 Bonaire, Sint Eustatius and Saba 2 0 0 0 Sporadic cases 7 Saint Pierre and Miquelon 1 0 0 0 Sporadic cases 3 African Region South Africa 2003 69 24 6 Community transmission 0 Algeria 1761 95 256 21 Community transmission 0 Cameroon 803 73 10 0 Clusters of cases 0 Côte d’Ivoire 480 96 3 0 Clusters of cases 0 Burkina Faso 443 29 19 0 Clusters of cases 0 Niger 438 28 11 0 Clusters of cases 0 Ghana 378 65 6 0 Clusters of cases 0 Mauritius 318 4 9 2 Clusters of cases 0 Nigeria 305 17 7 0 Clusters of cases 0 Senegal 265 15 2 0 Clusters of cases 0 Democratic Republic of the Congo 215 0 20 0 Clusters of cases 1 Guinea 194 0 0 0 Clusters of cases 1 Kenya 189 5 7 0 Clusters of cases 0 Rwanda 118 5 0 0 Sporadic cases 0 Madagascar 95 0 0 0 Clusters of cases 1 Mali 74 15 7 0 Sporadic cases 0 Togo 73 0 3 0 Sporadic cases 1 Ethiopia 65 9 2 0 Sporadic cases 0 Congo 60 0 5 0 Clusters of cases 2 Uganda 53 0 0 0 Sporadic cases 2 Gabon 44 0 1 0 Sporadic cases 1 Zambia 40 1 2 1 Sporadic cases 0 Liberia 37 6 5 1 Sporadic cases 0 Guinea -Bissau 35 0 0 0 Sporadic cases 1 Eritrea 33 0 0 0 Sporadic cases 2 United Republic of Tanzania 32 7 3 2 Sporadic cases 0 Benin 30 0 1 0 Sporadic cases 1 Mozambique 20 3 0 0 Sporadic cases 0 Angola 19 0 2 0 Sporadic cases 2 Equatorial Guinea 18 0 0 0 Sporadic cases 1 Namibia 16 0 0 0 Sporadic cases 5 Botswana 13 0 1 0 Sporadic cases 1 Eswatini 12 0 0 0 Sporadic cases 2 Central African Republic 11 1 0 0 Sporadic cases 0 Chad 11 0 0 0 Sporadic cases 1 Seychelles 11 0 0 0 Sporadic cases 4 Zimbabwe 11 0 3 0 Sporadic cases 3 Malawi 9 1 1 0 Sporadic cases 0 Cabo Verde 7 0 1 0 Sporadic cases 4 Mauritania 7 1 1 0 Sporadic cases 0 Sierra Leone 7 0 0 0 Sporadic cases 2 Gambia 4 0 1 0 Sporadic cases 8 São Tomé and Príncipe 4 0 0 0 Pending 4 Burundi 3 0 0 0 Sporadic cases 7 South Sudan 3 0 0 0 Pending 1 Territories** Réunion 382 6 0 0 Clusters of cases 0 Mayotte 191 0 2 0 Clusters of cases 1 International conveyance (Diamond Princess) 712 0 11 0 Pending 26"
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
  day: "2020-04-11",
  additionalInfo: {
    countries: 208,
  },
  areas
}

fs.writeFile('./src/data/dayOf11042020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
