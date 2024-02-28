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

/*
 * Formats a date from timestamp to user readable format
 *
 * @returns date -> Date in format DD-MM-YYYY HH:MM
 */
export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}`;
};
