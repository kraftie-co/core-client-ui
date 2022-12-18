import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductById } from '../../services/api/product.service';

const fetchProduct = createAsyncThunk('product/fetchById', async ({ id }) => {
  const response = await getProductById(id);
  return response.data;
});

const initialState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
      state.selectedProduct = payload;
    });
  },
});

const productActions = { ...productSlice.actions, fetchProduct };

export { productActions };

export default productSlice.reducer;
