export const removeUsernamePrefix = (username: string) => username.substring(5);

/*
 * Calculates current date and time
 *
 * @returns date -> Today's Date in format YYYY-MM-DD
 * @returns time -> Current Time in format HH:MM:SS:MMMM
 */
export const currentDate = () => {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const milliseconds = now.getMilliseconds().toString().padStart(3, "0");

  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}:${seconds}:${milliseconds}`,
  };
};
