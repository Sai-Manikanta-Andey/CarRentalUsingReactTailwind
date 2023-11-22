import { createSlice } from "@reduxjs/toolkit";
const bookingSlice = createSlice({
  name: "bookingslice",
  initialState: [],
  reducers: {
    booked: (state, action) => {
      state.push(action.payload);
    },
    cancelBooking: (state, action) => {
      return state.filter((data) => data.id !== action.payload);
    },
  },
});

export default bookingSlice.reducer;
export const { booked, cancelBooking } = bookingSlice.actions;
