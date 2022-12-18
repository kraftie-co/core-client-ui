import styled from 'styled-components';
import { Flex } from 'rebass';

const MainContainer = styled(Flex).attrs(({ theme }) => ({
  backgroundColor: 'red',
  width: '100%',
  height: '500px',
  paddingTop: theme.spacing04,
}))``;

const ProductsGrid = styled(Flex).attrs(({ theme }) => ({
  backgroundColor: 'blue',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  width: '100%',
  paddingTop: theme.spacing04,
}))``;

export { MainContainer, ProductsGrid };
