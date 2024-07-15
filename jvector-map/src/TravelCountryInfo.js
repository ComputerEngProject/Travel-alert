import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { countryNames } from './CountryData';
import { alarmList } from './CountryData';

const getSelectedCountryName = (props) => {
  if (props) {
    return countryNames[props];
  }
  return null;
};

const TravelCountryInfo = ({ flightData, onCountryCodesExtracted }) => {
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
            const departureId = data.data[0].departure.id;
            const destinationId = data.data[0].destination.id;
            onCountryCodesExtracted(departureId, destinationId); // 부모 컴포넌트로 ISO 코드 전달
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
      <style>
        {`
          .FirstColor {
            color: #026ABF;
          }
          .SecondColor {
            color: #FCC33C;
          }
          .ThirdColor {
            color: #C82613;
          }
          .FourthColor {
            color: #292929;
          }
        `}
      </style>
      <h1>{flightData}</h1>
      <p>↓ 출발지: {getSelectedCountryName(travelInfo.data[0].departure.id)}{<p class={!travelInfo.data[0].departure.lv || travelInfo.data[0].departure.lv === 0 ? 'NoneColor' : travelInfo.data[0].departure.lv === 1 ? 'FirstColor' : travelInfo.data[0].departure.lv === 2 ? 'SecondColor' : travelInfo.data[0].departure.lv === 3 ? 'ThirdColor' : travelInfo.data[0].departure.lv === 4 ? 'FourthColor' : ''}><b>{alarmList[travelInfo.data[0].departure.lv]}</b></p>}</p>
      <p>↓ 도착지: {getSelectedCountryName(travelInfo.data[0].destination.id)}{<p class={!travelInfo.data[0].destination.lv || travelInfo.data[0].destination.lv === 0 ? 'NoneColor' : travelInfo.data[0].destination.lv === 1 ? 'FirstColor' : travelInfo.data[0].destination.lv === 2 ? 'SecondColor' : travelInfo.data[0].destination.lv === 3 ? 'ThirdColor' : travelInfo.data[0].destination.lv === 4 ? 'FourthColor' : ''}><b>{alarmList[travelInfo.data[0].destination.lv]}</b></p>}</p>
    </div>
  );
};

export default TravelCountryInfo;
