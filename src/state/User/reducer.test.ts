import { reducer } from './reducer';
import { buildState } from '../../testUtils';
import { PersonalDetails, UserFormAction } from '../../types';

describe('UserForm reducer', () => {
  const initialState = buildState();

  it('should return initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_FORM action', () => {
    const updatedUserData: PersonalDetails = {
      name: 'Fred',
      email: 'fred@email.com',
      password: 'password',
    };

    const updateUserAction: UserFormAction = {
      type: 'UPDATE_USER',
      user: updatedUserData,
    };

    const expectedState = buildState(updatedUserData);

    expect(reducer(undefined, updateUserAction)).toEqual(expectedState);
  });
});
