export function validateEmail(value: string): string | undefined {
  let error;
  if (!value) {
    error = 'Please enter a valid email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

// TODO: separate the password check for each criteria i.e number / lowercase / uppercase etc.
export function validatePassword(value: string): string | undefined {
  let error;
  if (!value) {
    error = 'Please enter a password';
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,}$/i.test(value)) {
    error =
      'Please enter a password with at least 1 number, 1 lowercase letter, 1 uppercase letter';
  }

  return error;
}

export function validateName(value: string): string | undefined {
  if (!value) {
    return 'Your name is required please';
  }
}
