import { create } from 'apisauce';

import { API_URL } from '../../config/constants';

const config = {
  baseURL: API_URL
};

const usersApi = () => {
  const { get } = create(config);

  const getUsers = () => get();

  return {
    getUsers
  };
};

export default usersApi;
