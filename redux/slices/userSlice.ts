import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import log from "../../utils/logger";
import {
  ItemType,
  ShippingDetailsType,
  UserDetailsType,
} from "../../utils/types/objectTypes";

/* ----- Types ----- */
export interface IUserSlice {
  user: UserDetailsType | null;
  date: number | null;
  draws: number[];
  wins: number[];
}

/* ----------------- */

const initialState: IUserSlice = {
  user: null,
  date: null,
  draws: [],
  wins: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: UserDetailsType }>) => {
      state.user = action.payload.user;

      log({
        type: "i",
        message: `Redux-User | User ${action.payload.user.username} has been set`,
      });
    },
    updateEmail: (state, action: PayloadAction<{ email: string }>) => {
      state.user!.email = action.payload.email;
      log({
        type: "i",
        message: `Redux-User | Email address has been updated`,
      });
    },
    updateMobile: (state, action: PayloadAction<{ mobile: number }>) => {
      state.user!.mobile = action.payload.mobile;
      // TODO -> if (mobile) set mobile confirmed = false;
      log({ type: "i", message: `Redux-User | Mobile has been updated` });
    },
    updateShippingDetails: (
      state,
      action: PayloadAction<{
        user: ShippingDetailsType & { username: string };
      }>
    ) => {
      const { country, city, address1, address2, postalCode, username } =
        action.payload.user;

      state.user!.country = country;
      state.user!.city = city;
      state.user!.address1 = address1;
      state.user!.address2 = address2;
      state.user!.postalCode = postalCode;

      log({
        type: "i",
        message: `Redux-User | Contact details for ${username} has been updated`,
      });
    },
    setUserDraws: (
      state,
      action: PayloadAction<{
        drawIds: { drawId: number }[];
        wins: ItemType[];
        date: number;
      }>
    ) => {
      const { drawIds, wins } = action.payload;

      drawIds.map(({ drawId }) => state.draws.push(drawId));
      wins.map(({ id }) => state.wins.push(id));
      state.date = action.payload.date;

      log({
        type: "d",
        message: `Redux-User | User Draws: ${JSON.stringify(
          drawIds
        )}, Wins: ${JSON.stringify(wins)}`,
      });
    },
    optIn: (state, action: PayloadAction<{ drawId: number }>) => {
      state.draws.push(action.payload.drawId);
      log({
        type: "d",
        message: `Redux-User | Opted in for draw ${action.payload.drawId}`,
      });
    },
    setWinner: (state, action: PayloadAction<{ itemId: number }>) => {
      state.wins.push(action.payload.itemId);
      log({
        type: "d",
        message: `Redux-User | Won item ${action.payload.itemId}`,
      });
    },
    clearUser: (state) => {
      state.user = null;
      state.date = null;
      state.draws = [];
      state.wins = [];
      log({ type: "i", message: `Redux-User | State has been cleared` });
    },
  },
});

export const {
  setUser,
  updateEmail,
  updateMobile,
  updateShippingDetails,
  setUserDraws,
  optIn,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;
