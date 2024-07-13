import React, { useState } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import CountryInfoModal from './CountryInfoModal';
import TravelCountryInfo from './TravelCountryInfo';
import { countryNames, continentCoordinates } from './CountryData';
import helpIcon from './helpIcon.png';

function WorldMap2() {
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [flightData, setFlightData] = useState('');
  const [submittedFlightData, setSubmittedFlightData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const [markers, setMarkers] = useState(continentCoordinates['travel']);
  const [forceRender, setForceRender] = useState(0);
  const [helpMessage, setHelpMessage] = useState('');

  const openModal = (isoCode) => {
    setSelectedCountryCode(isoCode);
    setIsOpen(true);
  };

  const handleRegionClick = (event, code) => {
    openModal(code);
  };

  const handleFlightDataSubmit = () => {
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

  const handleHelpButtonClick = () => {
    if (helpMessage) {
      setHelpMessage('');
    } else {
      setHelpMessage("이미지 or 정보 추가");
    }
  };

  return (
    <div style={{ margin: 'auto', width: '700px', height: '700px', position: 'relative' }}>
      <div style={{ width: '700px', height: '600px' }}>
        <VectorMap
          key={forceRender} 
          map={worldMill}
          containerStyle={{
            width: '700px',
            height: '600px',
          }}
          backgroundColor="#282c34"
          markers={markers}
          markerStyle={{
            initial: {
              fill: 'blue',
            },
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
          onChange={(e) => setFlightData(e.target.value)}
        />
        <button onClick={handleFlightDataSubmit}>입력</button>
      </div>
      {submittedFlightData && <TravelCountryInfo flightData={submittedFlightData} />}
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
        onClick={handleHelpButtonClick}
      >
        <img src={helpIcon} alt="Help" style={{ width: '30px', height: '30px' }} />
      </button>
      {helpMessage && (
        <div style={{
          position: 'fixed',
          bottom: '60px',
          right: '20px',
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}>
          {helpMessage}
        </div>
      )}
    </div>
  );
}

export default WorldMap2;
