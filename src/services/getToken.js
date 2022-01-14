const getToken = () => {
  const userToken = localStorage.getItem('token');
  return userToken === null ? '' : userToken;
};

export default getToken;
