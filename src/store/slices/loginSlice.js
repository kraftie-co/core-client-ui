import { createSlice } from '@reduxjs/toolkit';
import loginAsyncThunk from 'Root/store/thunks/loginAsyncThunk';

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncThunk.pending, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(loginAsyncThunk.fulfilled, (state) => {
        state.isLoggedIn = true;
      });
  },
});

const loginActions = loginSlice.actions;

export { loginActions };

export default loginSlice.reducer;
