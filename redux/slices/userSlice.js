import { createSlice } from '@reduxjs/toolkit';

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
      console.log(`User ${action.payload.user.username} has been set`);
    },
    updateEmail: (state, action) => {
      state.user.email = action.payload.email;
      console.log(`Email address has been updated`);
    },
    updateMobile: (state, action) => {
      state.user.mobile = action.payload.mobile;
      // TODO -> if (mobile) set mobile confirmed = false;
      console.log(`Mobile has been updated`);
    },
    updateShippingDetails: (state, action) => {
      const { country, city, address1, address2, postalCode, username } = action.payload.user;

      state.user.country = country;
      state.user.city = city;
      state.user.address1 = address1;
      state.user.address2 = address2;
      state.user.postalCode = postalCode;

      console.log(`Contact details for ${username} has been updated`);
    },
    setUserDraws: (state, action) => {
      const { drawIds, wins } = action.payload;
      const message = 
      `User Draws have been set with opt in IDs: ${JSON.stringify(drawIds)} and wins: ${JSON.stringify(wins)}`;

      drawIds.map(({ drawId }) => state.draws.push(drawId));
      wins.map(({ id }) => state.wins.push(id));
      state.date = action.payload.date;
      console.log(message);
    },
    optIn: (state, action) => {
      state.draws.push(action.payload.drawId);
      console.log(`User has opted in for draw with ID: ${action.payload.drawId}`);
    },
    setWinner: (state, action) => {
      state.wins.push(action.payload.drawId);
      console.log(`User has won draw with ID: ${action.payload.drawId}`);
    },
    clearUser: (state) => {
      state.user = null;
      state.date = null;
      state.draws = [];
      state.wins = [];
      console.log(`User has been cleared`);
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