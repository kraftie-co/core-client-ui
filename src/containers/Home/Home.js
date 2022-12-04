import React from 'react';
import Navbar from '../../components/Navbar';
//import { useTranslation } from 'react-i18next';

import * as Styled from './Home.styled';

function Home() {
  // const { t } = useTranslation();

  return (
    <Styled.HomeContainer>
      <Navbar></Navbar>
    </Styled.HomeContainer>
  );
}

export default Home;
