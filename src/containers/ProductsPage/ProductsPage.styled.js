import { Flex } from 'rebass';
import styled from 'styled-components';

const ProductContainer = styled(Flex).attrs(({ theme }) => ({
  backgroundColor: theme.ui02,
  height: '100vh',
  alignItems: 'center',
  paddingTop: '5vh',
  paddingBottom: '5vh',
  flexDirection: 'column',
}));

export { ProductContainer };
