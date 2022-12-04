import styled from 'styled-components';
import { Flex } from 'rebass';

const LoginContainer = styled(Flex).attrs(({ theme }) => ({
  backgroundColor: theme.ui02,
  height: '100vh',
  alignItems: 'center',
  paddingTop: theme.spacing07,
  paddingBottom: theme.spacing07,
  flexDirection: 'column',
}))``;

export { LoginContainer };
