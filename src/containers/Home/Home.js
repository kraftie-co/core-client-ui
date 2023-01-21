import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import axios from 'axios';

import * as Styled from './Home.styled';
import NavBar from '../../components/NavBar/index';
import ProductsCard from '../../components/Cards/Card';
import { CheckBox } from '../../components-export/CheckBox/CheckBox';

function Home() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const fetchedProducts = await axios.get('https://kraftie-api.azurewebsites.net/home/products', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
      },
    });
    setProducts(fetchedProducts.data.data);
  };

  fetchProducts();

  return (
    <Styled.HomeContainer>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          padding: '2vw 4vw 0vw',
          width: '100vw',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <div style={{ width: '20vw', background: theme.ui04, height: '89vh', textAlign: 'center', padding: '5vh 0' }}>
          <p style={theme.title}>Filter Results</p>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}>
            {products &&
              products.length > 0 &&
              products.map((product) => <CheckBox key={product.id} label={product.category.name} />)}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
          <div
            style={{
              width: '60vw',
              background: theme.ui04,
              height: '10vh',
              padding: '2vh 2vw',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            <div style={{ marginBottom: '60rem', background: 'red', height: '30vh' }}>
              <p style={theme.body}>46 results in test</p>
              <p style={theme.body}>Sort by</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {products &&
                products.length > 0 &&
                products.map((product) => (
                  <div key={product.id} style={{ height: '369px', width: '300px' }}>
                    <ProductsCard key={product.id} {...product}></ProductsCard>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Styled.HomeContainer>
  );
}

export default Home;
