export const isValidSignupInput = (
  name,
  email,
  phone,
  password1,
  password2,
) => {
  isValidInput = true;
  if (name != undefined && name.length > 1)
    if (email != undefined && email.length > 5)
      if (phone != undefined && phone.length > 9)
        if (password1 != undefined && password1.length > 6)
          if (password2 != undefined && password2.length > 1)
            return isValidInput;
          else isValidInput = false;

  return isValidInput;
};
