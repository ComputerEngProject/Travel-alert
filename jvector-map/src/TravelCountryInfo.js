import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { countryNames } from './CountryData';

const getSelectedCountryName = (props) => {
  if (props) {
    return countryNames[props];
  }
  return null;
};

const TravelCountryInfo = ({ flightData }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [travelInfo, setTravelInfo] = useState(null);

  useEffect(() => {
    if (flightData) {
      setLoading(true);
      setError(null);
      setTravelInfo(null);

      axios.get(`http://localhost:3333/search/air?flight=${encodeURIComponent(flightData)}`)
        .then(response => {
          const data = response.data;
          if (data) {
            setTravelInfo(data);
          } else {
            setError('정보 없음');
          }
          setLoading(false);
        })
        .catch(error => {
          setError('API 요청 오류');
          setLoading(false);
        });
    }
  }, [flightData]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!travelInfo) {
    return null;
  }


  return (
    <div>
      <h1>{flightData}</h1>
      <p>출발지 : {getSelectedCountryName(travelInfo.data[0].departure.id)} || 위험 단계 {travelInfo.data[0].departure.lv} </p>
      <p>도착지 : {getSelectedCountryName(travelInfo.data[0].destination.id)} || 위험 단계 {travelInfo.data[0].destination.lv} </p>
    </div>
  );
};

export default TravelCountryInfo;
