import { updateUser } from './actions';
import { User } from '../../types';

describe('actions', () => {
  it('should create an action to update the user', () => {
    const user: User = {
      name: 'Fred',
      role: 'Software Engineer',
      email: 'fred@email.com',
      password: 'password',
    };

    const expectedAction = {
      type: 'UPDATE_USER',
      user,
    };

    expect(updateUser(user)).toEqual(expectedAction);
  });
});
