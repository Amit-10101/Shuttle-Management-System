import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const vehicleApi = createApi({
	reducerPath: 'vehicleApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	endpoints: (builder) => ({
		getAllVehicles: builder.query({
			query: () => '/vehicle',
		}),
	}),
});

export const { useGetAllVehiclesQuery } = vehicleApi;
export default vehicleApi;
