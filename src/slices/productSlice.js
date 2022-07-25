import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductData } from './productAPI';

const initialState = {
  status: "no data"
};

export const fetchProductAsync = createAsyncThunk(
  'product/fetchProductData',
  async (prodId) => {
    const response = await fetchProductData(prodId);
    console.log(response)
    return response;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = 'completed';
        state.product = action.payload;
      });
  },
});

export const getProduct = (state) => state.product.product
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
