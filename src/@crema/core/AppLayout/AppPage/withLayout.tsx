import React, { useEffect } from "react";
import { Layouts } from "@crema/components/AppLayout";
import {
  useLayoutActionsContext,
  useLayoutContext,
} from "@crema/context/AppContextProvider/LayoutContextProvider";
import routesConfig from "../../AppRoutes/routeConfig";
import { useSidebarActionsContext } from "@crema/context/AppContextProvider/SidebarContextProvider";
import { useRouter, useSearchParams } from "next/navigation";

// eslint-disable-next-line react/display-name
const withLayout = (ComposedComponent: any) => (props: any) => {
  const { navStyle } = useLayoutContext();
  const AppLayout = Layouts[navStyle];

  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout");
  const menuStyle = searchParams.get("menuStyle");
  const sidebarImage = searchParams.get("sidebarImage");

  useEffect(() => {
    if (layout) updateNavStyle(layout as string);
    if (menuStyle) updateMenuStyle(menuStyle as string);
    if (sidebarImage) setSidebarBgImage(true);
  }, []);

  return (
    <AppLayout routesConfig={routesConfig}>
      <ComposedComponent {...props} />
    </AppLayout>
  );
};

export default withLayout;
