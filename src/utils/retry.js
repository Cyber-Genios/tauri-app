import { schedule } from "./schedule";

export const retry = async (
  func,
  params = {},
  timeoutRetry = 0,
  funcName,
  setMessage = () => {},
  setErrorMessage = () => {}
) => {
  let success = false;
  while (!success) {
    try {
      setErrorMessage("");
      setMessage(funcName);
      return await func(params);
    } catch (e) {
      console.log(e);
      setErrorMessage(funcName);
      success = false;
      if (timeoutRetry) {
        await schedule(
          new Date(new Date().getTime() + timeoutRetry),
          (message) => {
            setMessage(`${funcName} em: ${message}`);
          }
        );
      }
    }
  }
};
