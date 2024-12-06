import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(id: number): Promise<User> {
  // eslint-disable-next-line testing-library/no-await-sync-queries
  const userAPI = await userApi.getById(id.toString());
  console.log('UserAPI', userAPI);
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
