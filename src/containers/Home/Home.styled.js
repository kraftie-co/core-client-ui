import styled from 'styled-components';
import { Flex } from 'rebass';

const HomeContainer = styled(Flex).attrs(({ theme }) => ({ backgroundColor: theme.color }))``;

export { HomeContainer };
