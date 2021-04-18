interface User {
  name: string;
  role?: string;
  email: string;
  password: string;
  recieveTrayUpdates?: boolean;
  recieveOtherProductsCommunication?: boolean;
}

export interface UserFormAction {
  type: string;
  user: User;
}

export type DispatchType = (args: UserFormAction) => UserFormAction;

export { User };
