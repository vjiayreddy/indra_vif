import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ROUTES } from "./ApiRoutes";
import { UserDataType } from "@crema/types/models/common/common";

/**
 * CLIENT API
 */

type IGenericType = {
  response_Code: number;
  response_Message: string;
  reponseData: any;
};

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getAllClients: builder.query<any, {}>({
      query: () => {
        return { url: API_ROUTES.allClients };
      },
    }),
  }),
});

export const { useLazyGetAllClientsQuery, useGetAllClientsQuery } = clientApi;
