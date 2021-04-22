import { updateUser } from './actions';
import { PersonalDetails, PrivacySettings, User } from '../../types';

describe('actions', () => {
  it('should create an action to update the user', () => {
    const user: PersonalDetails = {
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

  it('should create an action to update the privacy', () => {
    const user: PrivacySettings = {
      receiveTrayUpdates: false,
      receiveOtherProductsCommunication: false,
    };

    const expectedAction = {
      type: 'UPDATE_USER',
      user,
    };

    expect(updateUser(user)).toEqual(expectedAction);
  });
});
