import styled from 'styled-components';

const ButtonStyled = styled.button`
  ${({ theme }) => ({ ...theme.body })};
  background-color: ${({ theme }) => theme.ui08};
  color: ${({ theme }) => theme.ui02};
  border-radius: ${({ theme }) => theme.spacing06};
  border: 1px solid ${({ theme }) => theme.ui07};
  box-shadow: 10px 10px 15px ${({ theme }) => theme.ui04};
`;

export { ButtonStyled };
