import { User } from '../src/types';

export function buildState(overrides?: User): User {
  return {
    name: '',
    role: '',
    email: '',
    password: '',
    receiveTrayUpdates: false,
    receiveOtherProductsCommunication: false,
    ...overrides,
  };
}
