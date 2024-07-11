import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';

const countryNames = {
  US: '미국',
  CA: '캐나다',
  AU: '호주',
  GB: '영국',
  DE: '독일',
  FR: '프랑스',
  KR: '한국',};

function WorldMap() {
  const handleRegionClick = (event, code) => {
    const countryName = countryNames[code];
    window.open(`https://example.com/${code}`, '_blank', 'width=600,height=400');
  };

  return (
    <div style={{ margin: 'auto', width: '700px', height: '600px' }}>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: '700px',
          height: '600px',
        }}
        backgroundColor="#282c34"
        onRegionClick={handleRegionClick}
        onRegionTipShow={(event, el, code) => {
          const countryName = countryNames[code];
          el.html(`<strong>${countryName}</strong>`);
        }}
        series={{
          regions: [
            {
              attribute: 'fill',
            },
          ],
        }}
      />
    </div>
  );
}

export default WorldMap;
