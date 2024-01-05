import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

const CustomCountdown = ({ closingDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const closingTime = new Date(closingDate).getTime();

    const distance = closingTime - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeRemaining.expired) {
    return <Text>Closed</Text>; // Display something when the countdown expires
  }

  return (
    <Text style={styles.text}>
      {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  }
});

export default CustomCountdown;
