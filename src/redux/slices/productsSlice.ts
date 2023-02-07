import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DATA_JSON from "../../db.json";

export const getItems = createAsyncThunk("products/getAllItems", async() => {
  const data  = new Promise((resolve) => {
    resolve(DATA_JSON);
  });
  return data.then();
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
    //@ts-ignore
    sorted: (state?:any, action) => {
      switch (action.payload) {
      case "start_date":
        state.items = state.items.sort((a:any, b:any)=> +new Date(b.start_date) - +new Date(a.start_date));
        break;
      case "end_date":
        state.items = state.items.sort((a:any, b:any)=> +new Date(b.end_date) - +new Date(a.end_date));
        break;
      case "views":
        state.items = state.items.sort((a:any, b:any)=>  b.views - a.views);
        break;
      case "name":
        state.items = state.items.sort((a:any, b:any)=> a.name.localeCompare(b.name));
        break;  
      }
    },
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
        state.items = null;});
  }});
export const productsReducer = productsSlice.reducer;
export const { sorted } = productsSlice.actions;