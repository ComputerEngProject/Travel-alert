const countryNames = {
  // 아시아
  AF: '아프가니스탄',
  AM: '아르메니아',
  AZ: '아제르바이잔',
  BH: '바레인',
  BD: '방글라데시',
  BT: '부탄',
  BN: '브루나이',
  KH: '캄보디아',
  CN: '중국',
  GE: '조지아',
  IN: '인도',
  ID: '인도네시아',
  IR: '이란',
  IQ: '이라크',
  IL: '이스라엘',
  JP: '일본',
  JO: '요르단',
  KZ: '카자흐스탄',
  KW: '쿠웨이트',
  KG: '키르기스스탄',
  LA: '라오스',
  LB: '레바논',
  MY: '말레이시아',
  MV: '몰디브',
  MN: '몽골',
  MM: '미얀마',
  NP: '네팔',
  KP: '조선민주주의인민공화국',
  OM: '오만',
  PK: '파키스탄',
  PS: '팔레스타인',
  PH: '필리핀',
  QA: '카타르',
  SA: '사우디아라비아',
  SG: '싱가포르',
  KR: '대한민국',
  LK: '스리랑카',
  SY: '시리아',
  TJ: '타지키스탄',
  TH: '태국',
  TL: '동티모르',
  TR: '터키',
  TM: '투르크메니스탄',
  AE: '아랍에미리트',
  UZ: '우즈베키스탄',
  VN: '베트남',
  YE: '예멘',
  TW: '대만',

  // 아프리카
  CI: '코트디부아르',
  DZ: '알제리',
  AO: '앙골라',
  BJ: '베닌',
  BW: '보츠와나',
  BF: '부르키나파소',
  BI: '부룬디',
  CM: '카메룬',
  CV: '카보베르데',
  CF: '중앙아프리카공화국',
  TD: '차드',
  KM: '코모로',
  CD: '콩고 민주 공화국',
  CG: '콩고 공화국',
  DJ: '지부티',
  EG: '이집트',
  GQ: '적도 기니',
  ER: '에리트레아',
  SZ: '스와질란드',
  ET: '에티오피아',
  GA: '가봉',
  GM: '감비아',
  GH: '가나',
  GN: '기니',
  GW: '기니비사우',
  KE: '케냐',
  LS: '레소토',
  LR: '라이베리아',
  LY: '리비아',
  MG: '마다가스카르',
  MW: '말라위',
  ML: '말리',
  MR: '모리타니아',
  MU: '모리셔스',
  YT: '마요트',
  MA: '모로코',
  MZ: '모잠비크',
  NA: '나미비아',
  NE: '니제르',
  NG: '나이지리아',
  RW: '르완다',
  ST: '상투메프린시페',
  SN: '세네갈',
  SC: '세이셸',
  SL: '시에라리온',
  SO: '소말리아',
  ZA: '남아프리카공화국',
  SS: '남수단',
  SD: '수단',
  TZ: '탄자니아',
  TG: '토고',
  TN: '튀니지',
  UG: '우간다',
  EH: '서사하라',
  ZM: '잠비아',
  ZW: '짐바브웨',

  // 유럽
  BY: '벨라루스',
  AL: '알바니아',
  AD: '안도라',
  AT: '오스트리아',
  BA: '보스니아 헤르체고비나',
  BE: '벨기에',
  BG: '불가리아',
  HR: '크로아티아',
  CY: '키프로스',
  CZ: '체코',
  DK: '덴마크',
  EE: '에스토니아',
  FI: '핀란드',
  FR: '프랑스',
  DE: '독일',
  GR: '그리스',
  HU: '헝가리',
  IS: '아이슬란드',
  IE: '아일랜드',
  IT: '이탈리아',
  LV: '라트비아',
  LI: '리히텐슈타인',
  LT: '리투아니아',
  LU: '룩셈부르크',
  MT: '몰타',
  MC: '모나코',
  MD: '몰도바',
  ME: '몬테네그로',
  NL: '네덜란드',
  MK: '마케도니아',
  NO: '노르웨이',
  PL: '폴란드',
  PT: '포르투갈',
  RO: '루마니아',
  RU: '러시아',
  SM: '산마리노',
  RS: '세르비아',
  SK: '슬로바키아',
  SI: '슬로베니아',
  ES: '스페인',
  SE: '스웨덴',
  CH: '스위스',
  UA: '우크라이나',
  GB: '영국',
  VA: '바티칸 시국',

  // 미주
  GL:'그린란드',
  CA: '캐나다',
  MX: '멕시코',
  US: '미국',
  GT: '과테말라',
  BZ: '벨리즈',
  HN: '온두라스',
  SV: '엘살바도르',
  NI: '니카라과',
  CR: '코스타리카',
  PA: '파나마',
  JM: '자메이카',
  PR: '도미니카 연방',
  DO: '도미니카 공화국',
  HT: '아이티',
  CU: '쿠바',
  BS: '바하마',
  BB: '바베이도스',
  GD: '그레나다',
  LC: '세인트루시아',
  KN: '세인트키츠 네비스',
  VC: '세인트빈센트 그레나딘',
  TT: '트리니다드 토바고',
  AR: '아르헨티나',
  BO: '볼리비아',
  BR: '브라질',
  CL: '칠레',
  CO: '콜롬비아',
  EC: '에콰도르',
  GY: '가이아나',
  PY: '파라과이',
  PE: '페루',
  SR: '수리남',
  UY: '우루과이',
  VE: '베네수엘라',
  FK: '포클랜드 제도',
  CW: '퀴라소',

  // 오세아니아
  AU: '호주',
  FJ: '피지',
  FM: '미크로네시아',
  KI: '키리바시',
  MH: '마샬 제도',
  NR: '나우루',
  NU: '니우에',
  NZ: '뉴질랜드',
  PW: '팔라우',
  PG: '파푸아뉴기니',
  WS: '사모아',
  TO: '통가',
  TV: '투발루',
  VU: '바누아투',
  SB: '솔로몬 제도',
  CK: '쿡 제도',
  NC: '뉴칼레도니아',
};

