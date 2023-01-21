import styled from 'styled-components';
import { Flex } from 'rebass';

const Container = styled(Flex).attrs(({ theme }) => ({
  width: '100%',
  paddingLeft: '15%',
  paddingRight: '15%',
  backgroundColor: theme.ui02,
  justifyContent: 'space-between',
}))``;

const LogoContainer = styled(Flex).attrs(({ theme }) => ({
  paddingLeft: '15%',
  paddingRight: '15%',
  backgroundColor: theme.ui02,
}))``;

const InputContainer = styled(Flex).attrs(({ theme }) => ({
  paddingLeft: '15%',
  paddingRight: '15%',
  backgroundColor: theme.ui02,
}))``;

const ButtonsContainer = styled(Flex).attrs(({ theme }) => ({
  paddingTop: theme.spacing06,
  paddingBottom: theme.spacing06,
}))``;

const CircleButton = styled(Flex).attrs(({ theme }) => ({
  backgroundColor: theme.ui04,
}))`
  & {
    box-sizing: margin-box;
    padding: ${({ theme }) => theme.spacing03};
    border-radius: 50%;
    margin-left: ${({ theme }) => theme.spacing05};
  }
  & > img {
    width: 24px;
    height: 24px;
  }
`;

export { Container, LogoContainer, InputContainer, ButtonsContainer, CircleButton };
