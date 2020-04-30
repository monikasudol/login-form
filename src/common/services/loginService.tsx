import constants from '../contstants/api';
import { post, toJSON } from '../utils/server';

const userLogin = async (endpoint: string, { email, password } : { email: string, password: string }) => {
  const response = await post(`${constants.API_URL.MAIN}/${endpoint}`, { email, password });
  return toJSON(response);
};

export default {
  userLogin,
};
