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
  const src = "China 82875 73 3335 4 Local transmission 0 Republic of Korea 10156 94 177 3 Local transmission 0 Australia 5454 230 28 5 Local transmission 0 Malaysia 3333 217 53 3 Local transmission 0 Philippines 3018 385 136 29 Local transmission 0 Japan 2920 303 69 4 Local transmission 0 Singapore 1114 65 5 1 Local transmission 0 New Zealand 824 50 1 0 Local transmission 0 Viet Nam 239 6 0 0 Local transmission 0 Brunei Darussalam 134 1 1 0 Local transmission 0 Cambodia 114 4 0 0 Local transmission 0 Mongolia 14 0 0 0 Imported cases only 2 Lao People’s Democratic Republic 10 0 0 0 Local transmission 2 Fiji 7 0 0 0 Local transmission 1 Papua New Guinea 1 0 0 0 Imported cases only 14 Territories** Guam 84 2 3 0 Local transmission 0 French Polynesia 39 2 0 0 Local transmission 0 New Caledonia 18 0 0 0 Local transmission 1 Northern Mariana Islands (Commonwealth of the) 8 0 1 0 Local transmission 1 European Region Italy 119827 4585 14681 764 Local transmission 0 Spain 117710 7472 10935 932 Local transmission 0 Germany 85778 6082 1158 141 Local transmission 0 France 63536 5209 6493 2003 Local transmission 0 The United Kingdom 38172 4450 3605 684 Local transmission 0 Turkey 20921 2786 425 69 Local transmission 0 Switzerland 19706 862 607 71 Local transmission 0 Belgium 16770 1422 1143 132 Local transmission 0 Netherlands 15723 1026 1487 148 Local transmission 0 Austria 11525 396 168 10 Local transmission 0 Portugal 9886 852 246 37 Local transmission 0 Israel 7030 819 36 7 Local transmission 0 Sweden 6078 612 333 51 Local transmission 0 Norway 5208 273 44 2 Local transmission 0 Ireland 4273 424 120 22 Local transmission 0 Czechia 4190 332 53 9 Local transmission 0 Russian Federation 4149 601 34 4 Local transmission 0 Denmark 3757 371 139 16 Local transmission 0 Poland 3383 437 71 14 Local transmission 0 Romania 3183 445 133 39 Local transmission 0 Luxembourg 2612 125 31 1 Local transmission 0 Finland 1615 97 20 1 Local transmission 0 Greece 1613 99 59 6 Local transmission 0 Serbia 1476 305 39 26 Local transmission 0 Iceland 1364 45 4 0 Local transmission 0 Ukraine 1096 109 28 5 Local transmission 0 Croatia 1079 68 8 1 Local transmission 0 Estonia 961 103 12 1 Local transmission 0 Slovenia 934 37 20 4 Local transmission 0 Lithuania 771 122 9 0 Local transmission 0 Armenia 736 96 7 3 Local transmission 0 Hungary 678 93 32 11 Local transmission 0 Republic of Moldova 591 0 9 1 Local transmission 1 Bosnia and Herzegovina 586 65 18 2 Local transmission 0 Latvia 493 35 1 1 Local transmission 0 Bulgaria 485 28 14 4 Local transmission 0 Kazakhstan 460 25 3 0 Local transmission 0 Slovakia 450 24 0 0 Local transmission 0 Azerbaijan 443 43 5 0 Local transmission 0 Andorra 442 13 16 1 Local transmission 0 North Macedonia 430 46 12 1 Local transmission 0 Cyprus 396 40 11 2 Local transmission 0 Albania 333 56 17 1 Local transmission 0 Belarus 254 0 4 0 Local transmission 1 San Marino 252 7 32 2 Local transmission 0 Uzbekistan 241 20 2 0 Local transmission 0 Malta 202 7 0 0 Local transmission 0 Montenegro 160 20 2 0 Local transmission 0 Georgia 157 9 0 0 Local transmission 0 Kyrgyzstan 144 14 1 0 Local transmission 0 Liechtenstein 76 1 0 0 Under investigation 0 Monaco 37 0 0 0 Local transmission 3 Holy See 7 0 0 0 Under investigation 1 Territories** Faroe Islands 179 2 0 0 Local transmission 0 Kosovo[1] 132 6 1 0 Local transmission 0 Jersey 118 37 2 0 Local transmission 0 Guernsey 114 23 2 1 Local transmission 0 Isle of Man 114 43 1 0 Local transmission 0 Gibraltar 95 14 1 1 Local transmission 0 Greenland 10 0 0 0 Under investigation 6 South -East Asia Region India 2301 336 56 6 Local transmission 0 Indonesia 1986 196 181 11 Local transmission 0 Thailand 1978 103 19 4 Local transmission 0 Sri Lanka 151 3 4 1 Local transmission 0 Bangladesh 61 5 6 0 Local transmission 0 Myanmar 20 4 1 0 Local transmission 0 Maldives 19 0 0 0 Local transmission 1 Nepal 6 0 0 0 Imported cases only 1 Bhutan 5 0 0 0 Imported cases only 1 Timor-Leste 1 0 0 0 Imported cases only 14 Eastern Mediterranean Region Iran (Islamic Republic of) 53183 2715 3294 134 Local transmission 0 Pakistan 2450 0 35 0 Local transmission 1 Saudi Arabia 2039 154 25 4 Local transmission 0 United Arab Emirates 1264 240 9 1 Local transmission 0 Qatar 1075 126 3 0 Local transmission 0 Egypt 985 120 66 8 Local transmission 0 Morocco 844 109 50 3 Local transmission 0 Iraq 820 48 54 0 Local transmission 0 Bahrain 673 30 4 0 Local transmission 0 Lebanon 508 0 17 0 Local transmission 1 Tunisia 495 40 18 4 Local transmission 0 Kuwait 417 0 0 0 Local transmission 1 Jordan 310 11 5 0 Local transmission 0 Oman 277 25 1 0 Local transmission 0 Afghanistan 270 1 5 0 Local transmission 0 Djibouti 50 9 0 0 Local transmission 0 Libya 17 7 1 0 Local transmission 0 Syrian Arab Republic 16 0 2 0 Imported cases only 1 Sudan 10 2 2 0 Local transmission 0 Somalia 7 2 0 0 Imported cases only 0 Territories** occupied Palestinian territory 193 28 1 0 Local transmission 0 Region of the Americas United States of America 241703 28103 5854 1061 Local transmission 0 Canada 11732 1618 152 25 Local transmission 0 Brazil 7910 1074 299 58 Local transmission 0 Chile 3737 333 22 4 Local transmission 0 Ecuador 3163 0 120 0 Local transmission 1 Mexico 1510 132 50 13 Local transmission 0 Dominican Republic 1488 108 68 8 Local transmission 0 Panama 1475 158 37 5 Local transmission 0 Peru 1414 91 51 10 Local transmission 0 Argentina 1265 132 37 6 Local transmission 0 Colombia 1161 96 19 2 Local transmission 0 Costa Rica 396 21 2 0 Local transmission 0 Uruguay 369 19 4 0 Local transmission 0 Cuba 269 36 6 0 Local transmission 0 Honduras 222 3 15 1 Local transmission 0 Venezuela (Bolivarian Republic of) 144 0 3 0 Local transmission 1 Bolivia (Plurinational State of) 132 9 9 1 Local transmission 0 Trinidad and Tobago 97 7 6 1 Local transmission 0 Paraguay 92 15 3 0 Local transmission 0 Guatemala 50 3 1 0 Local transmission 0 Jamaica 47 3 3 0 Local transmission 0 El Salvador 46 5 2 0 Local transmission 0 Barbados 45 0 0 0 Local transmission 1 Bahamas 24 3 3 2 Local transmission 0 Guyana 19 0 4 0 Local transmission 2 Haiti 18 2 0 0 Imported cases only 0 Saint Lucia 13 0 0 0 Local transmission 2 Dominica 11 0 0 0 Local transmission 8 Grenada 10 0 0 0 Local transmission 1 Suriname 10 2 0 0 Local transmission 0 Saint Kitts and Nevis 8 0 0 0 Imported cases only 3 Antigua and Barbuda 7 0 0 0 Imported cases only 7 Nicaragua 5 0 1 0 Imported cases only 2 Belize 3 0 0 0 Local transmission 4 Saint Vincent and the Grenadines 3 1 0 0 Imported cases only 0 Territories** Puerto Rico 378 62 15 3 Local transmission 0 Martinique 138 7 3 0 Local transmission 0 Guadeloupe 130 2 7 1 Local transmission 0 Aruba 62 2 0 0 Local transmission 0 French Guiana 57 2 0 0 Local transmission 0 United States Virgin Islands 37 4 0 0 Local transmission 0 Bermuda 35 3 0 0 Local transmission 0 Cayman Islands 28 6 1 0 Local transmission 0 Sint Maarten 23 5 2 1 Imported cases only 0 Saint Martin 22 0 2 0 Under investigation 1 Cura çao 11 0 1 0 Imported cases only 4 Saint Barthélemy 6 0 0 0 Under investigation 4 Montserrat 5 0 0 0 Imported cases only 7 Turks and Caicos Islands 5 0 0 0 Local transmission 4 Anguilla 3 1 0 0 Local transmission 0 British Virgin Islands 3 0 0 0 Imported cases only 3 Bonaire, Sint Eustatius and Saba 2 2 0 0 Imported cases only 0 African Region South Africa 1505 43 7 2 Local transmission 0 Algeria 986 0 83 0 Local transmission 1 Burkina Faso 261 0 15 1 Local transmission 3 Cameroon 246 0 7 0 Local transmission 1 Senegal 207 12 1 0 Local transmission 0 Ghana 204 0 5 0 Local transmission 1 Côte d’Ivoire 203 13 1 0 Local transmission 0 Nigeria 190 16 2 0 Local transmission 0 Mauritius 186 17 7 0 Local transmission 0 Democratic Republic of the Congo 134 0 13 0 Local transmission 1 Kenya 122 12 4 1 Local transmission 0 Niger 98 24 5 0 Local transmission 0 Rwanda 89 5 0 0 Local transmission 0 Madagascar 65 0 0 0 Local transmission 1 Guinea 52 0 0 0 Local transmission 1 Uganda 45 1 0 0 Local transmission 0 Congo 41 0 3 1 Local transmission 1 Togo 39 0 2 0 Local transmission 1 Zambia 39 0 1 0 Local transmission 1 Mali 36 8 3 0 Local transmission 0 Ethiopia 35 4 0 0 Local transmission 0 Gabon 21 3 1 0 Imported cases only 0 Eritrea 20 0 0 0 Local transmission 1 United Republic of Tanzania 20 0 1 0 Local transmission 2 Equatorial Guinea 15 0 0 0 Local transmission 1 Guinea-Bissau 15 6 0 0 Imported cases only 0 Benin 13 0 0 0 Imported cases only 2 Namibia 13 0 0 0 Local transmission 1 Angola 10 2 2 0 Imported cases only 0 Mozambique 10 0 0 0 Local transmission 2 Seychelles 10 0 0 0 Imported cases only 2 Eswatini 9 0 0 0 Imported cases only 7 Zimbabwe 9 1 1 0 Local transmission 0 Central African Republic 8 0 0 0 Imported cases only 2 Chad 7 0 0 0 Imported cases only 3 Liberia 7 1 0 0 Local transmission 0 Mauritania 6 1 1 1 Imported cases only 0 Cabo Verde 5 0 1 0 Imported cases only 7 Botswana 4 0 1 0 Imported cases only 1 Gambia 4 0 1 0 Imported cases only 1 Burundi 3 1 0 0 Local transmission 0 Malawi 3 0 0 0 Local transmission 1 Sierra Leone 2 0 0 0 Imported cases only 2 Territories** Réunion 321 13 0 0 Local transmission 0 Mayotte 128 0 2 0 Local transmission 1 International conveyance (Diamond Princess) 712 0 11 0 Local transmission 19"
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
  day: "2020-04-04",
  additionalInfo: {
    countries: 203,
  },
  areas
}

fs.writeFile('./src/data/dayOf04042020.json', JSON.stringify(result), function (err) {
  if (err) return console.log(err);
});
