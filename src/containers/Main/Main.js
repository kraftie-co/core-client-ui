/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './Main.styled';

function Main({ products, productsCount, numberOfPages, setPageNumber, filters, setFilters }) {
  const { t } = useTranslation();

  return (
    <Styled.MainContainer>
      <h1>{t('MainPage')}</h1>
      <h1>adfasdf</h1>
      {/* <FilterBar /> */}
      <Styled.ProductsGrid> asda</Styled.ProductsGrid>
    </Styled.MainContainer>
  );
}

export default Main;
