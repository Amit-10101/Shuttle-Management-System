import { configureStore } from '@reduxjs/toolkit';
import { driverApi } from '../api/driverApi';
import { bookingApi } from '../api/bookingApi';

const store = configureStore({
	reducer: {
		[driverApi.reducerPath]: driverApi.reducer,
		[bookingApi.reducerPath]: bookingApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(driverApi.middleware, bookingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
