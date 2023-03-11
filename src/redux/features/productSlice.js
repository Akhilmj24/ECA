import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiPath } from "../../utils/service/api";
import { deleteApi, getApi, putApi } from "../../utils/service/axiosCall";

const initialState = {
  loading: false,
  products: [],
  product: {},
  order: {},
  error: "",
  message: "",
};

export const getProduct = createAsyncThunk("user/getproduct", () => {
  return getApi(apiPath.getproduct);
});
export const removeProduct = createAsyncThunk("user/remove", (id) => {
  return deleteApi(apiPath.getproduct + id);
});
export const getProductbyid = createAsyncThunk("user/getproductbyid", (id) => {
  return getApi(apiPath.getproductbyid + id);
});
export const getOrderbyid = createAsyncThunk("user/getorderbyid", (id) => {
  return getApi(apiPath.getorderbyid + id);
});
export const updateOrderstatus = createAsyncThunk(
  "user/updateorderstatus",
  (id) => {
    return putApi(apiPath.orderstatuschange + id);
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });

    builder.addCase(removeProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.loading = false;
      // state.products = action.payload;
      state.error = "";
    });
    builder.addCase(removeProduct.rejected, (state, action) => {
      state.loading = false;
      // state.products = [];
      state.error = action.error.message;
    });

    builder.addCase(getProductbyid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductbyid.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(getProductbyid.rejected, (state, action) => {
      state.loading = false;
      state.product = {};
      state.error = action.error.message;
    });

    builder.addCase(getOrderbyid.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderbyid.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.error = "";
    });
    builder.addCase(getOrderbyid.rejected, (state, action) => {
      state.loading = false;
      state.order = {};
      state.error = action.error.message;
    });

    builder.addCase(updateOrderstatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateOrderstatus.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(updateOrderstatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
