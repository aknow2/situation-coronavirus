const places = [
      {
        id: 1,
        name: "Hubei",
        country: 'China',
        population: 59170000,
        location: [30.642759, 114.314896],
      },
      {
        id:2,
        name: "Guangdong",
        country: 'China',
        population: 113460000,
        location: [23.161937, 113.265126],
      },
      {
        id:3,
        name: "Beijing",
        country: 'China',
        population: 21540000,
        location: [39.899670, 116.410834],
      },
      {
        id:4,
        name: "Shanghai",
        country: 'China',
        population: 24240000,
        location: [31.060666, 121.545394],
      },
      {
        id:5,
        name: 'Japan',
        country: 'Japan',
        population: 126800000,
        location: [35.573073, 136.644255],
      },
      {
        id:6,
        name: 'Republic of Korea',
        country: 'Republic of Korea',
        population: 51470000,
        location: [37.545423, 126.994158]
      },
      {
        id:7,
        name: 'Thailand',
        country: 'Thailand',
        population: 69040000,
        location: [13.769713, 100.534521]
      }, 
      {
        id: 8,
        name: 'Chongqing',
        country: 'China',
        population: 31020000,
        location: [29.543867, 106.628166]
      },
      {
        id: 9,
        name: 'Zhejiang',
        country: 'China',
        population: 57370000,
        location: [29.498214, 119.950164]
      },
      {
        id: 10,
        name: 'Jiangxi',
        country: 'China',
        population: 46480000,
        location: [27.720665, 115.334603]
      },
      {
        id: 11,
        name: 'Sichuan',
        country: 'China',
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
        population: 46480000,
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
        name: 'United States of America',
        country: 'U.S.A.',
        population: 327200000,
        location: [38.936851, -101.878757]
      },
      {
        id: 21,
        name: 'China',
        country: 'China',
        population: 1400050000,
        location: [35.276518, 103.594722]
      },
      {
        id: 22,
        name: 'Viet Nam',
        country: 'vietnam',
        population: 95540000,
        location: [21.143903, 105.790069]
      },
      {
        id: 23,
        name: 'Singapore',
        country: 'singapore',
        population: 5612000,
        location: [1.316004, 103.922393]
      },
      {
        id: 24,
        name: 'Australia',
        country: 'australia',
        population: 24600000,
        location: [-26.198094, 134.155892]
      },
      {
        id: 25,
        name: 'Nepal',
        country: 'nepal',
        population: 29300000,
        location: [27.944116, 84.452023]
      },
      {
        id: 26,
        name: 'France',
        country: 'france',
        population: 66990000,
        location: [48.941955, 2.527384]
      },
      {
        id: 27,
        name: 'Malaysia',
        country: 'malaysia',
        population: 31620000,
        location: [3.250872, 101.982163]
      },
      {
        id: 28,
        name: 'Canada',
        country: 'canada',
        population: 37590000,
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
        country: 'Srilanka',
        population: 21440000,
        location: [7.500214, 80.691841]
      },
      {
        id: 31,
        name: 'Germany',
        country: 'Germany',
        population: 82790000,
        location: [50.959573, 10.248274]
      },
      {
        id: 32,
        name: 'Cambodia',
        country: 'Cambodia',
        population: 16010000,
        location: [12.812605, 104.847286]
      },
      {
        id: 33,
        name: 'United Arab Emirates',
        country: 'U.A.E.',
        population: 9858664,
        location: [23.898799, 54.289701]
      },
      {
        id: 34,
        name: 'Philippines',
        country: 'Philippines',
        population: 109192665,
        location: [11.944197, 123.000300]
      },
      {
        id: 35,
        name: 'India',
        country: 'India',
        population: 1376418636 ,
        location: [22.395979, 79.371853]
      },
      {
        id: 36,
        name: 'Finland',
        country: 'Finland',
        population: 5540000,
        location: [62.821823, 25.641002]
      },
      {
        id: 37,
        name: 'Italy',
        country: 'Italy',
        population: 60484747,
        location: [40.506240, 15.621145]
      },
      {
        id: 38,
        name: 'Russian Federation',
        country: 'Russian',
        population: 145918262,
        location: [61.233686, 93.213563]
      },
      {
        id: 39,
        name: 'Spain',
        country: 'Spain',
        population: 46750090,
        location: [39.918867, -3.773742]
      },
      {
        id: 40,
        name: 'Sweden',
        country: 'Sweden',
        population: 10082753,
        location: [63.278536, 16.045594]
      },
      {
        id: 41,
        name: 'The United Kingdom',
        country: 'UK',
        population: 67792706,
        location: [54.731495, -2.675109]
      },
      {
        id: 42,
        name: 'Belgium',
        country: 'Belgium',
        population: 11576452,
        location: [50.723128, 4.640964]
      },
      {
        id: 43,
        name: 'Diamond Princess',
        country: 'Diamond Princess',
        population: 3800,
        location: [35.407244, 139.717743]
      },
      {
        id: 44,
        name: 'Anhui',
        country: 'China',
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
        country: 'Egypt',
        population: 101814083,
        location: [26.756393, 28.598153]
      },
      {
        id: 63,
        name: 'Iran',
        country: 'Iran',
        population: 83992949,
        location: [32.234106, 54.781108]
      },
       {
        id: 64,
        name: 'Israel',
        country: 'Israel',
        population: 8655535,
        location: [32.087470, 34.815624]
      },
      {
        id: 65,
        name: 'Lebanon',
        country: 'Lebanon',
        population: 6833274,
        location: [34.164434, 35.824639]
      },
      {
        id: 66,
        name: 'Kuwait',
        country: 'Kuwait',
        population:  4253352,
        location: [29.567720, 47.573536]
      },
      {
        id: 67,
        name: 'Iraq',
        country: 'Iraq',
        population: 39977241,
        location: [32.641742, 42.872624]
      },
      {
        id: 68,
        name: 'Afghanistan',
        country: 'Afghanistan',
        population: 38690084,
        location: [34.343433, 65.587453]
      },
      {
        id: 69,
        name: 'Bahrain',
        country: 'Bahrain',
        population: 1685053,
        location: [25.945618, 50.539992]
      },
      {
        id: 70,
        name: 'Oman',
        country: 'Oman',
        population: 5071101,
        location: [20.905044, 56.589109]
      },
      {
        id: 71,
        name: 'Austria',
        country: 'Austria',
        population: 8992939,
        location: [47.778987, 14.428717]
      },
      {
        id: 72,
        name: 'Croatia',
        country: 'Croatia',
        population: 4111727,
        location: [44.449083, 17.664095]
      },
      {
        id: 73,
        name: 'Switzerland',
        country: 'Switzerland',
        population: 8637987,
        location: [46.987857, 8.119545]
      },
      {
        id: 74,
        name: 'Algeria',
        country: 'Algeria',
        population: 43637959,
        location: [29.619162, 2.778654]
      },
      {
        id: 75,
        name: 'Brazil',
        country: 'Brazil',
        population: 212162466,
        location: [-7.726328, -56.647254]
      },
      {
        id: 76,
        name: 'Denmark',
        country: 'Denmark',
        population: 5786955,
        location: [55.776706, 10.129287]
      },
      {
        id: 77,
        name: 'Estonia',
        country: 'Estonia',
        population: 1326306,
        location: [58.917434, 25.332932]
      },
      {
        id: 78,
        name: 'Georgia',
        country: 'Georgia',
        population: 3991124,
        location: [42.278731, 43.434231]
      },
      {
        id: 79,
        name: 'Greece',
        country: 'Greece',
        population: 10436024,
        location: [39.290321, 22.524309]
      },
      {
        id: 80,
        name: 'North Macedonia',
        country: 'North macedonia',
        location: [41.638029, 21.664368]
      },
      {
        id: 81,
        name: 'Norway',
        country: 'Norway',
        population: 5410283,
        location: [62.656854, 9.002589]
      },
      {
        id: 82,
        name: 'Romania',
        country: 'Romania',
        population: 19270317,
        location: [46.421935, 25.436763]
      },
      {
        id: 83,
        name: 'Pakistan',
        country: 'Pakistan',
        population: 219768644,
        location: [29.328910, 68.505539]
      },
      {
        id: 84,
        name: 'New Zealand',
        country: 'New zealand',
        population: 4812105,
        location: [-42.374168, 172.346526]
      },
      {
        id: 85,
        name: 'Belarus',
        country: 'Belarus',
        population: 9450119,
        location: [53.768236, 27.623950]
      },
      {
        id: 86,
        name: 'Lithuania',
        country: 'Lithuania',
        population: 2731866,
        location: [55.707761, 23.738840]
      },
      {
        id: 87,
        name: 'Netherlands',
        country: 'Netherlands',
        population: 17125134,
        location: [52.265745, 5.486267]
      },
      {
        id: 88,
        name: 'Nigeria',
        country: 'Nigeria',
        population: 204792651,
        location: [9.851805, 7.779058]
      },
      {
        id: 89,
        name: 'San Marino',
        country: 'San Marino',
        population: 33913,
        location: [43.939643, 12.456658]
      },
      {
        id: 90,
        name: 'Azerbaijan',
        country: 'Azerbaijan',
        population: 10115521,
        location: [40.564398, 47.806679]
      },
     {
        id: 92,
        name: 'Ireland',
        country: 'Ireland',
        population: 4923473,
        location: [53.417175, -8.266565]
      },
      {
        id: 93,
        name: 'Monaco',
        country: 'Monaco',
        population: 39170,
        location: [43.735742, 7.423363]
      },
      {
        id: 94,
        name: 'Qatar',
        country: 'Qatar',
        population: 2868345,
        location: [25.453208, 51.145443]
      },
      {
        id: 95,
        name: 'Ecuador',
        country: 'Ecuador',
        population: 17573212,
        location: [-0.947025, -78.942585]
      },
      {
        id: 96,
        name: 'Czechia',
        country: 'Czechia',
        population: 10703881,
        location: [49.845910, 15.000461]
      },
      {
        id: 97,
        name: 'Iceland',
        country: 'Iceland',
        population: 340671,
        location: [65.168374, -18.808424]
      },
      {
        id: 98,
        name: 'Luxembourg',
        country: 'Luxembourg',
        population: 623320,
        location: [49.833440, 6.179865]
      },
      {
        id: 99,
        name: 'Armenia',
        country: 'Armenia',
        population: 2961821,
        location: [40.459809, 44.587512]
      },
      {
        id: 100,
        name: 'Indonesia',
        country: 'Indonesia',
        population: 272773611,
        location: [-2.143682, 121.091900]
      },
      {
        id: 101,
        name: 'Dominican Republic',
        country: 'Dominican',
        population: 10820316,
        location: [19.469087, -70.059120]
      },
      {
        id: 102,
        name: 'Mexico',
        country: 'Mexico',
        population: 128588953,
        location: [24.697885, -102.785056]
      },
      {
        id: 103,
        name: 'Portugal',
        country: 'Portugal',
        population: 10204139,
        location: [39.657581, -8.180933]
      },
      {
        id: 104,
        name: 'Andorra',
        country: 'Andorra',
        population: 77234,
        location: [42.539899, 1.564144]
      },
      {
        id: 105,
        name: 'Latvia',
        country: 'Latvia',
        population: 1891361,
        location: [56.977766, 24.725572]
      },
      {
        id: 106,
        name: 'Jordan',
        country: 'Jordan',
        population: 10177444,
        location: [31.047284, 36.223477]
      },
      {
        id: 107,
        name: 'Morocco',
        country: 'Morocco',
        population: 36799355,
        location: [32.543795, -6.833654]
      },
      {
        id: 108,
        name: 'Saudi Arabia',
        country: 'Saudi Arabia',
        population: 34675465,
        location: [25.132382, 44.032730]
      },
      {
        id: 109,
        name: 'Tunisia',
        country: 'Tunisia',
        population: 11787235,
        location: [34.234868, 9.504354]
      },
      {
        id: 110,
        name: 'Senegal',
        country: 'Senegal',
        population: 16629859,
        location: [15.455374, -14.914537]
      },
      {
        id: 111,
        name: 'Poland',
        country: 'Poland',
        population: 37856991,
        location: [52.394348, 18.843228]
      },
      {
        id: 112,
        name: 'Ukraine',
        country: 'Ukraine',
        population: 43799184,
        location: [49.861221, 31.250348]
      },
      {
        id: 113,
        name: 'Argentina',
        country: 'Argentina',
        population: 45090683,
        location: [-37.676494, -64.282748]
      },
      {
        id: 114,
        name: 'Chile',
        country: 'Chile',
        population: 19074649,
        location: [-32.945600, -71.577670]
      },
      {
        id: 115,
        name: 'Bosnia and Herzegovina',
        country: 'Bosnia and Herzegovina',
        location: [44.084301, 18.033080]
      },
      {
        id: 116,
        name: 'Hungary',
        country: 'Hungary',
        population: 9666483,
        location: [47.154201, 19.381826]
      },
      {
        id: 117,
        name: 'Slovenia',
        country: 'Slovenia',
        population: 2078866,
        location: [46.086647, 14.695767]
      },
      {
        id: 118,
        name: 'Liechtenstein',
        country: 'Liechtenstein',
        population: 38100,
        location: [47.149994, 9.554998]
      },
      {
        id: 119,
        name: 'Gibraltar',
        country: 'Gibraltar',
        population: 33694,
        location: [36.119937, -5.347464]
      },
      {
        id: 120,
        name: 'occupied Palestinian territory',
        country: 'Occupied Palestinian territory',
        population: 4685000,
        location: [32.216522, 35.235739]
      },
      {
        id: 121,
        name: 'Saint Martin',
        country: 'Saint Martin',
        location: [18.074881, -63.062937]
      },
      {
        id: 122,
        name: 'Saint Barthélemy',
        country: 'Saint Barthélemy',
        location: [17.904170, -62.832317]
      },
      {
        id: 123,
        name: 'Serbia',
        country: 'Serbia',
        population: 7022000,
        location: [44.228180, 20.722182]
      },
      {
        id: 124,
        name: 'Bhutan',
        country: 'Bhutan',
        population: 763092,
        location: [27.504120, 90.429486]
      },
      {
        id: 125,
        name: 'Cameroon',
        country: 'Cameroon',
        population: 25900000,
        location: [5.075538, 12.142497]
      },
       {
        id: 126,
        name: 'South Africa',
        country: 'South Africa',
        population: 58780000,
        location: [-33.521616, 18.474155]
      },
       {
        id: 127,
        name: 'Holy See',
        country: 'Holy See',
        population: 799,
        location: [41.905177, 12.453123]
      },
      {
        id: 129,
        name: 'Slovakia',
        country: 'Slovakia',
        population: 5457013,
        location: [48.846285, 19.422733]
      },
      {
        id: 130,
        name: 'Colombia',
        country: 'Colombia',
        population: 50745234,
        location: [4.456163, -73.998677]
      },
      {
        id: 131,
        name: 'Peru',
        country: 'Peru',
        population: 32854888,
        location: [-9.433730, -75.291611]
      },
      {
        id: 132,
        name: 'Togo',
        country: 'Togo',
        population: 8228763,
        location: [9.005604, 0.916991]
      },
      {
        id: 133,
        name: 'Malta',
        country: 'Malta',
        population: 441247,
        location: [35.866887, 14.449356]
      },
      {
        id: 134,
        name: 'Bulgaria',
        country: 'Bulgaria',
        population: 6961439,
        location: [42.799206, 25.210320]
      },
      {
        id: 135,
        name: 'Republic of Moldova',
        country: 'Republic of Moldova',
        population: 3550000,
        location: [47.338907, 28.378183]
      },
      {
        id: 136,
        name: 'Faroe Islands',
        country: 'Faroe Islands',
        population: 49290,
        location: [62.175642, -6.959948]
      },
      {
        id: 137,
        name: 'Maldives',
        country: 'Maldives',
        population: 530953,
        location: [-0.681322, 73.137685]
      },
      {
        id: 138,
        name: 'Costa Rica',
        country: 'Costa Rica',
        population: 5047561,
        location: [10.046055, -84.248559]
      },
      {
        id: 139,
        name: 'French Guiana',
        country: 'French Guiana',
        population: 303864,
        location: [4.160462, -53.263520]
      },
      {
        id: 140,
        name: 'Martinique',
        country: 'Martinique',
        population: 375338,
        location: [14.675109, -61.045388]
      },
      {
        id: 141,
        name: 'Albania',
        country: 'Albania',
        population: 2880917,
        location: [41.292131, 19.825493]
      },
      {
        id: 142,
        name: 'Bangladesh',
        country: 'Bangladesh',
        population: 165600000,
        location: [23.885028, 89.940071]
      },
      {
        id: 143,
        name: 'Paraguay',
        country: 'Paraguay',
        population: 7044636,
        location: [-22.905762, -58.479531]
      },
      {
        id: 144,
        name: 'Brunei Darussalam',
        country: 'Brunei Darussalam',
        population: 451970,
        location: [4.610146, 114.502351]
      },
      {
        id: 145,
        name: 'Mongolia',
        country: 'Mongolia',
        population: 3225167,
        location: [47.796906, 98.495246]
      },
      {
        id: 146,
        name: 'Cyprus',
        country: 'Cyprus',
        population: 1223822,
        location: [34.970303, 32.984965]
      },
      {
        id: 147,
        name: 'Guernsey',
        country: 'Guernsey',
        population: 62792,
        location: [49.461933, -2.587279]
      },
      {
        id: 148,
        name: 'Panama',
        country: 'Panama',
        population: 4227828,
        location: [8.642994, -81.142408]
      },
      {
        id: 149,
        name: 'Bolivia State of)',
        country: 'Bolivia',
        population: 11513100,
        location: [-16.091406, -65.307905]
      },
      {
        id: 150,
        name: 'Jamaica',
        country: 'Jamaica',
        population: 2841134,
        location: [18.194385, -77.469335]
      },
      {
        id: 151,
        name: 'Burkina Faso',
        country: 'Burkina Faso',
        location: [12.517140, -2.371670]
      },
      {
        id: 152,
        name: 'Democratic Republic of the Congo',
        country: 'Democratic Republic of the Congo',
        population: 86800000,
        location: [-1.042130, 23.344514]
      },
      {
        id: 153,
        name: 'French Polynesia',
        country: 'French Polynesia',
        population: 296617,
        location: [-17.523946, -149.546419]
      },
      {
        id: 154,
        name: 'Turkey',
        country: 'Turkey',
        population: 83200000,
        location: [39.592044, 34.872977]
      },
      {
        id: 155,
        name: 'Honduras',
        country: 'Honduras',
        population: 8624028,
        location: [15.202561, -86.927555]
      },
      {
        id: 156,
        name: 'Côte d’Ivoire',
        country: 'Côte d’Ivoire',
        population: 26209992,
        location: [8.205605, -5.874824]
      },
      {
        id: 157,
        name: 'Jersey',
        country: 'Jersey',
        location: [49.216814, -2.147232]
      },
      {
        id: 158,
        name: 'Réunion',
        country: 'Réunion',
        population: 893699,
        location: [-21.096960, 55.397384]
      },
      {
        id: 159,
        name: 'Cuba',
        country: 'Cuba',
        population: 11466540,
        location: [22.148606, -78.942868]
      },
      {
        id: 160,
        name: 'Guyana',
        country: 'Guyana',
        population: 779405,
        location: [5.300330, -58.928935]
      },
      {
        id: 161,
        name: 'Saint Vincent and the Grenadines',
        country: 'Saint Vincent and the Grenadines',
        location: [13.219772, -61.198496]
      },
      {
        id: 162,
        name: 'Sudan',
        country: 'Sudan',
        population: 42813238,
        location: [17.375990, 31.014814]
      },
      {
        id: 163,
        name: 'Puerto Rico',
        country: 'Puerto Rico',
        location: [18.278265, -66.553878]
      },
      {
        id: 164,
        name: 'Venezuela Republic of)',
        country: 'Venezuela',
        population: 28515829,
        location: [8.274171, -66.273338]
      },
      {
        id: 165,
        name: 'Antigua and Barbuda',
        country: 'Antigua and Barbuda',
        population: 97000,
        location: [17.610689, -61.785215]
      },
      {
        id: 166,
        name: 'Guadeloupe',
        country: 'Guadeloupe',
        population: 448869,
        location: [16.257034, -61.644479]
      },
      {
        id: 167,
        name: 'Trinidad and Tobago',
        country: 'Trinidad and Tobago',
        population: 1394973,
        location: [10.488317, -61.280607]
      },
      {
        id: 168,
        name: 'Cayman Islands',
        country: 'Cayman Islands',
        population: 63000,
        location: [19.328152, -81.239154]
      },
      {
        id: 169,
        name: 'Ethiopia',
        country: 'Ethiopia',
        population: 114963588,
        location: [8.752423, 39.029721]
      },
      {
        id: 170,
        name: 'Gabon',
        country: 'Gabon',
        population: 1906738,
        location: [-0.239782, 11.541829]
      },
      {
        id: 171,
        name: 'Ghana',
        country: 'Ghana',
        population: 30417856,
        location: [8.554538, -1.379615]
      },
      {
        id: 172,
        name: 'Guinea',
        country: 'Guinea',
        population: 12770000,
        location: [10.995753, -12.758817]
      },
      {
        id: 173,
        name: 'Kenya',
        country: 'Knenya',
        population: 47564296,
        location: [0.373808, 37.998218]
      },
      {
        id: 174,
        name: 'Kazakhstan',
        country: 'kazakhstan',
        population: 18589667,
        location: [48.371462, 67.389429]
      },
      {
        id: 175,
        name: 'Cura çao',
        country: 'Curaçao',
        population: 160000,
        location: [12.214450, -69.050532]
      },
      {
        id: 176,
        name: 'Namibia',
        country: 'Namibia',
        population: 2660131,
        location: [-21.202766, 16.530152]
      },
      {
        id: 177,
        name: 'Central African Republic',
        country: 'Central African Republic',
        population: 4745185,
        location: [7.014793, 20.301727]
      },
      {
        id: 178,
        name: 'Congo',
        country: 'Congo',
        population: 5483151,
        location: [0.315993, 15.533414]
      },
      {
        id: 179,
        name: 'Equatorial Guinea',
        country: 'Equatorial Guinea',
        population: 963629,
        location: [1.582449, 10.498625]
      },
      {
        id: 180,
        name: 'Eswatini',
        country: 'Eswatini',
        population: 1148130,
        location: [-26.439521, 31.346533]
      },
      {
        id: 181,
        name: 'Mauritania',
        country: 'Mauritania',
        population: 110213,
        location: [20.409376, -11.955122]
      },
      {
        id: 182,
        name: 'Mayotte',
        country: 'Mayotte',
        population: 270400,
        location: [-12.790332, 45.144737]
      },
      {
        id: 183,
        name: 'Uzbekistan',
        country: 'Uzbekistan',
        population: 30023709,
        location: [42.439425, 62.473040]
      },
      {
        id: 184,
        name: 'Uruguay',
        country: 'Uruguay',
        population: 3480000,
        location: [-33.149565, -56.061861]
      },
      {
        id: 185,
        name: 'Guatemala',
        country: 'Guatemala',
        population: 17572053,
        location: [15.510333, -90.370772]
      },
      {
        id: 186,
        name: 'Saint Lucia',
        country: 'Saint Lucia',
        population: 192185,
        location: [13.892697, -60.982935]
      },
      {
        id: 187,
        name: 'Suriname',
        country: 'Suriname',
        population: 566390,
        location: [4.013283, -56.066023]
      },
      {
        id: 188,
        name: 'Rwanda',
        country: 'Rwanda',
        population: 12626950,
        location: [-1.915834, 29.912368]
      },
      {
        id: 189,
        name: 'Seychelles',
        country: 'Seychelles',
        population: 99657,
        location: [-4.610292, 55.437931]
      },
      {
        id: 190,
        name: 'Guam',
        country: 'Guam',
        population: 167294,
        location: [13.419936, 144.750307]
      },
      {
        id: 192,
        name: 'Albania',
        country: 'Albania',
        population: 2880917,
        location: [41.180802, 19.932951]
      },
      {
        id: 193,
        name: 'Somalia',
        country: 'Somalia',
        population: 15440000,
        location: [3.341423, 44.798975]
      },
      {
        id: 194,
        name: 'Bahamas',
        country: 'Bahamas',
        population: 389482,
        location: [24.827464, -78.048404]
      },
      {
        id: 195,
        name: 'Aruba',
        country: 'Aruba',
        population: 116576,
        location: [12.534970, -69.976914]
      },
      {
        id: 196,
        name: 'United States Virgin Islands',
        country: 'United States Virgin Islands',
        population: 104578,
        location: [17.762816, -64.777370]
      },
      {
        id: 197,
        name: 'Benin',
        country: 'Benin',
        population: 11940762,
        location: [11.030971, 2.509644]
      },
      {
        id: 198,
        name: 'Liberia',
        country: 'Liberia',
        population: 4940000,
        location: [6.515126, -9.896241]
      },
      {
        id: 199,
        name: 'United Republic of Tanzania',
        country: 'United Republic of Tanzania',
        population: 59730000,
        location: [-5.938242, 34.838303]
      },
      {
        id: 200,
        name: 'Montenegro',
        country: 'Montenegro',
        population: 629392,
        location: [43.001969, 19.070342]
      },
      {
        id: 201,
        name: 'Kyrgyzstan',
        country: 'Kyrgyzstan',
        population: 6389500,
        location: [41.597162, 73.938395]
      },
      {
        id: 202,
        name: 'Djibouti',
        country: 'Djibouti',
        population: 942208,
        location: [11.848761, 42.675813]
      },
      {
        id: 203,
        name: 'Barbados',
        country: 'Barbados',
        population: 288513,
        location: [13.160727, -59.531837]
      },
      {
        id: 204,
        name: 'Montserrat',
        country: 'Montserrat',
        population: 5215,
        location: [16.738005, -62.189516]
      },
      {
        id: 206,
        name: 'Mauritius',
        country: 'Mauritius',
        population: 43371,
        location: [-20.223322, 57.517728]
      },
      {
        id: 207,
        name: 'Zambia',
        country: 'Zambia',
        population: 17351708,
        location: [-13.849086, 27.483726]
      },
      {
        id: 208,
        name: 'Gambia',
        country: 'Gambia',
        population: 2297704,
        location: [13.404314, -16.007090]
      },
      {
        id: 209,
        name: 'Greenland',
        country: 'Greenland',
        population: 56992,
        location: [64.982387, -45.598762]
      },
      {
        id: 210,
        name: 'Fiji',
        country: 'Fiji',
        population: 915696,
        location: [-17.430616, 178.212946]
      },
      {
        id: 211,
        name: 'New Caledonia',
        country: 'New Caledonia',
        population: 282750,
        location: [-21.211740, 165.235948]
      },
      {
        id: 212,
        name: 'Papua New Guinea',
        country: 'Papua New Guinea',
        population: 8776109,
        location: [-5.641687, 149.204520]
      },
      {
        id: 213,
        name: 'Isle of Man',
        country: 'Isle of Man',
        population: 91556,
        location: [54.218650, -4.550201]
      },
      {
        id: 214,
        name: 'Timor-Leste',
        country: 'Timor-Leste',
        population: 1310599,
        location: [-8.803978, 125.903820]
      },
      {
        id: 215,
        name: 'Haiti',
        country: 'Haiti',
        population: 11300000,
        location: [19.205682, -72.341193]
      },
      {
        id: 216,
        name: 'Nicaragua',
        country: 'Nicaragua',
        population: 6545502,
        location: [12.773642, -85.032910]
      },
      {
        id: 217,
        name: 'El Salvador',
        country: 'El Salvador',
        population: 6453553,
        location: [13.714427, -89.107019]
      },
      {
        id: 218,
        name: 'Bermuda',
        country: 'Bermuda',
        population: 65440,
        location: [32.307383, -64.764343]
      },
      {
        id: 219,
        name: 'Sint Maarten',
        country: 'Sint Maarten',
        population: 41110,
        location: [18.032387, -63.064940]
      },
      {
        id: 221,
        name: 'Cabo Verde',
        country: 'Cabo Verde',
        population: 546400,
        location: [16.600140, -24.286252]
      },
      {
        id: 222,
        name: 'Chad',
        country: 'Chad',
        population: 15946876,
        location: [15.474525, 18.645288]
      },
      {
        id: 223,
        name: 'Zimbabwe',
        country: 'Zimbabwe',
        population: 17351708,
        location: [-18.774058, 29.662442]
      },
      {
        id: 224,
        name: 'Niger',
        country: 'Niger',
        population: 23300000,
        location: [17.601313, 9.064129]
      },
      {
        id: 225,
        name: 'Madagascar',
        country: 'Madagascar',
        population: 26262313,
        location: [-19.314215, 46.475190]
      },
      {
        id: 226,
        name: 'Angola',
        country: 'Angola',
        population: 31800000,
        location: [-12.496759, 17.420562]
      },
      {
        id: 227,
        name: 'Eritrea',
        country: 'Eritrea',
        population: 5320000,
        location: [15.653044, 38.740474]
      },
      {
        id: 228,
        name: 'Uganda',
        country: 'Uganda',
        population: 44269594,
        location: [1.246287, 32.320809]
      },
      {
        id: 229,
        name: 'Kosovo',
        country: 'Kosovo',
        population: 1810366,
        location: [42.591817, 20.774913]
      },
      {
        id: 230,
        name: 'Syrian Arab Republic',
        country: 'Syrian Arab Republic',
        population: 17071327,
        location: [35.182427, 38.418489]
      },
      {
        id: 231,
        name: 'Grenada',
        country: 'Grenada',
        population: 112003,
        location: [12.103946, -61.696103]
      },
      {
        id: 232,
        name: 'Mozambique',
        country: 'Mozambique',
        population: 30366036,
        location: [-18.795622, 34.138856]
      },
      {
        id: 233,
        name: 'Myanmar',
        country: 'Myanmar',
        population: 54317641,
        location: [20.641525, 96.058997]
      },
      {
        id: 234,
        name: 'Belize',
        country: 'Belize',
        population: 395780,
        location: [17.234906, -88.661686]
      },
      {
        id: 235,
        name: 'Dominica',
        country: 'Dominica',
        population: 73286,
        location: [15.448701, -61.358937]
      },
      {
        id: 236,
        name: 'Turks and Caicos Islands',
        country: 'Turks and Caicos Islands',
        population: 39037,
        location: [21.820416, -71.897444]
      },
      {
        id: 237,
        name: "Lao People's Democratic Republic",
        country: "Lao People's Democratic Republic",
        population: 7248643,
        location: [19.839692, 102.303176]
      },
      {
        id: 238,
        name: 'Libya',
        country: 'Libya',
        population: 6847494,
        location: [27.762293, 17.493371]
      },
      {
        id: 239,
        name: 'Saint Kitts and Nevis',
        country: 'Saint Kitts and Nevis',
        population: 53104,
        location: [17.328881, -62.747422]
      },
       {
        id: 240,
        name: 'Guinea-Bissau',
        country: 'Guinea-Bissau',
        population: 1955584,
        location: [12.132782, -14.424565]
      },
       {
        id: 241,
        name: 'Mali',
        country: 'Mali',
        population: 20099656,
        location: [18.289899, -3.969556]
      },
       {
        id: 242,
        name: 'Anguilla',
        country: 'Anguilla',
        population: 15090,
        location: [18.209734, -63.068371]
      },
       {
        id: 243,
        name: 'British Virgin Islands',
        country: 'British Virgin Islands',
        population: 31200,
        location: [18.420195, -64.638684]
      },
       {
        id: 244,
        name: 'Northern Mariana Islands of the)',
        country: 'Northern Mariana Islands',
        population: 55140,
        location: [16.693079, 145.779959]
      },
      {
        id: 245,
        name: 'Botswana',
        country: 'Botswana',
        population: 2303697,
        location: [-21.710280, 23.549645]
      },
      {
        id: 246,
        name: 'Burundi',
        country: 'Burundi',
        population: 11570000,
        location: [-3.319406, 29.737461]
      },
      {
        id: 247,
        name: 'Sierra Leone',
        country: 'Sierra Leone',
        population: 7813215,
        location: [8.568040, -11.917731]
      },
      {
        id: 248,
        name: 'Malawi',
        country: 'Malawi',
        population: 18143217,
        location: [-13.783363, 33.863843]
      },
      {
        id: 249,
        name: 'Bonaire, Sint Eustatius and Saba',
        country: 'Bonaire, Sint Eustatius and Saba',
        population: 25157,
        location: [12.205910, -68.226929]
      },
      {
        id: 250,
        name: 'Falkland Islands',
        country: 'Falkland Islands',
        population: 2840,
        location: [-51.638184, -59.617200]
      },
      {
        id: 251,
        name: 'South Sudan',
        country: 'South Sudan',
        population: 11062113,
        location: [4.752303, 31.679467]
      },
  ];

export default places;
