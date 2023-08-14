import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3001/api/v1/greetings';

const initialState = {
  message: {},
  loading: false,
};

export const fetchMessage = createAsyncThunk('greetings/fetchMessage', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchMessage.fulfilled, (state, action) => (
        { ...state, loading: false, message: { ...action.payload } }
      ))
      .addCase(fetchMessage.rejected, (state, action) => (
        { ...state, loading: false, error: action.error.message }
      ));
  },
});

export default greetingsSlice.reducer;
