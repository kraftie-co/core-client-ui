import styled from 'styled-components';
import { Flex } from 'rebass';

const Container = styled(Flex).attrs(({ theme }) => ({
  height: '100%',
  marginLeft: '140px',
  marginRight: '140px',
  marginTop: theme.spacing08,
}))``;

export { Container };
