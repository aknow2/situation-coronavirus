export const translate = (org) => {
  const prefix_china = '_china'
  const prefix_outsidechina = '_outside'
  if(org.includes(prefix_china)) {
    return org.replace(prefix_china, ' (China)')
  }
  if(org.includes(prefix_outsidechina)) {
    return org.replace(prefix_outsidechina, ' (Outside China)')
  }
  if(org.includes('_')) {
    return org.replace('_', ' ')
  }
  return org
}

