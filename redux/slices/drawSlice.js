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
    addDraws: (state, action) => {
      const { draws, date } = action.payload;

      draws.forEach(draw => {
        const drawExist = state.draws.some(exDraw => exDraw.id === draw.id); 

        if(!drawExist) {
          state.draws.push(draw);
          console.log(`Draw ${draw.id} added`);
        } else console.log(`Draw ${draw.id} already exists`);
      });
      if(date) state.date = date;
    },
    addItems: (state, action) => {
      action.payload.items.forEach(item => {
        const itemExist = state.items.some(exItem => exItem.id === item.id);

        if(!itemExist) {
          state.items.push(item);
          console.log(`Item ${item.id} added`);
        } else console.log(`Item ${item.id} already exists`);
      });
    },
    clearDraws: (state) => {
      state.draws = null;
      state.date = null;
    },
  },
});

export const { addDraws, addItems, clearDraws } = drawSlice.actions;

export default drawSlice.reducer;