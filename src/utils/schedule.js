import { timeTo } from "./timeTo";
export const schedule = async (date, setMessage = () => {}) => {
  const dateToExecute = timeTo(date);
  const interval = setInterval(function () {
    const response = timeTo(date);
    setMessage(
      `${response.times.hours} hora(s), ${response.times.minutes} minuto(s) e ${response.times.seconds} segundo(s)`
    );
  }, 1000);
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      clearInterval(interval);
      resolve();
    }, dateToExecute.timeTo)
  );
  setMessage("");
  return;
};
