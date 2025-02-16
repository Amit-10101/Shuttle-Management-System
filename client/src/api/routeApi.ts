import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const routeApi = createApi({
	reducerPath: 'routeApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	endpoints: (builder) => ({
		getAllRoutes: builder.query({
			query: () => '/route',
		}),
	}),
});

export const { useGetAllRoutesQuery } = routeApi;
export default routeApi;
