import React, { useState } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import CountryInfoModal from './CountryInfoModal';
import TravelCountryInfo from './TravelCountryInfo';
import { countryNames, countryCoordinates } from './CountryData';
import helpIcon from './helpIcon.png';

function WorldMap2() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [flightData, setFlightData] = useState('');
  const [submittedFlightData, setSubmittedFlightData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [departureMarker, setDepartureMarker] = useState(null);
  const [destinationMarker, setDestinationMarker] = useState(null);
  const [forceRender, setForceRender] = useState(0);
  const [error, setError] = useState('');

  const openModal = (isoCode) => {
    setSelectedCountryCode(isoCode);
    setIsOpen(true);
  };

  const handleRegionClick = (event, code) => {
    openModal(code);
  };

  const handleFlightDataSubmit = () => {
    if (!(/^[A-Z,0-9]{3,7}$/.test(flightData))) {
      setError('유효하지 않은 편명입니다.');
      return;
    }
    setError('');
    setSubmittedFlightData(flightData);
    setFlightData('');
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCountryCode(null);
  };

  const handleRegionOver = (event, code) => {
    setHoveredRegion(code);
  };

  const handleRegionOut = () => {
    setHoveredRegion(null);
  };

  const getSelectedCountryName = () => {
    if (selectedCountryCode) {
      return countryNames[selectedCountryCode];
    }
    return null;
  };

  const handleCountryCodesExtracted = (departureId, destinationId) => {
    const departure = countryCoordinates[departureId];
    const destination = countryCoordinates[destinationId];

    setDepartureMarker(departure ? {
      name: departure.name,
      latLng: departure.latLng
    } : null);
    setDestinationMarker(destination ? {
      name: destination.name,
      latLng: destination.latLng
    } : null);

    setForceRender(prev => prev + 1); 
  };

  const markers = [
    departureMarker,
    destinationMarker
  ].filter(marker => marker);

  const showHelpMessage = () => {
    const helpMessageElement = document.getElementById('helpMessage');
    helpMessageElement.style.display = 'block';
  };

  const hideHelpMessage = () => {
    const helpMessageElement = document.getElementById('helpMessage');
    helpMessageElement.style.display = 'none';
  };

  return (
    <div style={{ margin: 'auto', width: '1180px', height: '620px', position: 'relative' }}>
      <div style={{ width: '1180px', height: '620px' }}>
        <VectorMap
          key={forceRender}
          map={worldMill}
          containerStyle={{
            width: '1180px',
            height: '620px',
          }}
          backgroundColor="#282c34"
          markers={markers}
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
          onRegionClick={handleRegionClick}
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
        countryName={getSelectedCountryName()}
      />
      <div>
        <input
          value={flightData}
          onChange={(e) => setFlightData(e.target.value.toUpperCase())}
        />
        <button onClick={handleFlightDataSubmit}>입력</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      {submittedFlightData && (
        <TravelCountryInfo
          flightData={submittedFlightData}
          onCountryCodesExtracted={handleCountryCodesExtracted}
        />
      )}
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

export default WorldMap2;
