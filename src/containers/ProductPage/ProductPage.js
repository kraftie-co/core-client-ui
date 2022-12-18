/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PhotoAndDescriptionSection from 'PhotoAndDescriptionSection';
import SelectionSection from 'SelectionSection';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from './ProductPage.styled';
import { bindActionCreators } from 'redux';
import { productActions } from '../../store/slices/productSlice';
import { connect } from 'react-redux';
import LoadingScreen from 'LoadingScreen';

function ProductPage({ product, fetchProduct }) {
  const { id } = useParams();

  console.log(id);
  console.log(product);

  useEffect(() => {
    if (id?.length) {
      fetchProduct({ id });
    }
  }, []);

  return (
    <Container>
      {product === null && <LoadingScreen />}
      <PhotoAndDescriptionSection product={product} />
      <SelectionSection product={product} />
    </Container>
  );
}

ProductPage.propTypes = {
  product: PropTypes.object,
  fetchProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product.selectedProduct,
});

const mapDispatchProps = (dispatch) => ({
  fetchProduct: bindActionCreators(productActions.fetchProduct, dispatch),
});

export default connect(mapStateToProps, mapDispatchProps)(ProductPage);
