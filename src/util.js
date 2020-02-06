const locale = navigator.language.toLowerCase();

const createTranslator = () =>  {
  const translateKeys = Object.keys(translateMap);
  const key = translateKeys.find((t) => {
    const result = locale.includes(t);
    debugger;
    return  result
  });
  const defaultMap = translateMap.en;
  const map = translateMap[key]||translateMap.en;
  return (key) => {
    return map[key] || defaultMap[key] || key
  }
}
const en = {
  aggregation: 'Aggregation',
  total_confirmed: 'Total confirmed',
  area: 'area',
  total: 'total',
  situation: 'Situation',
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
}

const ja = {
  aggregation: '集計方法',
  area: '地域',
  total: '総数',
  situation: '対象',
  total_confirmed: '感染者の総数',
  global: '全ての国',
  confirmed: '感染者',
  new: '前日から増加数',
  all_country: '全ての国',
  china: '中国本土',
  deaths_china: '死亡者 (中国本土)',
  severe_china: '治癒 (中国本土)',
  deaths_outside: '死者 (中国外)',
  countries: '国数',
  outside_china: '中国外',
  cases: '事例数',
  date: '日付',
  summary: '概要',
}

const translateMap = {
  en,
  ja,
}

export const translate = createTranslator();