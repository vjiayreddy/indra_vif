import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "./ApiRoutes";
import { UserDataType } from "@crema/types/models/common/common";
import baseQuery from "./baseQuery";
import { getSession } from "next-auth/react";

type IGenericType = {
  response_Code: number;
  response_Message: string;
  reponseData: UserDataType[];
};

const addTokenToRequest = async (headers: any, { getState }: any) => {
  const session: any = await getSession();
  if (session?.user?.token) {
    headers.set("Authorization", `Bearer ${session.user.token}`);
    headers.set("Accept", "application/json");
    console.log(headers);
  }
  return headers;
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers, { getState }) => {
      return addTokenToRequest(headers, { getState });
    },
  }),
  tagTypes: ["getAllUsers"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<IGenericType, {}>({
      providesTags: ["getAllUsers"],
      keepUnusedDataFor: 0,
      query: () => {
        return { url: API_ROUTES.users };
      },
    }),
    addUser: builder.mutation<IGenericType, { payload: any }>({
      invalidatesTags: ["getAllUsers"],
      query: ({ payload }) => {
        return {
          url: API_ROUTES.addUser,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useAddUserMutation } = userApi;
