import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  draws: null,
  date: null, // const date = new Date(draw.date); to get in components
};

const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    setDraws: (state, action) => {
      const message = `Draws has been set on ${action.payload.date}`;

      state.draws = action.payload.draws;
      state.date = action.payload.date;
      console.log(message);
    },
    clearDraws: (state) => {
      state.draws = null;
      state.date = null;
    },
  },
});

export const { setDraws, clearDraws } = drawSlice.actions;

export default drawSlice.reducer;