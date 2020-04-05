const locale = navigator.language.toLowerCase();

const createTranslator = () =>  {
  const translateKeys = Object.keys(translateMap);
  const key = translateKeys.find((t) => {
    const result = locale.includes(t);
    return  result
  });
  const defaultMap = translateMap.en;
  const map = translateMap[key]||translateMap.en;
  return (key) => {
    return map[key] || defaultMap[key] || key
  }
}
const en = {
  case: 'cases',
  aggregation: 'Aggregation',
  total_confirmed: 'Total confirmed',
  suspected_china: 'Suspected (China)',
  deaths: 'Deaths',
  perMillion: 'Per 1million population',
  area: 'area',
  total: 'total',
  situation: 'Situation',
  numOfInfected: 'Confirmed',
  confirmed: 'Confirmed',
  all_country: 'all',
  china: 'China',
  deaths_china: 'Deaths (China)',
  severe_china: 'Severe (China)',
  deaths_outside: 'Deaths (Outside China)',
  countries: 'countries',
  outside_china: 'Outside China',
  cases: 'Cases',
  date: 'Date',
  summary: 'summary',
  global: 'Global',
  travelHistoryChina: 'Confirmed cases with travel history to China ',
  transmissionOutsideOfChina: 'Confirmed possible or confirmed transmission outside of China',
  underInvestigation: 'Confirmed cases with site of transmission under investigation',
  outsideReporting: 'Outside reporting country and outside China',
  map: 'Map',
  chart: 'Chart'
}

const ja = {
  case: '人',
  aggregation: '集計方法',
  area: '地域',
  total: '累計',
  situation: '対象',
  total_confirmed: '感染者の総数',
  global: '全ての国',
  numOfInfected: '感染者',
  confirmed: '感染者',
  new: '前日比',
  all_country: '全ての国',
  china: '中国',
  deaths: '死者',
  perMillion: '100万人あたり',
  deaths_china: '死者 (中国)',
  severe_china: '治癒 (中国)',
  deaths_outside: '死者 (中国外)',
  suspected_china: '疑しい (中国)',
  countries: '国数',
  outside_china: '中国外',
  cases: '事例数',
  date: '日付',
  summary: '概要',
  travelHistoryChina: '感染者(中国への渡航歴がある者)',
  transmissionOutsideOfChina: '感染者(中国への渡航歴が無い者)',
  underInvestigation: '感染者(監視下にいた者)',
  map: '地図',
  chart: 'グラフ'
}

const translateMap = {
  en,
  ja,
}

export const translate = createTranslator();

export const reduce = (areas, key) => {
  if (areas.every(v => v[key] === undefined || v[key] === null)) {
    return undefined;
  }
  return areas.filter(f => !!f[key]).reduce((p, c) => p + c[key], 0)
}
export const calcDelta = (base, old, key, filter) => {
  if (!base) {
    return 0;
  }
  if (old) {
    const filteredOldData = filterAreas(old, filter);
    return base - reduce(filteredOldData, key);
  }
  return undefined;
}

export const selectableCountryMap = {
  all_country: 'all_country',
};

export const selectableSituationMap = {
 total_confirmed: 'numOfInfected',
 // travelHistoryChina: 'travelHistoryChina',
 // transmissionOutsideOfChina: 'transmissionOutsideOfChina',
 // underInvestigation: 'underInvestigation',
 deaths: 'deaths',
}


export const selectableAxisMap = {
  total: 'total',
  perMillion: 'perMillion',
  new: 'new',
};

export const filterAreas = (areas, selectedCountry, notEqual = false) => {
  switch(selectedCountry) {
    case selectableCountryMap.china:
      return areas.filter(a => a.country === 'china');
    case selectableCountryMap.outside_china:
      return areas.filter(a => a.country !== 'china')
    case selectableCountryMap.all_country:
      return areas;
    default:
      if (notEqual) {
        return areas.filter(a => a.country !== selectedCountry);
      } else {
        return areas.filter(a => a.country === selectedCountry);
      }
  }
};
