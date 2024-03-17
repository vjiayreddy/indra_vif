import NextAuth, { DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    userId?: number;
    roleID?: number;
    userName?: string;
    isActive?: boolean;
    userType?: number;
    email?: string;
    token?: string;
  }

  interface Session {
    user: {
      id?: string;
      userId?: number;
      roleID?: number;
      userName?: string;
      isActive?: boolean;
      userType?: number;
      email?: string;
      token?: string;
    };
  }
}
