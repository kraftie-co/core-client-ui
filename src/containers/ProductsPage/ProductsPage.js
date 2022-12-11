/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Flex } from 'rebass';
import ProductsCard from '../../components/Cards/Card';
import axios from 'axios';

function ProductsPage() {
  // const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(function(){
    axios
    .get("https://run.mocky.io/v3/8bdacd9d-1876-4f2e-a303-c0a829699825") //TODO change to actual URL
    .then(res => setProducts(res.data))
    .then(error => console.log(error))
  }, [])

  return (
    <Flex height="100%" width="100vw" justifyContent={'left'} flexWrap="wrap" flexDirection="row" alignItems={'center'}>
      { products.map((product) =>  (
        <div key={product.id} style={{margin: '4.5em', height: '369px', width: '300px'}} >
          <ProductsCard key={product.id} {...product}>
          </ProductsCard>
        </div>
      ))}
    </Flex>
  );
}

export default ProductsPage;
