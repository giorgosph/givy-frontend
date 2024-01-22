import { createSlice } from '@reduxjs/toolkit';
import log from '../../utils/logger';

const initialState = {
  user: null,
  date: null,
  draws: [],
  wins: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      log('i', `Redux-User | User ${action.payload.user.username} has been set`);
    },
    updateEmail: (state, action) => {
      state.user.email = action.payload.email;
      log('i', `Redux-User | Email address has been updated`);
    },
    updateMobile: (state, action) => {
      state.user.mobile = action.payload.mobile;
      // TODO -> if (mobile) set mobile confirmed = false;
      log('i', `Redux-User | Mobile has been updated`);
    },
    updateShippingDetails: (state, action) => {
      const { country, city, address1, address2, postalCode, username } = action.payload.user;

      state.user.country = country;
      state.user.city = city;
      state.user.address1 = address1;
      state.user.address2 = address2;
      state.user.postalCode = postalCode;

      log('i', `Redux-User | Contact details for ${username} has been updated`);
    },
    setUserDraws: (state, action) => {
      const { drawIds, wins } = action.payload;

      drawIds.map(({ drawId }) => state.draws.push(drawId));
      wins.map(({ id }) => state.wins.push(id));
      state.date = action.payload.date;

      log('d', `Redux-User | User Draws: ${JSON.stringify(drawIds)}, Wins: ${JSON.stringify(wins)}`)
    },
    optIn: (state, action) => {
      state.draws.push(action.payload.drawId);
      log('d', `Redux-User | Opted in for draw ${action.payload.drawId}`);
    },
    setWinner: (state, action) => {
      state.wins.push(action.payload.itemId);
      log('d', `Redux-User | Won item ${action.payload.itemId}`);
    },
    clearUser: (state) => {
      state.user = null;
      state.date = null;
      state.draws = [];
      state.wins = [];
      log('i', `Redux-User | State has been cleared`);
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
  clearUser 
} = userSlice.actions;

export default userSlice.reducer;