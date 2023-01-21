import styled from 'styled-components';

const NavBarStyled = styled.header`
  ${({ theme }) => ({ ...theme.body })};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.ui08};
  width: 100vw;
  height: 6rem;
  padding: 0 5vw;
`;

export { NavBarStyled };
