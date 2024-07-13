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
    console.log(`출발지 ID: ${departureId}, 도착지 ID: ${destinationId}`);

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
        여행 경보 단계<br/><br/>
        1단계 : 여행 유의(남색)<br />
        2단계 : 여행 자제(황색)<br />
        3단계 : 출국 권고(적색)<br />
        4단계 : 여행 금지(흑색)
      </div>
    </div>
  );
}

export default WorldMap2;
