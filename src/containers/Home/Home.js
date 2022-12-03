import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as Styled from './Home.styled';

function Home() {
  const { t } = useTranslation();
  const isLoggedIn = localStorage.getItem('user-token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  });

  return (
    <Styled.HomeContainer>
      <h1>{t('HELLO')}</h1>
    </Styled.HomeContainer>
  );
}

export default Home;
