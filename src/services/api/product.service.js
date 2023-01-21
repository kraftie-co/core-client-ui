import http from '../../http-common';

// const config = {
//   headers: {
//     Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkYW5jYW50b3J2ZW4iLCJleHAiOjE2NzEzOTgzMjQsImlhdCI6MTY3MTM2MjMyNCwicm9sZXMiOiJST0xFX1ZFTkRPUiJ9.gHVn7SRtYPjhLgu1x8VfuBu9TgSTbawm2BbUCimpc4ezSpGtGuH-YcNE16_4RbNjPOJ2CODPqGXjUNLVLLp2JHTO8PHwcPX8swf0wTLITnS8D7DVQnEUBwYoAYSeeS5fq-7YSB6j3oT2aQlhO2rBTZnH9hh_7jM00PxjNT6yIrP_WsI4EtzUMXzS1ReHMWpT-c19VpzHc9dAcS2kE8t84-ieXSEKyccnihkQkVdw4UpJAUTqTEt7CGmCTHHVRCxxOD_mwunbRvrHhPYYBvY9JaM7BQQ628yKqapHgxy5o5RqE6-baJDuQvY6FH86KAx7ikLGiXOCQxlomMtQDj0_eLEtMRnfjb34-ixGvsAl1lmLeVt1vV5EPmBkplac84KaiiI75J3uVs-vflNtKH2eB2dsr26Y-oPI_PsL2tlv0T5epkVoftX3yIiDQFgG1nB6dWUq0eS8BXIdlVP82KMnC6KxeYFpfFxN4Q-KLMD_TvluAA8VPEnOsChTzavfhaZIRIVjkUPCoDu2AAjnzDULwDntS8qfzBADcb9I_OG1qk3ej4PNLL_Sfl4PgHjRmqKxCE9nf5TYA2onJDYKEM0waLOQTwjiVL36PFX6y-ahmSNELEyAjJohnxYqv1j0WE5p4Z-vUdtgas1HBhVIJgQ8t0UTByklAt--eclUxIpWeVw`,
//   },
// };
function getProductById(id) {
  return http.get(`/product/${id}`);
}

function getProductsWithDefaultValues() {
  const PAGE_NUMBER = 1;
  const PRODUCTS_COUNT = 18;
  return http.get(`/product`, { params: {page: PAGE_NUMBER, productsCount: PRODUCTS_COUNT}});
}

function addProductToFavourites({ props }) {
  console.log('WOOORKS' + props );
  // return http.post(`/favourites`, props);
}

export { getProductById, getProductsWithDefaultValues, addProductToFavourites };
