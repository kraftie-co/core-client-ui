/* eslint-disable no-unused-vars */
import React from 'react';

import TopBar from './TopBar';
import SubBar from './SubBar';
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
