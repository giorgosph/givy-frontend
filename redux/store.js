import { configureStore } from "@reduxjs/toolkit";

import drawSlice from "./slices/drawSlice";
import userReducer from "./slices/userSlice";

// import debounceMiddleware from "./favouritesMiddleware";

const store = configureStore({
  reducer: {
    draw: drawSlice,
    user: userReducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(debounceMiddleware),
});

export default store;