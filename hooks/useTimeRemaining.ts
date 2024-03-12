import { useEffect, useRef, useState } from "react";

import getTimeRemaining from "../utils/getTimeRemaining";
import { CountdownTimeType } from "../utils/types/objectTypes";

/* -----------------------------------------------------------------------------
 * ----------- Use to calculate the remaining time for a draw to run -----------
 * ----------------------------------------------------------------------------- */

/* ------ Types ------ */
type PropsType = {
  closingDate: Date;
};

/* ------------------- */

const useTimeRemaining = (props: PropsType) => {
  const { closingDate } = props;

  const [timeRemaining, setTimeRemaining] = useState<CountdownTimeType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    closingSoon: false,
    expired: false,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (timeRemaining.expired || intervalRef.current || !closingDate) return;

    if (!timeRemaining) setTimeRemaining(getTimeRemaining({ closingDate }));
    else
      intervalRef.current = setInterval(() => {
        setTimeRemaining(getTimeRemaining({ closingDate }));
      }, 850);

    return () => clearTimer();
  }, [closingDate, timeRemaining.expired]);

  return {
    timer: {
      clearTimer,
      timeRemaining,
    },
  };
};

export default useTimeRemaining;
