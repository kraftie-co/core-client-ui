/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  productSubtypes: {},
};

const getProductSubtypes = createAsyncThunk('productSubtypes/getProductSubtypes', async () => {
  // TODO call api
  const response = {
    data: {
      JEWELRY_AND_ACCESSORIES: [
        {
          key: 'NAVBAR_CATEGORY_JEWELRY_AND_ACCESSORIES_NECKLACES',
          name: 'NECKLACES',
          label: 'NECKLACES',
        },
        {
          key: 'NAVBAR_CATEGORY_JEWELRY_AND_ACCESSORIES_EARRINGS',
          name: 'EARRINGS',
          label: 'EARRINGS',
        },
        {
          key: 'NAVBAR_CATEGORY_JEWELRY_AND_ACCESSORIES_RINGS',
          name: 'RINGS',
          label: 'RINGS',
        },
      ],
      CLOTHING_AND_SHOES: [
        {
          key: 'NAVBAR_CATEGORY_CLOTHING_AND_SHOES_TOPS',
          name: 'TOPS',
          label: 'TOPS',
        },
        {
          key: 'NAVBAR_CATEGORY_CLOTHING_AND_SHOES_DRESSES',
          name: 'DRESSES',
          label: 'DRESSES',
        },
        {
          key: 'NAVBAR_CATEGORY_CLOTHING_AND_SHOES_SWEATERS',
          name: 'SWEATERS',
          label: 'SWEATERS',
        },
      ],
    },
  };
  return response.data;
});

const productSubtypesSlice = createSlice({
  name: 'productSubtypes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductSubtypes.fulfilled, (state, action) => {
      state.productSubtypes = action.payload;
    });

    builder.addCase(getProductSubtypes.rejected, (state, action) => {
      // TODO fire error
    });
  },
});

const productSubtypesActions = productSubtypesSlice.actions;

export { productSubtypesActions, getProductSubtypes };

export default productSubtypesSlice.reducer;
