import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from 'Root/services/userAPI';

const loginAsyncThunk = createAsyncThunk('users/login', async ({ username, password }) => {
  const response = await userAPI.login(username, password);
  return response.data;
});

export default loginAsyncThunk;
