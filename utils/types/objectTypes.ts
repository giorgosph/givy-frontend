import { RangeType } from "./helperTypes";

export type CountdownTimeType = {
  days: number;
  hours: RangeType<24>;
  minutes: RangeType<60>;
  seconds: RangeType<60>;
  closingSoon: boolean;
  expired: boolean;
};
