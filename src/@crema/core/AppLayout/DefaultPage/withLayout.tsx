import React, { useEffect } from "react";
import AuthLayout from "./AuthLayout";
import { useSearchParams } from "next/navigation";
import { useLayoutActionsContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import { useSidebarActionsContext } from "@crema/context/AppContextProvider/SidebarContextProvider";

// eslint-disable-next-line react/display-name
const withLayout = (ComposedComponent: any) => (props: any) => {
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
  }, [
    layout,
    menuStyle,
    sidebarImage,
    setSidebarBgImage,
    updateMenuStyle,
    updateNavStyle,
  ]);
  return (
    <AuthLayout>
      <ComposedComponent {...props} />
    </AuthLayout>
  );
};

export default withLayout;
