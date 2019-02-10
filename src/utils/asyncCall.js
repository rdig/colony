import oraSpinner from 'ora';

const asyncCall = (asyncMethod, loadingMessage) => {
  const spinnerInstance = oraSpinner(loadingMessage).start();
  if (asyncMethod && asyncMethod.call) {
    return asyncMethod.call().then((asyncResult) => {
      spinnerInstance.stop();
      return asyncResult;
    });
  }
  throw new Error(`${asyncMethod} method is not a caller`);
};

export default asyncCall;
