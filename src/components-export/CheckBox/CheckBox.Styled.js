import styled from 'styled-components';

const StyledCheckBox = styled.div`
  ${({ theme }) => ({ ...theme.body })};
  label {
    display: inline-block;
  }

  input {
    background: ${({ theme }) => theme.ui08};
    border-color: ${({ theme }) => theme.ui01};
  }

  span {
    color: ${({ theme }) => theme.ui02};
  }
`;

export { StyledCheckBox };
