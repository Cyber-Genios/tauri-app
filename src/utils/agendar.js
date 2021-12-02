export const agendar = async (date, executionType) => {
  const dateToExecute = timeTo(date);
  console.log(info(`${executionType} em :`));
  const interval = setInterval(function () {
    const response = timeTo(date);
    console.log(
      `${response.times.hours} hora(s), ${response.times.minutes} minuto(s) e ${response.times.seconds} segundo(s)`
    );
  }, 1000);
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      clearInterval(interval);
      resolve();
    }, dateToExecute.timeTo)
  );
  return;
};
