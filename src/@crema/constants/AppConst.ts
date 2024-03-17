export const authRole = {
  Admin: ["admin"],
  User: ["user", "admin"],
};

export const defaultUser = {
  uid: "john-alex",
  displayName: "John Alex",
  email: "demo@example.com",
  token: "access-token",
  role: "user",
  photoURL: "/assets/images/avatar/A11.jpg",
};
export const allowMultiLanguage =
  process.env.NEXT_PUBLIC_MULTILINGUAL === "true";
export const fileStackKey = process.env.NEXT_PUBLIC_FILESTACK_KEY as string;
export const initialUrl = process.env.NEXT_PUBLIC_INITIAL_URL as string;
export const apiErrorMessages = {
  INVALID_EMAIL_PASSWORD:
    "Invalid email address or password. Please ensure your email is valid and your password meets the required criteria",
}; // this url will open after login
export const ROLE_IDS = [{ value: 0 }, { value: 1 }, { value: 2 }, { value: 3 }];
