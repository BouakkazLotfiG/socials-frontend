const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

console.log(REACT_APP_BACKEND_URL);

export const register = async (values, onSubmitProps) => {
  console.log('register -> values', values);
  const formData = new FormData();
  for (let value in values) {
    formData.append(value, values[value]);
  }
  formData.append('picturePath', values.picture.name);

  const savedUserResponse = await fetch(
    `${REACT_APP_BACKEND_URL}/auth/register`,
    {
      method: 'POST',
      body: formData,
    }
  );
  const savedUser = await savedUserResponse.json();
  return savedUser;
};

export const login = async (values, onSubmitProps) => {
  console.log('login -> values', values);
  const loggedInResponse = await fetch(`${REACT_APP_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  const loggedIn = await loggedInResponse.json();
  return loggedIn;
};
