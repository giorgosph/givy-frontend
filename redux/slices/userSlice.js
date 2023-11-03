import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // You can initialize the user object with null or an empty object
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set the user data
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    // Action to set loading state
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    // Action to set an error message
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Action to clear the user data
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearUser } = userSlice.actions;

export default userSlice.reducer;