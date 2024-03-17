"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthUser } from "../../@crema/hooks/AuthHooks";
import AppLoader from "@crema/components/AppLoader";
import routesConfig from "@crema/core/AppRoutes/routeConfig";
import { Layouts } from "@crema/components/AppLayout";
import { useSidebarActionsContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import {
  useLayoutActionsContext,
  useLayoutContext,
} from "@crema/context/AppContextProvider/LayoutContextProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession } from "next-auth/react";
import { NEXT_AUTH_STATUS } from "@crema/constants/AppEnums";

export default function RootLayout({ children }: any) {
  const { navStyle } = useLayoutContext();
  const AppLayout = Layouts[navStyle];
  const { data: session, status } = useSession();

  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const searchParams = useSearchParams();

  const layout = searchParams.get("layout");
  const menuStyle = searchParams.get("menuStyle");
  const sidebarImage = searchParams.get("sidebarImage");

  useEffect(() => {
    if (layout) updateNavStyle(layout);
    if (menuStyle) updateMenuStyle(menuStyle);
    if (sidebarImage) setSidebarBgImage(true);
  }, []);

  if (status === NEXT_AUTH_STATUS.loading && !session) return <AppLoader />;

  return <AppLayout routesConfig={routesConfig}>{children}</AppLayout>;
}
