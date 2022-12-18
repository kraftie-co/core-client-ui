import styled from 'styled-components';

const Text = styled.p`
  margin: 0;
  padding: 0;
  ${({ theme }) => ({ ...theme.body })};
  color: ${({ theme }) => theme.textColor01};
  ${({ otherProps }) => ({ ...otherProps })};
`;

export { Text };
