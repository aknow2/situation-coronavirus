import dayOf20012020 from "./data/dayOf20012020";
import dayOf21012020 from "./data/dayOf21012020";
import dayOf23012020 from "./data/dayOf23012020";
import dayOf24012020 from "./data/dayOf24012020";
import dayOf25012020 from "./data/dayOf25012020";
import dayOf26012020 from "./data/dayOf26012020";
import dayOf27012020 from "./data/dayOf27012020";
import dayOf28012020 from "./data/dayOf28012020";
import dayOf29012020 from "./data/dayOf29012020";
import dayOf30012020 from "./data/dayOf30012020";
import dayOf31012020 from "./data/dayOf31012020";
import dayOf01022020 from "./data/dayOf01022020";
import dayOf02022020 from "./data/dayOf02022020";

const situationData  = {
  places: [
      {
        id: 1,
        name: "China – Hubei Province",
        country: 'china',
        location: [30.642759, 114.314896],
      },
      {
        id:2,
        name: "China – Guangdong",
        country: 'china',
        location: [23.161937, 113.265126],
      },
      {
        id:3,
        name: "China – Beijing Municipality",
        country: 'china',
        location: [39.899670, 116.410834],
      },
      {
        id:4,
        name: "China – Shanghai Municipality",
        country: 'china',
        location: [31.060666, 121.545394],
      },
      {
        id:5,
        name: 'japan',
        country: 'japan',
        location: [35.679658, 139.770392],
      },
      {
        id:6,
        name: 'Republic of Korea ',
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
        name: 'China - Chongqing Municipality',
        country: 'china',
        location: [29.543867, 106.628166]
      },
      {
        id: 9,
        name: 'China - Zhejiang Province',
        country: 'china',
        location: [29.498214, 119.950164]
      },
      {
        id: 10,
        name: 'China - Jiangxi Province',
        country: 'china',
        location: [27.720665, 115.334603]
      },
      {
        id: 11,
        name: 'China - Sichuan Province ',
        country: 'china',
        location: [30.577055, 103.687341]
      },
      {
        id: 12,
        name: 'China - Tianjin Municipality',
        country: 'china',
        location: [39.326825, 117.358683]
      },
      {
        id: 13,
        name: 'China - Henan Province',
        country: 'china',
        location: [34.018220, 113.735292]
      },
      {
        id: 14,
        name: 'China - Hunan Province',
        country: 'china',
        location: [28.228362, 112.787731]
      },
      {
        id: 15,
        name: 'China - Shandong Province',
        country: 'china',
        location: [36.589681, 118.733284]
      },
      {
        id: 16,
        name: 'China - Yunnan Province',
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
        name: 'China - Hong Kong',
        country: 'china',
        location: [22.330435, 114.148980]
      },
      {
        id: 19,
        name: 'China - Macau',
        country: 'china',
        location: [22.193462, 113.547836]
      },
      {
        id: 20,
        name: 'USA',
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
        name: 'United Kingdom',
        country: 'uk',
        location: [54.731495, -2.675109]
      },
  ],
  situations: [
    dayOf20012020,
    dayOf21012020,
    dayOf23012020,
    dayOf24012020,
    dayOf25012020,
    dayOf26012020,
    dayOf27012020,
    dayOf28012020,
    dayOf29012020,
    dayOf30012020,
    dayOf31012020,
    dayOf01022020,
    dayOf02022020,
  ]
};

export default situationData;
