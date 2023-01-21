import http from '../../http-common';
import getHeaders from '../../utils/headerUtils';

function getProductById(id) {
  http.headers = getHeaders('GET');
  return http.get(`/product/${id}`);
}

function getProductsWithDefaultValues() {
  const PAGE_NUMBER = 1;
  const PRODUCTS_COUNT = 9;
  return http.get(`/product?page=${PAGE_NUMBER}&productsCount=${PRODUCTS_COUNT}`);
}

function addProductToFavourites({ props }) {
  console.log('WOOORKS');
  return http.post(`/favourites`, props);
}

export { getProductById, getProductsWithDefaultValues, addProductToFavourites };
