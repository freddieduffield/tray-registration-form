export type User = PersonalDetails & PrivacySettings;

export interface PersonalDetails {
  name: string;
  role?: string;
  email: string;
  password: string;
}

export interface PrivacySettings {
  receiveTrayUpdates: boolean;
  receiveOtherProductsCommunication: boolean;
}

export interface UserFormAction {
  type: string;
  user: User;
}

export type DispatchType = (args: UserFormAction) => UserFormAction;

