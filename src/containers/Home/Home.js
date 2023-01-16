import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './Home.styled';
import { load } from '../../utils/localStorage';

function Home() {
  const { t } = useTranslation();
  const isLoggedIn = load('user-token');

  useEffect(() => {
    // TODO: Client should be able to access without user-token, meanwhile vendor should not
    console.log(isLoggedIn);
  });

  return (
    <Styled.HomeContainer>
      <h1>{t('HELLO')}</h1>
    </Styled.HomeContainer>
  );
}

export default Home;
