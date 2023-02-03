import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("products/getAllItems", async() => {
  const { data } = await axios("https://62961a4e810c00c1cb6f3657.mockapi.io/items");
  return data;
});
export const fetchItem = createAsyncThunk("products/getOneItem", async(params:any) => {
  const { data } = await axios.get(`https://62961a4e810c00c1cb6f3657.mockapi.io/items/${params}`);
  return data;
});
export const searchItem = createAsyncThunk("products/search", async({input, currentPage}: {input: string, currentPage: number}) => {
  const { data } = await axios.get(`https://62961a4e810c00c1cb6f3657.mockapi.io/items?page=${currentPage}&limit=4&name=${input}`);
  return data;
});
export const sorted = createAsyncThunk("products/sorted", async({action, currentPage}: {action?: string, currentPage?: number}) => {
  const { data } = await axios.get(`https://62961a4e810c00c1cb6f3657.mockapi.io/items?page=
  ${currentPage}&limit=4&sortBy=${action}&order=desc`);
  return data;
});
const initialState:any = {
  items: [],
  status: "loading",
  oneItem: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.items = null;
        state.status = "loading";})
      .addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";})
      .addCase(getItems.rejected, (state) => {
        state.items = null;})

      .addCase(fetchItem.pending, (state) => {
        state.items = null;
        state.status = "loading";})
      .addCase(fetchItem.fulfilled, (state, action) => {
        state.oneItem = action.payload;
        state.status = "success";})
      .addCase(fetchItem.rejected, (state) => {
        state.items = null;})

      .addCase(searchItem.pending, (state) => {
        state.items = null;
        state.status = "loading";})
      .addCase(searchItem.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";})
      .addCase(searchItem.rejected, (state) => {
        state.items = null;})

      .addCase(sorted.pending, (state) => {
        state.items = null;
        state.status = "loading";})
      .addCase(sorted.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";})
      .addCase(sorted.rejected, (state) => {
        state.items = null;});
}});
export const productsReducer = productsSlice.reducer;
