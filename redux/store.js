import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

// import debounceMiddleware from "./favouritesMiddleware";

const store = configureStore({
  reducer: {
    user: userReducer,
//     // favourites: favouritesReducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(debounceMiddleware),
});

export default store;