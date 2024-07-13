import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstScreen.css';

const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/WorldMap');
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머 제거
  }, [navigate]);

  return (
    <div className="first-screen-container">
      <img src="/Ministry of Foreign Affairs.png" alt="외교부 로고" className="logo" />
    </div>
  );
};

export default FirstScreen;
