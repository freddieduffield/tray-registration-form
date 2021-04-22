import { UPDATE_USER } from './actions';
import { UserFormAction, User } from '../../types';

const initialState: User = {
  name: '',
  role: '',
  email: '',
  password: '',
  receiveTrayUpdates: false,
  receiveOtherProductsCommunication: false,
};

export function reducer(
  state: User = initialState,
  action: UserFormAction,
): User {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.user,
      };

    default:
      return state;
  }
}
