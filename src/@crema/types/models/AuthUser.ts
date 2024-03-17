export type AuthUserResponseType = {
  error: boolean;
  errorMessage: string |null;
  data: any;
};

export type AuthUserType = {
  id?: number;
  uid?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  token?: string;
  role?: string[] | string;
};
