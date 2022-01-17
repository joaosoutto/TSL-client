const getUser = () => {
  const user = localStorage.getItem('username');
  return user === null ? '' : user;
};

export default getUser;
