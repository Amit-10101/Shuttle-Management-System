import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => '/user',
		}),
	}),
});

export const { useGetAllUsersQuery } = userApi;
export default userApi;
