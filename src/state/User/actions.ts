import { PersonalDetails, PrivacySettings } from '../../types';

export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user: PersonalDetails | PrivacySettings) {
  return { type: UPDATE_USER, user };
}
