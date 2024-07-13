import React, { useState, useEffect } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import CountryInfoModal from './CountryInfoModal';
import { countryNames, continents, continentCoordinates} from './CountryData';

function WorldMap() {
  const [selectedContinent, setSelectedContinent] = useState('Asia');
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

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

  const getSelectedCountryName = () => {
    if (selectedCountryCode) {
      return countryNames[selectedCountryCode];
    }
    return null;
  };


  return (
    <div style={{ margin: 'auto', width: '700px', height: '700px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="continentSelect">대륙 선택 : </label>
        <select id="continentSelect" onChange={handleContinentChange} value={selectedContinent}>
          {Object.keys(continents).map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
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
        countryName={getSelectedCountryName()}
      />
    </div>
  );
}

export default WorldMap;
