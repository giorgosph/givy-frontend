import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

// import debounceMiddleware from "./favouritesMiddleware";

const store = configureStore({
  reducer: {
    user: userReducer,

  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(debounceMiddleware),
});

export default store;