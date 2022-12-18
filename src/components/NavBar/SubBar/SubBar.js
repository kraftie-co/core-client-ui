/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { PRODUCT_TYPE } from '../../../constants';
import * as Styled from './SubBar.styled';
import * as productSubtypesActions from '../../../store/slices/productSubtypesSlice';

import Typography from '../../../components-export/Typography';

function SubBar({ productSubtypes, getProductSubtypes }) {
  useEffect(() => {
    getProductSubtypes();
  }, []);

  return (
    <Styled.Container>
      {PRODUCT_TYPE.map((productType) => (
        <Styled.ProductTypeContainer key={productType.key}>
          <Typography>{t(productType.label)}</Typography>
        </Styled.ProductTypeContainer>
      ))}
    </Styled.Container>
  );
}

SubBar.propTypes = {
  productSubtypes: PropTypes.object.isRequired,
  getProductSubtypes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  productSubtypes: state.productSubtypes.productSubtypes,
});

const mapDispatchProps = (dispatch) => ({
  getProductSubtypes: bindActionCreators(productSubtypesActions.getProductSubtypes, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(SubBar);
