import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { alarmList } from './CountryData';

Modal.setAppElement('#root'); 

const CountryInfoModal = ({ isOpen, onRequestClose, isoCode, countryName }) => {
  const [infoUrl, setInfoUrl] = useState(null);
  const [infoLv, setInfoLv] = useState(null);
  const [infoContent, setInfoContent] = useState(null);
  const [infoEmbassyName, setInfoEmbassyName] = useState(null);
  const [infoEmbassyAddress, setInfoEmbassyAddress] = useState(null);
  const [infoEmbassyTel, setInfoEmbassyTel] = useState(null);
  const [infoEmbassyEtel, setInfoEmbassyEtel] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isoCode) {
      console.log(isoCode)
      setLoading(true);
      axios.get(`http://localhost:3333/search/nara?&country=${encodeURIComponent(isoCode)}`)
        .then(response => {
          console.log(response.data)
          const { data } = response.data;
          if (data) {
            setInfoUrl(data[0].url);
            setInfoLv(data[0].lv);
            setInfoContent(data[0].content);
            setInfoEmbassyName(data[0].embassy.name);
            setInfoEmbassyAddress(data[0].embassy.address);
            setInfoEmbassyTel(data[0].embassy.tel);
            setInfoEmbassyEtel(data[0].embassy.etel);
          } else {
            setError('정보 없음');
          }
          setLoading(false);
        })
        .catch(error => {
          console.error('API 요청 오류:', error); 
          setLoading(false);
        });
    }
  }, [isoCode]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          marginTop: '5%',
          top: '40%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h1 style={{ fontSize: '1em' }}>여행 위험 정도</h1>
      <h1 style={{ fontSize: '1em' }}>{countryName}</h1>
      {loading ? (
        <p style={{ fontSize: '0.5em' }}>로딩 중...</p>
      ) : error ? (
        <p style={{ fontSize: '0.5em' }}>{error}</p>
      ) : (
        <img src={infoUrl} alt={`${countryName} 정보`} style={{ width: '500px', height: 'auto' }} />
      )}
      <p style={{ fontSize: '0.4em' }}>경보 단계 : {alarmList[infoLv]}</p>
      <p style={{ fontSize: '0.4em' }} className="infoContentText">
        &#9654; {infoContent}
      </p>
      <br></br>
      <p style={{ fontSize: '0.4em' }}>대사관 이름 : {infoEmbassyName}</p>
      <p style={{ fontSize: '0.4em' }}>대사관 주소 : {infoEmbassyAddress}</p>
      <p style={{ fontSize: '0.4em' }}>대사관 전화번호 : {infoEmbassyTel}</p>
      <p style={{ fontSize: '0.4em' }}>대사관 긴급 전화번호 : {infoEmbassyEtel}</p>
      <button 
        style={{ fontSize: '0.4em' }}
        onClick={onRequestClose}
      >닫기</button>
    </Modal>
  );
};

export default CountryInfoModal;
