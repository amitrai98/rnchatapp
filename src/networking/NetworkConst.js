export const success = message => {
  return {success: true, data: message};
};

export const failure = errorData => {
  return {success: false, error: errorData};
};
