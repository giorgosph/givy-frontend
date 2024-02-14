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

  const [timeRemaining, setTimeRemaining] = useState<CountdownTimeType>(
    getTimeRemaining({ closingDate })
  );

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeRemaining.expired || intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimeRemaining(getTimeRemaining({ closingDate }));
    }, 1000);

    return () => {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    };
  }, [closingDate, timeRemaining.expired]);

  return { timeRemaining };
};

export default useTimeRemaining;
