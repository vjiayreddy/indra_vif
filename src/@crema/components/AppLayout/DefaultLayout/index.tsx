import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import AppContentView from "../../AppContentView";
import AppFixedFooter from "./AppFixedFooter";
import AppHeader from "./AppHeader";
import { useLayoutContext } from "@crema/context/AppContextProvider/LayoutContextProvider";
import DefaultLayoutWrapper from "./DefaultLayoutWrapper";
import MainContent from "./MainContent";
import { LayoutType } from "@crema/constants/AppEnums";
import AppSidebar from "./AppSidebar";
import DefaultLayoutContainer from "./DefaultLayoutContainer";
import { usePathname } from "next/navigation";
import { RouterConfigData } from "@crema/types/models/Apps";

type Props = {
  children: ReactNode;
  routesConfig: RouterConfigData[];
};

const DefaultLayout: React.FC<Props> = ({ children, routesConfig }) => {
  const { footer, layoutType, headerType, footerType } = useLayoutContext();
  const pathname = usePathname();

  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <DefaultLayoutContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <DefaultLayoutWrapper
        className={clsx("defaultLayoutWrapper", {
          appMainFooter: footer && footerType === "fluid",
          appMainFixedFooter: footer && footerType === "fixed",
          appMainFixedHeader: headerType === "fixed",
        })}
      >
        <AppSidebar
          routesConfig={routesConfig}
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />

        <MainContent>
          <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </MainContent>
      </DefaultLayoutWrapper>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
