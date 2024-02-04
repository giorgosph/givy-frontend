import { RangeType } from "./types/helperTypes";
import { CountdownTimeType } from "./types/objectTypes";

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
const ONE_HOUR_IN_MS = 1000 * 60 * 60;
const ONE_MINUTE_IN_MS = 1000 * 60;
const ONE_SECOND_IN_MS = 1000;

const THREE_HOURS_IN_MS = ONE_HOUR_IN_MS * 3;

/* ------ Types ------ */
type PropsType = {
  closingDate: Date;
};

/* ------------------- */

const getTimeRemaining = (props: PropsType): CountdownTimeType => {
  const { closingDate } = props;

  const now = new Date().getTime();
  const closingTime = closingDate.getTime();

  const distance = closingTime - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      closingSoon: false,
      expired: true,
    };
  }

  const days = Math.floor(distance / ONE_DAY_IN_MS);
  const hours = Math.floor((distance % ONE_DAY_IN_MS) / ONE_HOUR_IN_MS);
  const minutes = Math.floor((distance % ONE_HOUR_IN_MS) / ONE_MINUTE_IN_MS);
  const seconds = Math.floor((distance % ONE_MINUTE_IN_MS) / ONE_SECOND_IN_MS);

  const closingSoon = distance <= THREE_HOURS_IN_MS;

  return {
    days,
    hours: hours as RangeType<24>,
    minutes: minutes as RangeType<60>,
    seconds: seconds as RangeType<60>,
    closingSoon,
    expired: false,
  };
};

export default getTimeRemaining;
