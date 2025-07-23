const users = [
  {
    email: 'johndoe@gmail.com',
    password: '123456',
  },
  {
    email: 'saradoe@gmail.com',
    password: '12345678',
  },
];

export const getUserByEmail = (email: string) => {
  const found = users.find((user) => user.email === email);
  return found;
};
