import { combineReducers } from "@reduxjs/toolkit";
import drawReducer from "./slices/drawSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  draw: drawReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
