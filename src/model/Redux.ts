import { AuthState } from '~/store/modules/auth';

export type AppState = {
  // Add any additional states here
  auth: AuthState;
};

export type AppAction = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};
