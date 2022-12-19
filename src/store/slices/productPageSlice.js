const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { getProductsWithDefaultValues } = require("../../services/api/product.service");

const fetchListOfProducts = createAsyncThunk('products/fetchAll', async () => {
    const response = await getProductsWithDefaultValues();
    return response.data;
});

const initialState = {
    products: [
        {
            "id": 3,
            "categoryId": 1,
            "discountId":  1,
            "name":  "Handmade Navy Blue, Silver & Gold Resin Coaster | Midnight | Bespoke",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "price":  4.60,
            "quantity":  0,
            "photoUrls": [{"id": 0, "pictureUrl": "https://imgur.com/gallery/uKnMvyp"}]
        }]
}

const productPageSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchListOfProducts.fulfilled, (state, { payload }) => {
            state.products = payload;
        });
    },
});

const productPageActions = {...productPageSlice.actions, fetchListOfProducts};

export { productPageActions };

export default productPageSlice.reducer;