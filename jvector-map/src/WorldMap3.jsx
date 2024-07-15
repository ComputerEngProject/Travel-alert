import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import CountryInfoModal from './CountryInfoModal';
import { countryNames, countryCoordinates } from './CountryData';
import helpIcon from './helpIcon.png';

function WorldMap3() {
  const navigate = useNavigate();
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [dangerCountryInfo, setDangerCountryInfo] = useState([]);
  const [marker, setMarker] = useState({}); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(''); 

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1; 
      const day = now.getDate();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      const formattedDateTime = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초 기준`;
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    setLoading(true);
    setError(null);
    setDangerCountryInfo([]);

    axios.get(`http://localhost:3333/search/top`)
      .then(response => {
        const data = response.data.data;
        setDangerCountryInfo(data);
        const markers = addDangerCountryMarker(data); 
        setMarker(markers); 
        setLoading(false);
      })
      .catch(error => {
        setError('API 요청 오류');
        setLoading(false);
      });

    return () => clearInterval(intervalId);
  }, []);

  const addDangerCountryMarker = (dangerCountryInfo) => {
    let addMarker = {};
    dangerCountryInfo.forEach(countryCode => {
      let coordinates = countryCoordinates[countryCode];
      if (coordinates) {
        addMarker[countryCode] = {
          name: coordinates.name,
          latLng: coordinates.latLng
        };
      }
    });
    return addMarker;
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (dangerCountryInfo.length === 0) {
    return null;
  }

  const openModal = (isoCode) => {
    setSelectedCountryCode(isoCode);
    setIsOpen(true);
  };

  const handleRegionClick = (event, code) => {
    openModal(code);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountryCode(null);
  };

  const getDangerCountryColors = () => {
    return dangerCountryInfo.reduce((colors, countryCode) => {
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
    const baseColors = getDangerCountryColors();
    if (hoveredRegion) {
      baseColors[hoveredRegion] = '#FF9999';
    }
    return baseColors;
  };

  const getSelectedCountryName = (isoCode) => {
    if (isoCode) {
      return countryNames[isoCode];
    }
    return null;
  };

  const showHelpMessage = () => {
    const helpMessageElement = document.getElementById('helpMessage');
    helpMessageElement.style.display = 'block';
  };

  const hideHelpMessage = () => {
    const helpMessageElement = document.getElementById('helpMessage');
    helpMessageElement.style.display = 'none';
  };

  return (
    <div style={{ margin: 'auto', width: '1180px', height: '620px', position: 'relative'  }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        {currentDateTime}
      </div>
      <div style={{ width: '1180px', height: '620px' }}>
        <VectorMap
          map={worldMill}
          containerStyle={{
            width: '1180px',
            height: '620px',
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
          markers={marker}
          markerStyle={{
            initial: {
              fill: 'RED',
              stroke: 'none',
              r: 4
            },
            hover: {
              fill: 'ORANGE',
              stroke: 'none',
              r: 6
            }
          }}
          onRegionClick={(event, code) => handleRegionClick(event, code)}
          onRegionTipShow={(event, el, code) => {
            const countryName = countryNames[code];
            el.html(`<strong>${countryName}</strong>`);
          }}
          onRegionOver={handleRegionOver}
          onRegionOut={handleRegionOut}
        />
      </div>
      <CountryInfoModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        isoCode={selectedCountryCode}
        countryName={getSelectedCountryName(selectedCountryCode)}
      />
      <p>최근 5년간 재난으로 인한 인명 피해가 가장 많이 발생한 국가 입니다.</p>
      <div>
        <p>{getSelectedCountryName(dangerCountryInfo[0])}, {getSelectedCountryName(dangerCountryInfo[1])}, {getSelectedCountryName(dangerCountryInfo[2])}, {getSelectedCountryName(dangerCountryInfo[3])}, {getSelectedCountryName(dangerCountryInfo[4])}</p>
      </div>
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onMouseOver={showHelpMessage}
        onMouseOut={hideHelpMessage}
      >
        <img src={helpIcon} alt="Help" style={{ width: '30px', height: '30px' }} />
      </button>
      <div id="helpMessage" style={{
        display: 'none',
        position: 'fixed',
        bottom: '60px',
        right: '20px',
        backgroundColor: 'white',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}>
        여행 경보 단계<br/>
        <p style={{ fontSize: '0.8em', color: '#026ABF' }}>1단계(남색) / 여행 유의: 국내 대도시보다 상당히 높은 수준의 위험<br />
        → 신변안전 위험 요인 숙지·대비</p>
        <p style={{ fontSize: '0.8em', color: '#FCC33C' }}>2단계(황색) / 여행 자제: 국내 대도시보다 매우 높은 수준의 위험<br />
        → (여행예정자) 불필요한 여행 자제<br/>→ (체류자) 신변안전 특별유의</p>
        <p style={{ fontSize: '0.8em', color: '#C82613' }}>3단계(적색) / 출국 권고: 국민의 생명과 안전을 위협하는 심각한 수준의 위험<br />
        → (여행예정자) 여행 취소·연기<br/>→ (체류자) 긴요한 용무가 아닌 한 출국</p>
        <p style={{ fontSize: '0.8em', color: '#292929' }}>4단계(흑색) / 여행 금지: 국민의 생명과 안전을 위협하는 매우 심각한 수준의 위험<br />
        → (여행예정자) 여행금지 준수<br/>→ (체류자) 즉시 대피·철수</p>
        <p style={{ fontSize: '0.8em', color: '#E39289' }}>특별여행주의보: 단기적으로 긴급한 위험이 있는 경우<br />
        → (행동 요령) 2단계 이상 3단계 이하에 준함</p>
        * 여행 경보가 없는 경우 표시되지 않습니다.
      </div>
    </div>
  );
}

export default WorldMap3;
