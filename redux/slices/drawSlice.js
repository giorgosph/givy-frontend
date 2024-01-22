import { createSlice } from '@reduxjs/toolkit';
import log from '../../utils/logger';

const initialState = {
  draws: [],
  date: null,
  items: []
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
          log('i', `Redux-Draws | Draw ${draw.id} added` );
        } else log('i', `Redux-Draws | Draw ${draw.id} already exists`);
      });

      if(date) state.date = date;
    },
    addItems: (state, action) => {

      action.payload.items.forEach(item => {
        const itemExist = state.items.some(exItem => exItem.id === item.id);

        if(!itemExist) {
          state.items.push(item);
          log('i', `Redux-Draws | Item ${item.id} added`);
        } else log('i', `Redux-Draws | Item ${item.id} already exists`);
      });

    },
    clearDraws: (state) => {
      state.date = null;
      state.draws = [];
      state.items = [];
      log('i', `Redux-Draws | State has been cleared`);
    },
  },
});

export const { addDraws, addItems, clearDraws } = drawSlice.actions;

export default drawSlice.reducer;