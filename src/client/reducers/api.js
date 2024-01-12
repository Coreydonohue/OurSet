import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../server/auth/firebase";

export const setApi = createApi({
  tagTypes: ["set"],
  reducerPath: "setApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
    prepareHeaders: async (headers) => {
      await new Promise((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, () => {
          resolve();
          unsubscribe();
        });
      });
      const user = auth.currentUser;

      if (user) {
        const token = await user.getIdToken();
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // users
    addUser: builder.mutation({
      query: (body) => ({
        url: "api/users/register",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useAddUserMutation } = setApi;
