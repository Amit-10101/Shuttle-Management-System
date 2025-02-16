import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Driver } from '../types';

export const driverApi = createApi({
	reducerPath: 'driverApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	endpoints: (builder) => ({
		getDrivers: builder.query<Driver[], void>({
			query: () => '/drivers',
		}),
		updateDriverStatus: builder.mutation<void, { id: string; status: string }>({
			query: ({ id, status }) => ({
				url: `/drivers/${id}`,
				method: 'PATCH',
				body: { status },
			}),
		}),
	}),
});

export const { useGetDriversQuery, useUpdateDriverStatusMutation } = driverApi;
