import places from './places.mjs';

const src = 'Republic of Korea 4812 600 28 6 Local transmission 0 Japan 268 14 6 0 Local transmission 0 Singapore 108 2 0 0 Local transmission 0 Australia 33 6 1 0 Local transmission 0 Malaysia 29 5 0 0 Local transmission 0 Viet Nam 16 0 0 0 Local transmission 19 Philippines 3 0 1 0 Imported cases only 28 New Zealand 2 1 0 0 Imported cases only 0 Cambodia 1 0 0 0 Imported cases only 36 European Region Italy 2036 347 52 17 Local transmission 0 France 191 91 3 1 Local transmission 0 Germany 157 28 0 0 Local transmission 0 Spain 114 69 0 0 Local transmission 0 the United Kingdom 39 3 0 0 Local transmission 0 Switzerland 30 6 0 0 Local transmission 0 Norway 25 6 0 0 Local transmission 0 Austria 18 8 0 0 Imported cases only 0 Netherlands 18 5 0 0 Local transmission 0 Sweden 15 1 0 0 Local transmission 0 Israel 10 3 0 0 Local transmission 0 Croatia 9 2 0 0 Local transmission 0 Iceland 9 7 0 0 Imported cases only 0 San Marino 8 7 0 0 Local transmission 0 Belgium 8 7 0 0 Imported cases only 0 Finland 7 1 0 0 Local transmission 0 Greece 7 0 0 0 Local transmission 1 Denmark 5 1 0 0 Local transmission 0 Azerbaijan 3 0 0 0 Imported cases only 2 Czechia 3 0 0 0 Imported cases only 1 Georgia 3 0 0 0 Imported cases only 2 Romania 3 0 0 0 Imported cases only 3 Russian Federation 3 1 0 0 Imported cases only 0 Portugal 2 2 0 0 Imported cases only 0 Andorra 1 1 0 0 Imported cases only 0 Armenia 1 0 0 0 Imported cases only 1 Belarus 1 0 0 0 Imported cases only 4 Estonia 1 0 0 0 Imported cases only 5 Ireland 1 0 0 0 Imported cases only 2 Latvia 1 1 0 0 Imported cases only 0 Lithuania 1 0 0 0 Imported cases only 4 Luxembourg 1 0 0 0 Imported cases only 1 Monaco 1 0 0 0 Under investigation 2 North Macedonia 1 0 0 0 Imported cases only 6 South-East Asia Region Thailand 43 1 1 0 Local transmission 0 India 5 2 0 0 Imported cases only 0 Indonesia 2 0 0 0 Local transmission 0 Nepal 1 0 0 0 Imported cases only 39 Sri Lanka 1 0 0 0 Imported cases only 36 Eastern Mediterranean Region Iran (Islamic Republic of) 1501 523 66 12 Local transmission 0 Kuwait 56 0 0 0 Imported cases only 1 Bahrain 49 2 0 0 Imported cases only 0 Iraq 26 7 0 0 Imported cases only 0 United Arab Emirates 21 0 0 0 Local transmission 1 Lebanon 13 3 0 0 Local transmission 0 Qatar 7 4 0 0 Imported cases only 0 Oman 6 0 0 0 Imported cases only 4 Pakistan 5 1 0 0 Imported cases only 0 Egypt 2 0 0 0 Imported cases only 0 Afghanistan 1 0 0 0 Imported cases only 8 Jordan 1 1 0 0 Imported cases only 0 Morocco 1 1 0 0 Imported cases only 0 Saudi Arabia 1 1 0 0 Imported cases only 0 Tunisia 1 1 0 0 Imported cases only 0 Region of the Americas the United States 64 2 2 2 Local transmission 0 Canada 27 8 0 0 Local transmission 0 Ecuador 6 5 0 0 Local transmission 0 Mexico 5 0 0 0 Imported cases only 1 Brazil 2 0 0 0 Imported cases only 2 Dominican Republic 1 0 0 0 Imported cases only 1 African Region Algeria 5 4 0 0 Local transmission 0 Nigeria 1 0 0 0 Imported cases only 4 Senegal 1 1 0 0 Imported cases only 0 International conveyance (Diamond Princess) 706 0 6 0 Local transmission 1'
const formatted = src.replace('International conveyance (Diamond Princess)', 'Diamond Princess')
    .replace('Iran (Islamic Republic of) ', 'Iran ')
    .replace(/†/g, '')
    .replace(/\*/g, '')
    .replace(/‡/g, '')
    .replace(/§/g, '')
    .replace(/Imported cases only /g, '')
    .replace(/Local transmission /g, '')
    .replace(/Under investigation /g, '')
    .replace(/Western Pacific Region /g, '')
    .replace(/African Region /g, '')
    .replace(/South-East Asia Region/g, '')
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
