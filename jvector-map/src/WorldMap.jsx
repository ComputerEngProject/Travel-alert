import React, { useState } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import Modal from "react-modal";

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
  CY: '키프로스',
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
  WS: '삼화',
  TO: '통가',
  TV: '투발루',
  VU: '바누아투',
};

const continents = {
  Africa: ['DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV','CI', 'CF', 'TD', 'KM', 'CD', 'CG','DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'YT', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'TZ', 'TG', 'TN', 'UG', 'EH', 'ZA', 'ZM', 'ZW'],
  Asia: ['AF', 'AM', 'AZ', 'BH', 'BD', 'BT', 'BN', 'KH', 'CN', 'CY', 'GE', 'IN', 'ID', 'IR', 'IQ', 'IL', 'JP', 'JO', 'KZ', 'KW', 'KG', 'LA', 'LB', 'MY', 'MV', 'MN', 'MM', 'NP', 'KP', 'OM', 'PK', 'PS', 'PH', 'QA', 'SA', 'SG', 'KR', 'LK', 'SY', 'TJ', 'TH', 'TL', 'TR', 'TM', 'AE', 'UZ', 'VN', 'YE','TW'],
  Europe: ['AL', 'AD', 'AT', 'BA', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'MC', 'MD', 'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 'SM', 'RS', 'SK', 'SI', 'ES', 'SE', 'CH', 'UA', 'GB', 'VA','BY'],
  America: ['GL','AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE','CA', 'MX', 'US', 'GT', 'BZ', 'HN', 'SV', 'NI', 'CR', 'PA', 'JM', 'DO', 'HT', 'CU', 'BS', 'BB', 'GD', 'LC', 'KN', 'VC', 'TT'],
  Oceania: ['AU', 'FJ', 'FM', 'KI', 'MH', 'NR', 'NU', 'NZ', 'PW', 'PG', 'WS', 'TO', 'TV', 'VU'],
};

function WorldMap() {
  const [selectedContinent, setSelectedContinent] = useState('Asia');
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const openModal = (countryName) => {
    setSelectedCountry(countryName);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountry(null);
  }

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  const getContinentColors = () => {
    const continentCountries = continents[selectedContinent];
    return continentCountries.reduce((colors, countryCode) => {
      colors[countryCode] = '#CC3333';
      return colors;
    }, {});
  };

  const handleRegionOver = (event, code) => {
    setHoveredRegion(code);
  };

  const handleRegionOut = () => {
    setHoveredRegion(null);
  };

  const getRegionColors = () => {
    const baseColors = getContinentColors();
    if (hoveredRegion) {
      baseColors[hoveredRegion] = '#FF9999'; 
    }
    return baseColors;
  };

  return (
    <div style={{ margin: 'auto', width: '700px', height: '700px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="대륙 선택">대륙 선택 : </label>
        <select id="대륙 선택" onChange={handleContinentChange} value={selectedContinent}>
          {Object.keys(continents).map(continent => (
            <option key={continent} value={continent}>{continent}</option>
          ))}
        </select>
      </div>
      <div style={{ width: '700px', height: '600px' }}>
        <VectorMap
          map={worldMill}
          containerStyle={{
            width: '700px',
            height: '600px',
          }}
          backgroundColor="#282c34"
          series={{
            regions: [
              {
                values: getRegionColors(),
                attribute: 'fill',
              },
            ],
          }}
          onRegionClick={(event, code) => {
            const countryName = countryNames[code];
            if (countryName) {
              openModal(countryName);
            }
          }}
          onRegionTipShow={(event, el, code) => {
            const countryName = countryNames[code];
            el.html(`<strong>${countryName}</strong>`);
          }}
          onRegionOver={handleRegionOver}
          onRegionOut={handleRegionOut}
        />
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }
        }}
      >
        <h1>나라 여행 위험 정보</h1>
        <p>{selectedCountry}</p>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}

export default WorldMap;