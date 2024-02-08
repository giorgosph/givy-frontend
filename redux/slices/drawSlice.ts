import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import log from "../../utils/logger";
import { DrawType, ItemType } from "../../utils/types/objectTypes";

/* ----- Types ----- */
interface IDrawSlice {
  draws: DrawType[];
  items: ItemType[];
  date: number | null;
}

/* ----------------- */

const initialState: IDrawSlice = {
  draws: [],
  items: [],
  date: null,
};

const drawSlice = createSlice({
  name: "draw",
  initialState,
  reducers: {
    addDraws: (
      state,
      action: PayloadAction<{ draws: DrawType[]; date: number | null }>
    ) => {
      const { draws, date } = action.payload;

      draws.forEach((draw) => {
        const drawExist = state.draws.some(
          (exDraw: DrawType) => exDraw.id === draw.id
        );

        if (!drawExist) {
          state.draws.push(draw);
          log({ type: "i", message: `Redux-Draws | Draw ${draw.id} added` });
        } else
          log({
            type: "i",
            message: `Redux-Draws | Draw ${draw.id} already exists`,
          });
      });

      if (!!date) state.date = date;
    },
    addItems: (state, action: PayloadAction<{ items: ItemType[] }>) => {
      action.payload.items.forEach((item) => {
        const itemExist = state.items.some((exItem) => exItem.id === item.id);

        if (!itemExist) {
          state.items.push(item);
          log({ type: "i", message: `Redux-Draws | Item ${item.id} added` });
        } else
          log({
            type: "i",
            message: `Redux-Draws | Item ${item.id} already exists`,
          });
      });
    },
    clearDraws: (state) => {
      state.date = null;
      state.draws = [];
      state.items = [];
      log({ type: "i", message: `Redux-Draws | State has been cleared` });
    },
  },
});

export const { addDraws, addItems, clearDraws } = drawSlice.actions;

export default drawSlice.reducer;