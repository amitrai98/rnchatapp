export const isValidSignupInput = (
  name,
  email,
  phone,
  password1,
  password2,
) => {
  let status = {isValidInput: false, message: ''};
  if (name != undefined && name.length > 1)
    if (email != undefined && email.length > 4)
      if (phone != undefined && phone.length > 9)
        if (
          password1 != undefined &&
          password1.length > 6 &&
          password1 === password2
        ) {
          status.isValidInput = true;
          return status;
        } else status.message = 'Please enter valid passwords';
      else status.message = 'Not a valid phone number';
    else status.message = 'Email can not be left blank';
  else status.message = 'Name can not be left blank';

  return status;
};
