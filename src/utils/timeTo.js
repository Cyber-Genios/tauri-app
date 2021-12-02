export const timeTo = (date) => {
  const now = new Date();
  const nextTime = new Date(date);
  const timeTo = nextTime.getTime() - now.getTime();
  return {
    timeTo,
    times: {
      hours: Math.floor(timeTo / 1000 / 3600),
      minutes: Math.floor(((timeTo / 1000) % 3600) / 60),
      seconds: Math.floor(((timeTo / 1000) % 3600) % 60),
    },
  };
};
