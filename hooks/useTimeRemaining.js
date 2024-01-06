import { useEffect, useRef, useState } from "react";

import getTimeRemaining from "../utils/getTimeRemaining";

/* -----------------------------------------------------------------------------
 * ----------- Use to calculate the remaining time for a draw to run -----------
 * ----------------------------------------------------------------------------- */

const useTimeRemaining = (closingDate) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(closingDate));

  const intervalRef = useRef(null);

  useEffect(() => {
    if (timeRemaining.expired || intervalRef.current) {
      return; // Stop re-running the hook if timeRemaining.expired is true or if interval exists
    }

    intervalRef.current = setInterval(() => {
      setTimeRemaining(getTimeRemaining(closingDate));
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [closingDate, timeRemaining.expired]);

  return { timeRemaining };
};

export default useTimeRemaining;