import { PersonalDetails, PrivacySettings, User } from './types';

export function buildState(
  overrides?: PersonalDetails | PrivacySettings,
): User {
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
