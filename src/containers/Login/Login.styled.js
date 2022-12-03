import styled from 'styled-components';
import { Flex } from 'rebass';

const LoginContainer = styled(Flex).attrs(({ theme }) => ({
  backgroundColor: theme.ui02,
  height: '100vh',
  alignItems: 'center',
  paddingTop: '5vh',
  paddingBottom: '5vh',
  flexDirection: 'column',
}))``;

export { LoginContainer };
