import { API_ROUTES } from "../api/ApiRoutes";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";

export type UserLoginPayloadType = {
  emailId: string;
  password: string;
};

// LOGIN
export const userLogin = async (payload: UserLoginPayloadType) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${API_ROUTES.auth}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        emailId: payload.emailId,
        password: payload.password,
      }),
    }
  );
  const data = await response.json();
  return data;
};

// Update Token
export const updateToken = (token: JWT, user: User) => {
  if (token) {
    token.id = user.id;
    token.userName = user.userName;
    token.name = user.userName;
    token.email = user.email;
    token.isActive = user?.isActive;
    token.userType = user?.userType;
    token.userId = user?.userId;
    token.token = user?.token
  }
  return token;
};

// Update Session
export const updateSession = (session: Session, token: JWT) => {
  if (token) {
    session.user.id = token?.id as string;
    session.user.userId = token?.userId as number;
    session.user.userName = token.userName as string;
    session.user.email = token.email as string;
    session.user.isActive = token?.isActive as boolean;
    session.user.userType = token?.userType as number;
    session.user.token = token?.token as string;
  }
  return session;
};
