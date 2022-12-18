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
    .get("https://run.mocky.io/v3/a1f2561e-a8cb-4e91-9ed8-7ed7f6f950e4") //TODO change to actual URL
    .then(res => setProducts(res.data))
    .then(error => console.log(error))
  }, [])

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

export default ProductsPage;
