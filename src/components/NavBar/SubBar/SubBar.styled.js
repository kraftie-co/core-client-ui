import styled from 'styled-components';
import { Flex } from 'rebass';

const Container = styled(Flex).attrs(({ theme }) => ({
  width: '100%',
  paddingLeft: '15%',
  paddingRight: '15%',
  backgroundColor: theme.ui02,
  justifyContent: 'space-between',
}))``;

const ProductTypeContainer = styled(Flex).attrs(({ theme }) => ({
  padding: theme.spacing04,
  margin: '0',
}))`
  & {
    background-color: ${({ theme }) => theme.ui02};
    border-radius: ${({ theme }) => theme.spacing03};
  }
  &:hover {
    background-color: ${({ theme }) => theme.ui03};
  }
`;

export { Container, ProductTypeContainer };
