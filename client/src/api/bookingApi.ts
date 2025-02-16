import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Booking } from '../types';

export const bookingApi = createApi({
	reducerPath: 'bookingApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
	endpoints: (builder) => ({
		getBookings: builder.query<Booking[], { search?: string }>({
			query: ({ search }) => `/bookings${search ? `?search=${search}` : ''}`,
		}),
	}),
});

export const { useGetBookingsQuery } = bookingApi;
