import { configureStore } from "@reduxjs/toolkit";
import BookingReducer from '../feature/BookingSlice'

const store = configureStore({
   
  reducer: {
    Book: BookingReducer,
  },
});

export default store;