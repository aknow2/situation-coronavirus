const places = [
      {
        id: 1,
        name: "Hubei",
        country: 'china',
        location: [30.642759, 114.314896],
      },
      {
        id:2,
        name: "Guangdong",
        country: 'china',
        location: [23.161937, 113.265126],
      },
      {
        id:3,
        name: "Beijing",
        country: 'china',
        location: [39.899670, 116.410834],
      },
      {
        id:4,
        name: "Shanghai",
        country: 'china',
        location: [31.060666, 121.545394],
      },
      {
        id:5,
        name: 'Japan',
        country: 'japan',
        location: [35.573073, 136.644255],
      },
      {
        id:6,
        name: 'Republic of Korea',
        country: 'korea',
        location: [37.545423, 126.994158]
      },
      {
        id:7,
        name: 'Thailand',
        country: 'thailand',
        location: [13.769713, 100.534521]
      }, 
      {
        id: 8,
        name: 'Chongqing',
        country: 'china',
        location: [29.543867, 106.628166]
      },
      {
        id: 9,
        name: 'Zhejiang',
        country: 'china',
        location: [29.498214, 119.950164]
      },
      {
        id: 10,
        name: 'Jiangxi',
        country: 'china',
        location: [27.720665, 115.334603]
      },
      {
        id: 11,
        name: 'Sichuan',
        country: 'china',
        location: [30.577055, 103.687341]
      },
      {
        id: 12,
        name: 'Tianjin',
        country: 'china',
        location: [39.326825, 117.358683]
      },
      {
        id: 13,
        name: 'Henan',
        country: 'china',
        location: [34.018220, 113.735292]
      },
      {
        id: 14,
        name: 'Hunan',
        country: 'china',
        location: [28.228362, 112.787731]
      },
      {
        id: 15,
        name: 'Shandong',
        country: 'china',
        location: [36.589681, 118.733284]
      },
      {
        id: 16,
        name: 'Yunnan',
        country: 'china',
        location: [24.886906, 102.608089]
      },
      {
        id: 17,
        name: 'Taiwan',
        country: 'china',
        location: [23.701278, 120.972302]
      },
      {
        id: 18,
        name: 'Hong Kong SAR',
        country: 'china',
        location: [22.330435, 114.148980]
      },
      {
        id: 19,
        name: 'Macao SAR',
        country: 'china',
        location: [22.193462, 113.547836]
      },
      {
        id: 20,
        name: 'the United States',
        country: 'usa',
        location: [38.936851, -101.878757]
      },
      {
        id: 21,
        name: 'China',
        country: 'china',
        location: [35.276518, 103.594722]
      },
      {
        id: 22,
        name: 'Viet Nam',
        country: 'vietnam',
        location: [21.143903, 105.790069]
      },
      {
        id: 23,
        name: 'Singapore',
        country: 'singapore',
        location: [1.316004, 103.922393]
      },
      {
        id: 24,
        name: 'Australia',
        country: 'australia',
        location: [-26.198094, 134.155892]
      },
      {
        id: 25,
        name: 'Nepal',
        country: 'nepal',
        location: [27.944116, 84.452023]
      },
      {
        id: 26,
        name: 'France',
        country: 'france',
        location: [48.941955, 2.527384]
      },
      {
        id: 27,
        name: 'Malaysia',
        country: 'malaysia',
        location: [3.250872, 101.982163]
      },
      {
        id: 28,
        name: 'Canada',
        country: 'canada',
        location: [58.657384, -110.102586]
      },
      {
        id: 29,
        name: 'China - Unspecified',
        country: 'china',
        location: [30.525324, 123.516329]
      },
      {
        id: 30,
        name: 'Sri Lanka',
        country: 'srilanka',
        location: [7.500214, 80.691841]
      },
      {
        id: 31,
        name: 'Germany',
        country: 'germany',
        location: [50.959573, 10.248274]
      },
      {
        id: 32,
        name: 'Cambodia',
        country: 'cambodia',
        location: [12.812605, 104.847286]
      },
      {
        id: 33,
        name: 'United Arab Emirates',
        country: 'uae',
        location: [23.898799, 54.289701]
      },
      {
        id: 34,
        name: 'Philippines',
        country: 'philippines',
        location: [11.944197, 123.000300]
      },
      {
        id: 35,
        name: 'India',
        country: 'india',
        location: [22.395979, 79.371853]
      },
      {
        id: 36,
        name: 'Finland',
        country: 'finland',
        location: [62.821823, 25.641002]
      },
      {
        id: 37,
        name: 'Italy',
        country: 'italy',
        location: [43.209820, 12.316652]
      },
      {
        id: 38,
        name: 'Russian Federation',
        country: 'russian',
        location: [61.233686, 93.213563]
      },
      {
        id: 39,
        name: 'Spain',
        country: 'spain',
        location: [39.918867, -3.773742]
      },
      {
        id: 40,
        name: 'Sweden',
        country: 'sweden',
        location: [63.278536, 16.045594]
      },
      {
        id: 41,
        name: 'the United Kingdom',
        country: 'uk',
        location: [54.731495, -2.675109]
      },
      {
        id: 42,
        name: 'Belgium',
        country: 'belgium',
        location: [50.723128, 4.640964]
      },
      {
        id: 43,
        name: 'Diamond Princess',
        country: 'japan',
        location: [35.407244, 139.717743]
      },
      {
        id: 44,
        name: 'Anhui',
        country: 'china',
        location: [31.851022, 117.340077]
      },
      {
        id: 45,
        name: 'Jiangsu',
        country: 'china',
        location: [33.371841, 119.846447]
      },
      {
        id: 46,
        name: 'Heilongjiang',
        country: 'china',
        location: [47.077209, 128.034891]
      },
      {
        id: 47,
        name: 'Fujian',
        country: 'china',
        location: [24.454481, 118.347839]
      },
      {
        id: 48,
        name: 'Hebei',
        country: 'china',
        location: [37.751557, 114.944163]
      },
      {
        id: 49,
        name: 'Shaanxi',
        country: 'china',
        location: [34.337867, 108.577320]
      },
      {
        id: 50,
        name: 'Guangxi',
        country: 'china',
        location: [23.878849, 108.635010]
      },
      {
        id: 51,
        name: 'Hainan',
        country: 'china',
        location: [19.206887, 109.640890]
      },
      {
        id: 52,
        name: 'Shanxi',
        country: 'china',
        location: [37.800390, 112.256132]
      },
      {
        id: 53,
        name: 'Guizhou',
        country: 'china',
        location: [26.509421, 106.617934]
      },
      {
        id: 54,
        name: 'Liaoning',
        country: 'china',
        location: [41.759881, 123.692528]
      },
      {
        id: 55,
        name: 'Gansu',
        country: 'china',
        location: [40.462079, 95.910719]
      },
      {
        id: 56,
        name: 'Jilin',
        country: 'china',
        location: [43.846616, 126.535303]
      },
      {
        id: 57,
        name: 'Inner Mongolia',
        country: 'china',
        location: [43.347876, 114.588039]
      },
      {
        id: 58,
        name: 'Xinjiang',
        country: 'china',
        location: [40.242288, 84.207038]
      },
      {
        id: 59,
        name: 'Ningxia',
        country: 'china',
        location: [37.210037, 106.058061]
      },
      {
        id: 60,
        name: 'Qinghai',
        country: 'china',
        location: [36.069671, 96.862404]
      },
      {
        id: 61,
        name: 'Xizang',
        country: 'china',
        location: [30.635347, 86.762834]
      },
      {
        id: 62,
        name: 'Egypt',
        country: 'egypt',
        location: [26.756393, 28.598153]
      },
      {
        id: 63,
        name: 'Iran',
        country: 'iran',
        location: [32.234106, 54.781108]
      },
       {
        id: 64,
        name: 'Israel',
        country: 'israel',
        location: [32.087470, 34.815624]
      },
      {
        id: 65,
        name: 'Lebanon',
        country: 'lebanon',
        location: [34.164434, 35.824639]
      },
      {
        id: 66,
        name: 'Kuwait',
        country: 'kuwait',
        location: [29.567720, 47.573536]
      },
      {
        id: 67,
        name: 'Iraq',
        country: 'iraq',
        location: [32.641742, 42.872624]
      },
      {
        id: 68,
        name: 'Afghanistan',
        country: 'afghanistan',
        location: [34.343433, 65.587453]
      },
      {
        id: 69,
        name: 'Bahrain',
        country: 'bahrain',
        location: [25.945618, 50.539992]
      },
      {
        id: 70,
        name: 'Oman',
        country: 'oman',
        location: [20.905044, 56.589109]
      },
      {
        id: 71,
        name: 'Austria',
        country: 'austria',
        location: [47.778987, 14.428717]
      },
      {
        id: 72,
        name: 'Croatia',
        country: 'croatia',
        location: [44.449083, 17.664095]
      },
      {
        id: 73,
        name: 'Switzerland',
        country: 'switzerland',
        location: [46.987857, 8.119545]
      },
      {
        id: 74,
        name: 'Algeria',
        country: 'algeria',
        location: [29.619162, 2.778654]
      },
      {
        id: 75,
        name: 'Brazil',
        country: 'brazil',
        location: [-7.726328, -56.647254]
      },
      {
        id: 76,
        name: 'Denmark',
        country: 'denmark',
        location: [55.776706, 10.129287]
      },
      {
        id: 77,
        name: 'Estonia',
        country: 'estonia',
        location: [58.917434, 25.332932]
      },
      {
        id: 78,
        name: 'Georgia',
        country: 'georgia',
        location: [42.278731, 43.434231]
      },
      {
        id: 79,
        name: 'Greece',
        country: 'greece',
        location: [39.290321, 22.524309]
      },
      {
        id: 80,
        name: 'North Macedonia',
        country: 'north macedonia',
        location: [41.638029, 21.664368]
      },
      {
        id: 81,
        name: 'Norway',
        country: 'norway',
        location: [62.656854, 9.002589]
      },
      {
        id: 82,
        name: 'Romania',
        country: 'romania',
        location: [46.421935, 25.436763]
      },
      {
        id: 83,
        name: 'Pakistan',
        country: 'pakistan',
        location: [29.328910, 68.505539]
      },
      {
        id: 84,
        name: 'New Zealand',
        country: 'new zealand',
        location: [-42.374168, 172.346526]
      },
      {
        id: 85,
        name: 'Belarus',
        country: 'Belarus',
        location: [53.768236, 27.623950]
      },
      {
        id: 86,
        name: 'Lithuania',
        country: 'Lithuania',
        location: [55.707761, 23.738840]
      },
      {
        id: 87,
        name: 'Netherlands',
        country: 'Netherlands',
        location: [52.265745, 5.486267]
      },
      {
        id: 88,
        name: 'Nigeria',
        country: 'Nigeria',
        location: [9.851805, 7.779058]
      },
      {
        id: 89,
        name: 'San Marino',
        country: 'san marino',
        location: [43.939643, 12.456658]
      },

      {
        id: 90,
        name: 'Azerbaijan',
        country: 'azerbaijan',
        location: [40.564398, 47.806679]
      },
     {
        id: 92,
        name: 'Ireland',
        country: 'ireland',
        location: [53.417175, -8.266565]
      },
      {
        id: 93,
        name: 'Monaco',
        country: 'monaco',
        location: [43.735742, 7.423363]
      },
      {
        id: 94,
        name: 'Qatar',
        country: 'qatar',
        location: [25.453208, 51.145443]
      },
      {
        id: 95,
        name: 'Ecuador',
        country: 'ecuador',
        location: [-0.947025, -78.942585]
      },
      {
        id: 96,
        name: 'Czechia',
        country: 'czechia',
        location: [49.845910, 15.000461]
      },
      {
        id: 97,
        name: 'Iceland',
        country: 'iceland',
        location: [65.168374, -18.808424]
      },
      {
        id: 98,
        name: 'Luxembourg',
        country: 'luxembourg',
        location: [49.833440, 6.179865]
      },
      {
        id: 99,
        name: 'Armenia',
        country: 'armenia',
        location: [40.459809, 44.587512]
      },
      {
        id: 100,
        name: 'Indonesia',
        country: 'indonesia',
        location: [-2.143682, 121.091900]
      },
      {
        id: 101,
        name: 'Dominican Republic',
        country: 'dominican',
        location: [19.469087, -70.059120]
      },
      {
        id: 102,
        name: 'Mexico',
        country: 'Mexico',
        location: [24.697885, -102.785056]
      },
  ]

export default places;
