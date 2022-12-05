/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import { PRODUCT_TYPE } from '../../../constants';
import * as Styled from './TopBar.styled';
// import { counterActions } from '../../store/slices/counterSlice';

import Typography from '../../../components-export/Typography';

function TopBar({ onSearch }) {
  return (
    <Styled.Container>
      <Styled.LogoContainer></Styled.LogoContainer>
      <Styled.InputContainer></Styled.InputContainer>
      <Styled.ButtonsContainer>
        <Styled.CircleButton>
          <img src="../../../../public/favicon.ico"></img>
        </Styled.CircleButton>
        <Styled.CircleButton>
          <img src="../../../../public/favicon.ico"></img>
        </Styled.CircleButton>
        <Styled.CircleButton>
          <img src="../../../../public/favicon.ico"></img>
        </Styled.CircleButton>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
}

TopBar.propTypes = {
  onSearch: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   value: state.counter.value,
// });

// const mapDispatchProps = (dispatch) => ({
//   increase: bindActionCreators(counterActions.increase, dispatch),
//   decrease: bindActionCreators(counterActions.decrease, dispatch),
// });
//connect(mapStateToProps, mapDispatchProps)(

export default TopBar;
