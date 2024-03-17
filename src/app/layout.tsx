"use client";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import AppContextProvider from "@crema/context/AppContextProvider";
import AppThemeProvider from "@crema/context/AppThemeProvider";
import AppStyleProvider from "@crema/context/AppStyleProvider";
import AppLocaleProvider from "@crema/context/AppLocaleProvider";
import AppPageMeta from "@crema/components/AppPageMeta";
import InfoViewContextProvider from "@crema/context/AppContextProvider/InfoViewContextProvider";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../public/styles/vendors/index.css";
import NextAuthSessionProvider from "./api/auth/[...nextauth]/provider/sessionProvider";
import { ReduxStateProviders } from "../redux/provider";

const clientSideEmotionCache = createEmotionCache();
type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Be Vietnam:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtgCpqXBu7Mdl2bzhhHnutAroyEteQo9s&v=3.exp&libraries=geometry,drawing,places"
        />
      </head>
      <body>
        <ReduxStateProviders>
          <CacheProvider value={clientSideEmotionCache}>
            <NextAuthSessionProvider>
              <AppContextProvider>
                <AppThemeProvider>
                  <AppStyleProvider>
                    <AppLocaleProvider>
                      <InfoViewContextProvider>
                        <CssBaseline />
                        <AppPageMeta />
                        {children}
                      </InfoViewContextProvider>
                    </AppLocaleProvider>
                  </AppStyleProvider>
                </AppThemeProvider>
              </AppContextProvider>
            </NextAuthSessionProvider>
          </CacheProvider>
        </ReduxStateProviders>
      </body>
    </html>
  );
}
