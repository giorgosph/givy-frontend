import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  date: null, // const date = new Date(user.date); to get in components
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
    updateContactDetails: (state, action) => {
      const { email, mobile, username } = action.payload.user;
      const message = `Contact details for ${username} has been updated on ${action.payload.date}`;

      if(email) state.user.email = email;
      if(mobile) state.user.mobile = mobile;
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
    clearUser: (state) => {
      state.user = null;
      state.date = null;
    },
  },
});

export const { setUser, updateContactDetails, updateShippingDetails, clearUser } = userSlice.actions;

export default userSlice.reducer;