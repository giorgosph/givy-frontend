import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  draws: [],
  date: null, // const date = new Date(draw.date); to get in components
  items: [],
  itemsDate: null
};

const drawSlice = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    setDraws: (state, action) => {
      const { draws, date } = action.payload;
      const message = `Draws has been set on ${date}`;

      if(state.draws) {
        draws.forEach(draw => {
          if(!state.draws.some(exDraw => exDraw.id === draw.id)) state.draws.push(draw);
        });
        state.date = date;
      } else {
        state.draws = draws;
        state.date = date;
      }      
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