import styled from 'styled-components';
import { Flex } from 'rebass';

const HomeContainer = styled(Flex).attrs(({ theme }) => ({
  backgroundColor: theme.ui03,
  display: 'flex',
  flexDirection: 'column',
}))``;

export { HomeContainer };
