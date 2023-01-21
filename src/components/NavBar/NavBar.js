/* eslint-disable no-unused-vars */
import React from 'react';

import TopBar from '../TopBar/index';
import SubBar from '../SubBar/index';
import * as Styled from './NavBar.styled';

function NavBar() {
  return (
    <Styled.Container>
      <TopBar />
      <SubBar />
    </Styled.Container>
  );
}

export default NavBar;
