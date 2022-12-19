/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Flex } from 'rebass';
import { PropTypes } from 'prop-types';
import ProductsCard from '../../components/Cards/Card';
import { bindActionCreators } from 'redux';
import { productPageActions } from '../../store/slices/productPageSlice';
import { connect } from 'react-redux';

function ProductsPage( {products, fetchListOfProducts}) {

  console.log(products);

  useEffect(() => {
    fetchListOfProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Flex height="100%" width="100vw" justifyContent={'space-around'} flexWrap="wrap" flexDirection="row" alignItems={'center'}>
      { products.map((product) =>  (
        <div key={product.id} style={{margin: '4.5em', height: '369px', width: '300px'}} >
          <ProductsCard key={product.id} {...product}>
          </ProductsCard>
        </div>
      ))}
    </Flex>
  );
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  fetchListOfProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products.products
});

const mapDispatchToProps = (dispatch) => ({
  fetchListOfProducts: bindActionCreators(productPageActions.fetchListOfProducts, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
