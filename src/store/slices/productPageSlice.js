const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { getProductsWithDefaultValues } = require("../../services/api/product.service");

const fetchListOfProducts = createAsyncThunk('products/fetchAll', async () => {
    const response = await getProductsWithDefaultValues();
    return response.data;
});

const initialState = {
    products: []
}

const productPageSlice = createSlice({
    name: 'products',
    reducers: {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchListOfProducts.fulfilled, (state, { payload }) => {
            state.products = payload;
        });
    },
});

const productPageActions = {...productPageSlice.actions, fetchListOfProducts};

export { productPageActions };

export default productPageSlice.reducer;