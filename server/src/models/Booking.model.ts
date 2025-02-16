import { Schema, model } from 'mongoose';
import { IUser } from './User.model';
import { IDriver } from './Driver.model';
import { IRoute } from './Route.model';
import { IVehicle } from './Vehicle.model';

export interface IBooking {
	userId: Schema.Types.ObjectId | IUser;
	driverId: Schema.Types.ObjectId | IDriver;
	routeId: Schema.Types.ObjectId | IRoute;
	vehicle: Schema.Types.ObjectId | IVehicle;
	requestedPickupTime: string;
	pickupTime: string;
	plannedDrop: string;
	actualDrop: string;
	status: 'Accepted' | 'Waiting' | 'Completed' | 'Cancelled';
}

const bookingSchema = new Schema<IBooking>({
	userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	driverId: { type: Schema.Types.ObjectId, ref: 'Driver', required: true },
	routeId: { type: Schema.Types.ObjectId, ref: 'Route', required: true },
	vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
	requestedPickupTime: { type: String, required: true },
	pickupTime: { type: String, required: true },
	plannedDrop: { type: String, required: true },
	actualDrop: { type: String, required: true },
	status: {
		type: String,
		enum: ['Accepted', 'Waiting', 'Completed', 'Cancelled'],
		default: 'Waiting',
	},
});

export const Booking = model<IBooking>('Booking', bookingSchema);
