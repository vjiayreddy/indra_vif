import { APP_ROUTES } from "@crema/constants/AppRoutes";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { updateSession, updateToken, userLogin } from "../../../../../redux/services/useLogin";
import { jwtDecode } from "jwt-decode";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (data: any, _req) => {
        const response = await userLogin(data);
        if (response?.response_Code === 404 || data?.reponseData === null) {
          throw new Error(response?.errorMessage as string);
        }
        const decodedTokenData: any = jwtDecode(response?.token);
        return {
          id: response?.userId,
          userId: response?.userId,
          userName: response?.userName,
          userType: response?.userType,
          isActive: response?.isActive,
          email: decodedTokenData?.email,
          token: response?.token,
        };
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token = updateToken(token, user);
      }
      if (trigger === "update") {
        if (session) {
          token = updateToken(token, session?.user);
        }
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session = updateSession(session, token);
      }
      return session;
    },
  },
  pages: {
    signIn: APP_ROUTES.signin,
  },
};

export default authOptions;
