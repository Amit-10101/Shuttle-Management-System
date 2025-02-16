import { configureStore } from '@reduxjs/toolkit';
import driverApi from '../api/driverApi';
import bookingApi from '../api/bookingApi';
import routeApi from '../api/routeApi';
import userApi from '../api/userApi';
import vehicleApi from '../api/vehicleApi';

const store = configureStore({
	reducer: {
		[driverApi.reducerPath]: driverApi.reducer,
		[bookingApi.reducerPath]: bookingApi.reducer,
		[routeApi.reducerPath]: routeApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		[vehicleApi.reducerPath]: vehicleApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			driverApi.middleware,
			bookingApi.middleware,
			routeApi.middleware,
			userApi.middleware,
			vehicleApi.middleware
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
