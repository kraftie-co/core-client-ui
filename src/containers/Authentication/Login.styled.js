import styled from 'styled-components';

const CustomFlex = styled.div`
  display: flex;
  height: 100vh;
  align-items: end;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url('https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/depression/1296x728_HEADER_How-crafting-can-help-depression.jpg?w=1920&h=1080');
`;

const LoginContainer = styled(CustomFlex).attrs(({ theme }) => ({
  paddingTop: theme.spacing07,
  paddingBottom: theme.spacing07,
  paddingLeft: theme.spacing08,
  paddingRight: theme.spacing08,
}))``;

export { LoginContainer };
