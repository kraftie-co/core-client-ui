/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import { Button, Flex, Image } from 'rebass';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from 'ProductsPage.module.css';
import ProductsCard from '../../components/Cards/Card';
import { productPageActions } from '../../store/slices/productPageSlice';
import filter_icon from './res/filter_icon.png';
// import { CheckBoxRounded } from '@material-ui/icons';


function ProductsPage({ products, fetchListOfProducts }) {
  const [showFilterOptions, setIsFilterShown] = useState(false);
  const [priceRange, setPriceRange] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  
  const handleFilterClick = event => {
    setIsFilterShown(current => !current);
  };

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  const filterByPrice = (priceRange) => {
    this.setState({ priceRange });
    if (priceRange === 'All') {
      this.setState({ filteredProducts: this.state.products });
    } else {
      this.setState({
        filteredProducts: this.state.products.filter(product => {
          if (priceRange === 'Under $50') {
            return product.price < 50;
          } else if (priceRange === '$50 - $100') {
            return product.price >= 50 && product.price < 100;
          } else if (priceRange === '$100 - $200') {
            return product.price >= 100 && product.price < 200;
          } else if (priceRange === 'Over $200') {
            return product.price >= 200;
          }
        })
      });
    }
  }

  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
  <>
  <div className={styles.mainLayout}>
    <Button style={{borderRadius: '50%'}}  margin={50} onClick={handleFilterClick} className={styles.filterButton}>
      <Image height={30} width={30} color="#FFFFFF" src={filter_icon}></Image>
    </Button>
      {showFilterOptions && 
      <div className={styles.filterOptions}>
        <div className={styles.filterSubCategory}>
          <b>Price Filter</b>
          <select value={this.state.priceRange} onChange={e => this.filterByPrice(e.target.value)}>
            <option value="All">All</option>
            <option value="Under $50">Under $50</option>
            <option value="$50 - $100">$50 - $100</option>
            <option value="$100 - $200">$100 - $200</option>
            <option value="Over $200">Over $200</option>
        </select>
        </div>
      </div>}
    <Flex 
      justifyContent={'space-around'}
      flexWrap="wrap"
      flexDirection="row"
      alignItems={'center'}>
        <Flex
          
          justifyContent={'space-around'}
          flexWrap="wrap"
          flexDirection="row"
          alignItems={'center'}
          >
            {currentProducts.map((product) => (
              <div key={parseInt(product.id)} style={{ margin: '2.5em', height: '369px', width: '300px' }}>
                <ProductsCard key={product.id} {...product}></ProductsCard>
              </div>
            ))}
        </Flex>
          <div className={styles.caca}>
          {/* Render pagination buttons */}
            {Array.from({length: Math.ceil(products.length / productsPerPage)}, (_, index) => (
              <button key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
    </Flex>
    </div>
  </>
  );
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  fetchListOfProducts: PropTypes.func.isRequired,
  filteredProducts: PropTypes.array,
  priceRange : PropTypes.string
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListOfProducts: bindActionCreators(productPageActions.fetchListOfProducts, dispatch),
});



export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
