import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import CountryInfoModal from './CountryInfoModal';
import { countryNames, continents } from './CountryData';
import helpIcon from './helpIcon.png';

function WorldMap3() {
  const navigate = useNavigate();
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [dangerCountryInfo, setDangerCountryInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setDangerCountryInfo([]);

    axios.get(`http://localhost:3333/search/top`)
      .then(response => {
        const data = response.data.data;
        setDangerCountryInfo(data);
        setLoading(false);
      })
      .catch(error => {
        setError('API 요청 오류');
        setLoading(false);
      });
  }, []);

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
    <div style={{ margin: 'auto', width: '700px', height: '700px' }}>
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
      <div>
        <p>위험 국가 1 : {getSelectedCountryName(dangerCountryInfo[0])}</p>
        <p>위험 국가 2 : {getSelectedCountryName(dangerCountryInfo[1])}</p>
        <p>위험 국가 3 : {getSelectedCountryName(dangerCountryInfo[2])}</p>
        <p>위험 국가 4 : {getSelectedCountryName(dangerCountryInfo[3])}</p>
        <p>위험 국가 5 : {getSelectedCountryName(dangerCountryInfo[4])}</p>
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
        여행 경보 단계<br/><br/>
        1단계 : 여행 유의(남색)<br />
        2단계 : 여행 자제(황색)<br />
        3단계 : 출국 권고(적색)<br />
        4단계 : 여행 금지(흑색)
      </div>
    </div>
  );
}

export default WorldMap3;
