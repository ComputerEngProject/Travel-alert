import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const CountryInfoModal = ({ isOpen, onRequestClose, isoCode, countryName, continent  }) => {
  const [infoUrl, setInfoUrl] = useState(null);
  const [infoLv, setInfoLv] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isoCode) {
      console.log(isoCode)
      setLoading(true);
      axios.get(`http://175.120.206.28:3333/search/nara?&country=${encodeURIComponent(isoCode)}`)
        .then(response => {
          console.log(response.data)
          const { data } = response.data;
          if (data) {
            setInfoUrl(data[0].url);
            setInfoLv(data[0].lv);
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
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h1>여행 위험 정도</h1>
      <p>{countryName}</p>
      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <img src={infoUrl} alt={`${countryName} 정보`} style={{ width: '500px', height: 'auto' }} />
      )}
      <p>경보 단계 : {infoLv}</p>
      <button onClick={onRequestClose}>닫기</button>
    </Modal>
  );
};

export default CountryInfoModal;
