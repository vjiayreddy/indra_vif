import React, { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import AppLoader from "./AppLoader";
import { NEXT_AUTH_STATUS } from "@crema/constants/AppEnums";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { APP_ROUTES, AUTH_ROUTES } from "@crema/constants/AppRoutes";

type AuthRoutesProps = {
  children: ReactNode;
};

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  // useEffect(() => {
  //   if (status === NEXT_AUTH_STATUS.unauthenticated) {
  //     router.push(APP_ROUTES.signin);
  //   }
  //   if (
  //     status === NEXT_AUTH_STATUS.authenticated &&
  //     AUTH_ROUTES.includes(pathname)
  //   ) {
  //     router.replace(APP_ROUTES.home);
  //   }
  // }, [status]);

  console.log(session)

  return status === NEXT_AUTH_STATUS.loading ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;
