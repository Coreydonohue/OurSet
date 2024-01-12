import { configureStore } from "@reduxjs/toolkit";
import { setApi } from "./reducers/api";

const store = configureStore({
  reducer: {
    [setApi.reducerPath]: setApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(setApi.middleware),
});

export default store;
