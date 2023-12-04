import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  draws: null,
  date: null, // const date = new Date(draw.date); to get in components
  items: null,
  itemsDate: null
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
    setItems: (state, action) => {
      state.items = action.payload.items;
      console.log("Items has been set");
    },
    clearDraws: (state) => {
      state.draws = null;
      state.date = null;
    },
  },
});

export const { setDraws, setItems, clearDraws } = drawSlice.actions;

export default drawSlice.reducer;