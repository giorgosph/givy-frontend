import { WinnersType } from "./objectTypes";

export type WSWinType = {
  body: {
    drawId: number;
    winners: WinnersType;
  };
  type: "runningDraws";
  message: `Winners:\n ${string}`;
};
