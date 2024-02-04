const refetchPerDays = (date: string, extraDays = 1) => {
  if (!!date) {
    const currentDate = new Date();
    const savedDate = new Date(date); // from timestamp to date object
    savedDate.setDate(savedDate.getDate() + extraDays); // saved date plus extra days

    return currentDate > savedDate;
  } else return true;
};

export { refetchPerDays };
