import styled from 'styled-components';

const InputStyled = styled.input`
  ${({ theme }) => ({ ...theme.body })};
  border: 1px solid ${({ theme }) => theme.ui07};
  background-color: ${({ theme }) => theme.ui10};
  box-shadow: 10px 10px 20px ${({ theme }) => theme.ui04};
  padding-left: ${({ theme }) => theme.spacing05};
  padding-right: ${({ theme }) => theme.spacing05};
  border-radius: ${({ theme }) => theme.spacing06};
  height: ${({ theme }) => theme.sizeV02};
  width: ${({ theme }) => theme.sizeH01};
  &:focus {
    outline: none;
  }
`;

export { InputStyled };
