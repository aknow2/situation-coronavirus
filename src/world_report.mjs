import places from './places.mjs';

const src = 'Republic of Korea 5766 438 35 3 Local transmission 0 Japan 317 33 6 0 Local transmission 0 Singapore 110 0 0 0 Local transmission 1 Australia 66 23 3 2 Local transmission 0 Malaysia 50 0 0 0 Local transmission 1 Viet Nam 16 0 0 0 Local transmission 21 Philippines 3 0 1 0 Imported cases only 29 New Zealand 2 0 0 0 Imported cases only 2 Cambodia 1 0 0 0 Imported cases only 37 European Region Italy 3089 587 107 27 Local transmission 0 France  282 73 4 0 Local transmission 0 Germany 262 66 0 0 Local transmission 0 Spain 198 47 1 1 Local transmission 0 the United Kingdom  89 38 0 0 Local transmission 0 Switzerland  56 20 0 0 Local transmission 0 Norway 56 23 0 0 Local transmission 0 Netherlands 38 10 0 0 Local transmission 0 Austria 37 13 0 0 Imported cases only 0 Sweden 35 11 0 0 Local transmission 0 Iceland 26 10 0 0 Imported cases only 0 Belgium 23 15 0 0 Local transmission 0 San Marino 16 8 0 0 Local transmission 0 Israel 15 3 0 0 Local transmission 0 Denmark 10 2 0 0 Local transmission 0 Croatia 9 0 0 0 Local transmission 1 Greece 9 2 0 0 Local transmission 0 Finland 7 0 0 0 Local transmission 2 Portugal 7 5 0 0 Local transmission 0 Belarus 6 5 0 0 Local transmission 0 Czechia 5 0 0 0 Imported cases only 1 Romania 4 0 0 0 Local transmission 1 Azerbaijan 3 0 0 0 Imported cases only 4 Georgia 3 0 0 0 Imported cases only 4 Russian Federation 3 0 0 0 Imported cases only 2 Bosnia and Herzegovina 2 2 0 0 Local transmission 0 Estonia 2 0 0 0 Imported cases only 1 Hungary 2 2 0 0 Imported cases only 0 Ireland 2 0 0 0 Imported cases only 1 Andorra 1 0 0 0 Imported cases only 2 Armenia 1 0 0 0 Imported cases only 3 Latvia 1 0 0 0 Imported cases only 2 Lithuania 1 0 0 0 Imported cases only 6 Luxembourg 1 0 0 0 Imported cases only 3 Monaco 1 0 0 0 Under investigation 4 North Macedonia 1 0 0 0 Imported cases only 7 Poland 1 0 0 0 Imported cases only 1 Slovenia 1 1 0 0 Imported cases only 0 Ukraine 1 0 0 0 Imported cases only 1 Liechtenstein 1 0 0 0 Imported cases only 1 Territories** Gibraltar 1 0 0 0 Imported cases only 1 South -East Asia Region Thailand 47 4 1 0 Local transmission 0 India 29 23 0 0 Local transmission 0 Indonesia 2 0 0 0 Local transmission 3 Nepal 1 0 0 0 Imported cases only 41 Sri Lanka 1 0 0 0 Imported cases only 38 Eastern Mediterranean Region Iran (Islamic Republic of) 2922 586 92 15 Local transmission 0 Kuwait 58 2 0 0 Imported cases only 0 Bahrain 49 0 0 0 Imported cases only 2 Iraq 36 5 2 2 Imported cases only 0 United Arab Emirates 27 0 0 0 Local transmission 1 Oman 15 3 0 0 Imported cases only 0 Lebanon 13 0 0 0 Local transmissio n 2 Qatar 8 0 0 0 Imported cases only 1 Pakistan 5 0 0 0 Imported cases only 2 Egypt 2 0 0 0 Imported cases only 3 Morocco 2 1 0 0 Imported cases only 0 Saudi Arabia 2 1 0 0 Imported cases only 0 Afghanistan 1 0 0 0 Imported cases only 9 Jordan 1 0 0 0 Imported cases only 2 Tunisia 1 0 0 0 Imported cases only 2 Territories** occupied Palestinian territory 4 4 0 0 Imported cases only 0 Region of the Americas the United States 129 21 9 3 Local transmission 0 Canada 30 0 0 0 Local transmission 1 Ecuador 7 0 0 0 Local transmission 1 Mexico 5 0 0 0 Imported cases only 3 Brazil 3 1 0 0 Imported cases only 0 Argentina 1 0 0 0 Imported cases only 1 Chile 1 0 0 0 Imported cases only 1 Dominican Republic 1 0 0 0 Imported cases only 3 Territories** Saint Martin 2 0 0 0 Under investigation 2 Saint Barthélemy 1 0 0 0 Under investigation 2 African Region Algeria 12 7 0 0 Local transmission 0 Senegal 4 3 0 0 Imported cases only 0 Nigeria 1 0 0 0 Imported cases only 6 International conveyance (Diamond Princess) 706 0 6 0 Local transmission 3'
const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
    .replace('Iran (Islamic Republic of) ', 'Iran ')
    .replace(/†/g, '')
    .replace(/\*/g, '')
    .replace(/¶/g, '')
    .replace(/‡/g, '')
    .replace(/§/g, '')
    .replace(/Imported cases only /g, '')
    .replace(/Territories /g, '')
    .replace(/territories /g, '')
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
console.log(result.list)
