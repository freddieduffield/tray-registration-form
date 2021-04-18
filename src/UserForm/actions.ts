import { User } from '../types';

export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user: User) {
  return { type: UPDATE_USER, user };
}
