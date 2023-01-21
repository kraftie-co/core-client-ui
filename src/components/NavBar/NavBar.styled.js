import styled from 'styled-components';
import { Flex } from 'rebass';

const Container = styled(Flex).attrs(() => ({
  width: '100%',
  flexDirection: 'column',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 3,
}))``;

export { Container };
