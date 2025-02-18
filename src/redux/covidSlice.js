import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "./actions";

const initialState = {
  isLoading: true,
  data: null,
  error: null,
};
const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
  },
});

export default covidSlice.reducer;