const continents = {
  Africa: ['DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CI', 'CF', 'TD', 'KM', 'CD', 'CG', 'DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'TZ', 'TG', 'TN', 'UG', 'EH', 'ZA', 'ZM', 'ZW'],
  Asia: ['AF', 'AM', 'AZ', 'BH', 'BD', 'BT', 'BN', 'KH', 'CN','GE' , 'IN', 'ID', 'IR', 'IQ', 'IL', 'JP', 'JO', 'KZ', 'KW', 'KG', 'LA', 'LB', 'MY', 'MV', 'MN', 'MM', 'NP', 'KP', 'OM', 'PK', 'PS', 'PH', 'QA', 'SA', 'SG', 'KR', 'LK', 'SY', 'TJ', 'TH', 'TL', 'TR', 'TM', 'AE', 'UZ', 'VN', 'YE', 'TW'],
  Europe: ['AL', 'AD', 'AT', 'BA', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'MC', 'MD', 'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 'SM', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'UA', 'GB', 'VA', 'BY'],
  America: ['GL', 'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'CA', 'MX', 'US', 'GT', 'BZ', 'HN', 'SV', 'NI', 'CR', 'PA', 'JM', 'DO', 'HT', 'CU', 'BS', 'BB', 'GD', 'LC', 'KN', 'VC', 'TT','PR','FK','CW'],
  Oceania: ['AU', 'FJ', 'FM', 'KI', 'MH', 'NR', 'NU', 'NZ', 'PW', 'PG', 'WS', 'TO', 'TV', 'VU','CK','NC'],
};

const continentCoordinates = {
  Africa: [
    { name: "알제리", latLng: [28.0339, 1.6596] }, // Algeria
    { name: "앙골라", latLng: [-11.2027, 17.8739] }, // Angola
    { name: "베냉", latLng: [9.3085, 2.3158] }, // Benin
    { name: "보츠와나", latLng: [-22.3285, 24.6849] }, // Botswana
    { name: "부르키나파소", latLng: [12.2383, -1.5616] }, // Burkina Faso
    { name: "부룬디", latLng: [-3.3731, 29.9189] }, // Burundi
    { name: "카메룬", latLng: [7.3697, 12.3547] }, // Cameroon
    { name: "카보베르데", latLng: [16.0021, -24.0132] }, // Cape Verde
    { name: "코트디부아르", latLng: [7.5399, -5.5471] }, // Côte d'Ivoire
    { name: "중앙아프리카공화국", latLng: [6.6111, 20.9394] }, // Central African Republic
    { name: "차드", latLng: [15.4542, 18.7322] }, // Chad
    { name: "코모로", latLng: [-11.6455, 43.3333] }, // Comoros
    { name: "콩고 민주 공화국", latLng: [-4.0383, 21.7587] }, // Democratic Republic of the Congo
    { name: "콩고 공화국", latLng: [-0.2280, 15.8270] }, // Republic of the Congo
    { name: "지부티", latLng: [11.8251, 42.5903] }, // Djibouti
    { name: "이집트", latLng: [26.8205, 30.8025] }, // Egypt
    { name: "적도 기니", latLng: [1.6508, 10.2679] }, // Equatorial Guinea
    { name: "에리트레아", latLng: [15.1794, 39.7823] }, // Eritrea
    { name: "에스와티니", latLng: [-26.5225, 31.4659] }, // Eswatini
    { name: "에티오피아", latLng: [9.1450, 40.4897] }, // Ethiopia
    { name: "가봉", latLng: [-0.8037, 11.6094] }, // Gabon
    { name: "감비아", latLng: [13.4432, -15.3101] }, // Gambia
    { name: "가나", latLng: [7.0469, -0.6690] }, // Ghana
    { name: "기니", latLng: [9.9456, -9.6966] }, // Guinea
    { name: "기니비사우", latLng: [11.8037, -15.1804] }, // Guinea-Bissau
    { name: "케냐", latLng: [-0.0236, 37.9062] }, // Kenya
    { name: "레소토", latLng: [-29.6094, 28.2336] }, // Lesotho
    { name: "라이베리아", latLng: [6.4281, -9.4295] }, // Liberia
    { name: "리비아", latLng: [26.3351, 17.2283] }, // Libya
    { name: "마다가스카르", latLng: [-18.7669, 46.8691] }, // Madagascar
    { name: "말라위", latLng: [-13.2543, 34.3015] }, // Malawi
    { name: "말리", latLng: [17.5707, -3.9962] }, // Mali
    { name: "모리타니", latLng: [21.0079, -10.9408] }, // Mauritania
    { name: "모리셔스", latLng: [-20.3484, 57.5522] }, // Mauritius
    { name: "마요트", latLng: [-12.8275, 45.1662] }, // Mayotte
    { name: "모로코", latLng: [31.7917, -7.0926] }, // Morocco
    { name: "모잠비크", latLng: [-18.6657, 35.5296] }, // Mozambique
    { name: "나미비아", latLng: [-22.9576, 18.4904] }, // Namibia
    { name: "니제르", latLng: [17.6078, 8.0817] }, // Niger
    { name: "나이지리아", latLng: [9.0820, 8.6753] }, // Nigeria
    { name: "르완다", latLng: [-1.9403, 29.8739] }, // Rwanda
    { name: "상투메 프린시페", latLng: [0.1864, 6.6131] }, // São Tomé and Príncipe
    { name: "세네갈", latLng: [14.4974, -14.4524] }, // Senegal
    { name: "세이셸", latLng: [-4.6796, 55.4919] }, // Seychelles
    { name: "시에라리온", latLng: [8.4600, -11.7799] }, // Sierra Leone
    { name: "소말리아", latLng: [5.1521, 46.1996] }, // Somalia
    { name: "남아프리카 공화국", latLng: [-30.5595, 22.9375] }, // South Africa
    { name: "수단", latLng: [12.8628, 30.2176] }, // Sudan
    { name: "탄자니아", latLng: [-6.3690, 34.8888] }, // Tanzania
    { name: "토고", latLng: [8.6195, 0.8248] }, // Togo
    { name: "튀니지", latLng: [33.8869, 9.5375] }, // Tunisia
    { name: "우간다", latLng: [1.3733, 32.2903] }, // Uganda
    { name: "서사하라", latLng: [24.2155, -12.8858] }, // Western Sahara
    { name: "잠비아", latLng: [-13.1339, 27.8493] }, // Zambia
    { name: "짐바브웨", latLng: [-19.0154, 29.1549] } // Zimbabwe
  ],
  Asia: [
    { name: "아프가니스탄", latLng: [33.9391, 67.7099] }, // Afghanistan
    { name: "아르메니아", latLng: [40.0691, 45.0382] }, // Armenia
    { name: "아제르바이잔", latLng: [40.1431, 47.5769] }, // Azerbaijan
    { name: "바레인", latLng: [26.2004, 50.4478] }, // Bahrain
    { name: "방글라데시", latLng: [23.685] }, // Bangladesh
    { name: "부탄", latLng: [27.5142, 90.4336] }, // Bhutan
    { name: "브루나이", latLng: [4.5353, 114.7277] }, // Brunei
    { name: "캄보디아", latLng: [12.5657, 104.9910] }, // Cambodia
    { name: "중국", latLng: [35.8617, 104.1954] }, // China
    { name: "조지아", latLng: [41.6383, 42.6064] }, // Georgia
    { name: "인도", latLng: [20.5937, 78.9629] }, // India
    { name: "인도네시아", latLng: [-0.7893, 113.9213] }, // Indonesia
    { name: "이란", latLng: [32.4279, 53.6880] }, // Iran
    { name: "이라크", latLng: [33.2232, 43.6793] }, // Iraq
    { name: "이스라엘", latLng: [31.0461, 34.8516] }, // Israel
    { name: "일본", latLng: [36.2048, 138.2529] }, // Japan
    { name: "요르단", latLng: [30.5852, 36.2384] }, // Jordan
    { name: "카자흐스탄", latLng: [48.0196, 66.9237] }, // Kazakhstan
    { name: "쿠웨이트", latLng: [29.3117, 47.4818] }, // Kuwait
    { name: "키르기스스탄", latLng: [41.2044, 74.7661] }, // Kyrgyzstan
    { name: "라오스", latLng: [19.8563, 102.4955] }, // Laos
    { name: "레바논", latLng: [33.8547, 35.8623] }, // Lebanon
    { name: "말레이시아", latLng: [4.2105, 101.9758] }, // Malaysia
    { name: "몰디브", latLng: [3.2028, 73.2207] }, // Maldives
    { name: "몽골", latLng: [46.8625, 103.8467] }, // Mongolia
    { name: "미얀마", latLng: [21.9139, 95.9560] }, // Myanmar
    { name: "네팔", latLng: [28.3949, 84.1240] }, // Nepal
    { name: "북한", latLng: [40.3399, 127.5101] }, // North Korea
    { name: "오만", latLng: [21.5126, 55.9233] }, // Oman
    { name: "파키스탄", latLng: [30.3753, 69.3451] }, // Pakistan
    { name: "팔레스타인", latLng: [31.9474, 35.3026] }, // Palestine
    { name: "필리핀", latLng: [12.8797, 121.7740] }, // Philippines
    { name: "카타르", latLng: [25.2769, 51.5200] }, // Qatar
    { name: "사우디아라비아", latLng: [23.8859, 45.0792] }, // Saudi Arabia
    { name: "싱가포르", latLng: [1.3521, 103.8198] }, // Singapore
    { name: "한국", latLng: [35.9078, 127.7669] }, // South Korea
    { name: "스리랑카", latLng: [7.8731, 80.7718] }, // Sri Lanka
    { name: "시리아", latLng: [34.8021, 38.9968] }, // Syria
    { name: "타지키스탄", latLng: [38.8610, 71.2761] }, // Tajikistan
    { name: "태국", latLng: [15.8700, 100.9925] }, // Thailand
    { name: "동티모르", latLng: [-8.8742, 125.7275] }, // Timor-Leste
    { name: "터키", latLng: [38.9637, 35.2433] }, // Turkey
    { name: "투르크메니스탄", latLng: [38.9697, 59.5560] }, // Turkmenistan
    { name: "아랍에미리트", latLng: [23.4241, 53.8478] }, // United Arab Emirates
    { name: "우즈베키스탄", latLng: [41.3775, 64.5853] }, // Uzbekistan
    { name: "베트남", latLng: [14.0583, 108.2772] }, // Vietnam
    { name: "예멘", latLng: [15.5526, 48.5164] }, // Yemen
    { name: "대만", latLng: [23.6978, 120.9605] } // Taiwan
  ],
  travel: [
    { name: "한국", latLng: [35.9078, 127.7669] }, // South Korea
    { name: "대만", latLng: [23.6978, 120.9605] } // Taiwan
  ],
  Europe: [
    { name: "알바니아", latLng: [41.1533, 20.1683] }, // Albania
    { name: "안도라", latLng: [42.5462, 1.6016] }, // Andorra
    { name: "오스트리아", latLng: [47.5162, 14.5501] }, // Austria
    { name: "보스니아 헤르체고비나", latLng: [43.9159, 17.6791] }, // Bosnia and Herzegovina
    { name: "벨기에", latLng: [50.8503, 4.3517] }, // Belgium
    { name: "불가리아", latLng: [42.7339, 25.4858] }, // Bulgaria
    { name: "크로아티아", latLng: [45.1, 15.2] }, // Croatia
    { name: "키프로스", latLng: [35.1264, 33.4299] }, // Cyprus
    { name: "체코", latLng: [49.8175, 15.4730] }, // Czech Republic
    { name: "덴마크", latLng: [56.2639, 9.5018] }, // Denmark
    { name: "에스토니아", latLng: [58.5953, 25.0136] }, // Estonia
    { name: "핀란드", latLng: [61.9241, 25.7482] }, // Finland
    { name: "프랑스", latLng: [46.6034, 1.8883] }, // France
    { name: "독일", latLng: [51.1657, 10.4515] }, // Germany
    { name: "그리스", latLng: [39.0742, 21.8243] }, // Greece
    { name: "헝가리", latLng: [47.1625, 19.5033] }, // Hungary
    { name: "아이슬란드", latLng: [64.9631, -19.0208] }, // Iceland
    { name: "아일랜드", latLng: [53.4129, -8.2439] }, // Ireland
    { name: "이탈리아", latLng: [41.8719, 12.5674] }, // Italy
    { name: "라트비아", latLng: [56.8796, 24.6032] }, // Latvia
    { name: "리히텐슈타인", latLng: [47.2660, 9.5500] }, // Liechtenstein
    { name: "리투아니아", latLng: [55.1694, 23.3810] }, // Lithuania
    { name: "룩셈부르크", latLng: [49.8153, 6.1296] }, // Luxembourg
    { name: "몰타", latLng: [35.9375, 14.3754] }, // Malta
    { name: "모나코", latLng: [43.7333, 7.4167] }, // Monaco
    { name: "몰도바", latLng: [47.4116, 28.3699] }, // Moldova
    { name: "몬테네그로", latLng: [42.7087, 19.3744] }, // Montenegro
    { name: "네덜란드", latLng: [52.3676, 4.9041] }, // Netherlands
    { name: "북마케도니아", latLng: [41.6086, 21.7453] }, // North Macedonia
    { name: "노르웨이", latLng: [60.4720, 8.4689] }, // Norway
    { name: "폴란드", latLng: [51.9194, 19.1451] }, // Poland
    { name: "포르투갈", latLng: [39.3999, -8.2245] }, // Portugal
    { name: "루마니아", latLng: [45.9432, 24.9668] }, // Romania
    { name: "러시아", latLng: [61.5240, 105.3188] }, // Russia
    { name: "산마리노", latLng: [43.9333, 12.4500] }, // San Marino
    { name: "세르비아", latLng: [44.0165, 21.0059] }, // Serbia
    { name: "슬로바키아", latLng: [48.6690, 19.6990] }, // Slovakia
    { name: "슬로베니아", latLng: [46.1512, 14.9955] }, // Slovenia
    { name: "스페인", latLng: [40.4637, -3.7492] }, // Spain
    { name: "스웨덴", latLng: [60.1282, 18.6435] }, // Sweden
    { name: "스위스", latLng: [46.8182, 8.2275] }, // Switzerland
    { name: "우크라이나", latLng: [48.3794, 31.1656] }, // Ukraine
    { name: "영국", latLng: [55.3781, -3.4360] }, // United Kingdom
    { name: "바티칸 시국", latLng: [41.9029, 12.4534] } // Vatican City
  ],
  America: [
    { name: "그레나다", latLng: [32.3800, -64.6790] }, // Grenada
    { name: "과테말라", latLng: [15.7835, -90.2308] }, // Guatemala
    { name: "가이아나", latLng: [4.8604, -58.9302] }, // Guyana
    { name: "브라질", latLng: [-14.2350, -51.9253] }, // Brazil
    { name: "볼리비아", latLng: [-16.5000, -68.1193] }, // Bolivia
    { name: "아르헨티나", latLng: [-38.4161, -63.6167] }, // Argentina
    { name: "콜롬비아", latLng: [4.5709, -74.2973] }, // Colombia
    { name: "에콰도르", latLng: [-1.8312, -78.1834] }, // Ecuador
    { name: "우루과이", latLng: [-32.5228, -55.7652] }, // Uruguay
    { name: "페루", latLng: [-9.1900, -75.0152] }, // Peru
    { name: "수리남", latLng: [3.9193, -56.0278] }, // Suriname
    { name: "베네수엘라", latLng: [6.4238, -66.5897] }, // Venezuela
    { name: "캐나다", latLng: [56.1304, -106.3468] }, // Canada
    { name: "멕시코", latLng: [23.6345, -102.5528] }, // Mexico
    { name: "미국", latLng: [37.0902, -95.7129] }, // United States
    { name: "온두라스", latLng: [14.1000, -87.0000] }, // Honduras
    { name: "엘살바도르", latLng: [13.7942, -88.8965] }, // El Salvador
    { name: "니카라과", latLng: [12.8654, -85.2072] }, // Nicaragua
    { name: "코스타리카", latLng: [9.7489, -83.7534] }, // Costa Rica
    { name: "파나마", latLng: [8.9824, -79.5190] }, // Panama
    { name: "자메이카", latLng: [18.1096, -77.2975] }, // Jamaica
    { name: "도미니카 공화국", latLng: [18.7357, -70.1627] }, // Dominican Republic
    { name: "아이티", latLng: [18.9712, -72.2852] }, // Haiti
    { name: "쿠바", latLng: [21.5218, -77.7812] }, // Cuba
    { name: "바하마", latLng: [25.0343, -77.3963] }, // Bahamas
    { name: "바베이도스", latLng: [13.1939, -59.5432] }, // Barbados
    { name: "세인트루시아", latLng: [13.9094, -60.9780] }, // Saint Lucia
    { name: "세인트빈센트 그레나딘", latLng: [12.9843, -61.2872] }, // Saint Vincent and the Grenadines
    { name: "세인트키츠 네비스", latLng: [17.3578, -62.7829] }, // Saint Kitts and Nevis
    { name: "트리니다드 토바고", latLng: [10.6918, -61.2225] }, // Trinidad and Tobago
    { name: "푸에르토리코", latLng: [18.2208, -66.5901] }, // Puerto Rico
    { name: "포클랜드 제도", latLng: [-51.7963, -59.5236] }, // Falkland Islands
    { name: "큐라소", latLng: [12.1696, -68.9900] }, // Curaçao
    { name: "도미니카 연방", latLng: [15.4144, -61.3700] },
  ],
  Oceania: [
    { name: "오스트레일리아", latLng: [-25.2744, 133.7751] }, // Australia
    { name: "피지", latLng: [-17.7134, 178.0650] }, // Fiji
    { name: "미크로네시아 연방", latLng: [7.4256, 150.5508] }, // Micronesia
    { name: "키리바시", latLng: [-3.3704, -168.7340] }, // Kiribati
    { name: "마셜 제도", latLng: [7.1315, 171.1845] }, // Marshall Islands
    { name: "나우루", latLng: [-0.5228, 166.9315] }, // Nauru
    { name: "니우에", latLng: [-19.0545, -169.8672] }, // Niue
    { name: "뉴질랜드", latLng: [-40.9006, 174.8860] }, // New Zealand
    { name: "팔라우", latLng: [7.5149, 134.5825] }, // Palau
    { name: "파푸아뉴기니", latLng: [-6.3149, 143.9555] }, // Papua New Guinea
    { name: "사모아", latLng: [-13.7590, -172.1046] }, // Samoa
    { name: "통가", latLng: [-21.1789, -175.1982] }, // Tonga
    { name: "투발루", latLng: [-7.1095, 179.1947] }, // Tuvalu
    { name: "바누아투", latLng: [-15.3767, 166.9591] }, // Vanuatu
    { name: "쿡 제도", latLng: [-21.2367, -159.7776] }, // Cook Islands
    { name: "뉴칼레도니아", latLng: [-20.9043, 165.6180] } // New Caledonia
  ]
};

export { countryNames, continents, continentCoordinates };