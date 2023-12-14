import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  date: null, // const date = new Date(user.date); to get in components
  draws: [],
  wins: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const message = `User ${action.payload.user.username} has been set on ${action.payload.date}`;

      state.user = action.payload.user;
      state.date = action.payload.date;
      console.log(message);
    },
    updateEmail: (state, action) => {
      const message = `Email address has been updated on ${action.payload.date}`;

      state.user.email = action.payload.email;
      state.date = action.payload.date;
      console.log(message);
    },
    updateMobile: (state, action) => {
      const message = `Mobile has been updated on ${action.payload.date}`;

      state.user.mobile = action.payload.mobile;
      // TODO -> if (mobile) set mobile confirmed = false;
      state.date = action.payload.date;
      console.log(message);
    },
    updateShippingDetails: (state, action) => {
      const { country, city, address1, address2, postalCode, username } = action.payload.user;
      const message = `Contact details for ${username} has been updated on ${action.payload.date}`;

      state.user.country = country;
      state.user.city = city;
      state.user.address1 = address1;
      state.user.address2 = address2;
      state.user.postalCode = postalCode;
      state.date = action.payload.date;
      console.log(message);
    },
    setUserDraws: (state, action) => {
      const { drawIds, wins } = action.payload;
      const message = 
      `User draws have been set with opt in ids: ${JSON.stringify(drawIds)} and wins: ${JSON.stringify(wins)}`;

      drawIds.map(({ drawId }) => state.draws.push(drawId));
      wins.map(({ id }) => state.wins.push(id));
      console.log(message);
    },
    optIn: (state, action) => {
      const message = `User has opted in for draw with id: ${action.payload.drawId}`;

      state.draws.push(action.payload.drawId);
      console.log(message);
    },
    clearUser: (state) => {
      state.user = null;
      state.date = null;
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