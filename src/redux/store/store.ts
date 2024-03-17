"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";
import { clientApi } from "../api/clientApi";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [clientApi.reducerPath]: clientApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, clientApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
function getCookies(arg0: { req: any; res: any }): any {
  throw new Error("Function not implemented.");
}
