export const translate = (org) => {
  const prefix = '_china'
  if(org.includes(prefix)) {
    return org.replace(prefix, ' (China)')
  }
  if(org.includes('_')) {
    return org.replace('_', ' ')
  }
  return org
}

