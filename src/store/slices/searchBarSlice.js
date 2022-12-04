import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
      console.log(action.payload);
      console.log(state.value);
    },
  },
});

const searchBarActions = searchBarSlice.actions;

export { searchBarActions };

export default searchBarSlice.reducer;
