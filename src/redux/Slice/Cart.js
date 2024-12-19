import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../config/Api";

const postCart = createAsyncThunk(
  "cart/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post("/carts", data);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getCart = createAsyncThunk(
  "carts/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/carts");
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const initialState = {
  carts: [],
};

const CartSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCart.fulfilled, (state, { payload }) => {
        state.carts.push(payload);
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.carts = payload;
      });
  },
});

export { getCart, postCart };
export const cartReducer = CartSlice.reducer;
