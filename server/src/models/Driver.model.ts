import { Schema, model } from 'mongoose';
import { IVehicle } from './Vehicle.model';

export interface IDriver {
	name: string;
	username: string;
	email: string;
	mobile: string;
	vehicle: Schema.Types.ObjectId | IVehicle;
	availability: {
		date: string; // e.g., '2025-02-14'
		startDuty?: string; // e.g., '09:00'
		endDuty?: string; // e.g., '17:00'
		breaks?: { start: string; end: string }[];
	}[];
	licenseNumber: string;
	experienceYears: number;
	ratings: number;
	review_count: number;
	status: 'online' | 'offline';
}

const driverSchema = new Schema<IDriver>({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	mobile: { type: String, required: true },
	vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
	availability: [
		{
			date: { type: String, required: true },
			startDuty: { type: String },
			endDuty: { type: String },
			breaks: [{ start: String, end: String }],
		},
	],
	licenseNumber: { type: String, required: true },
	experienceYears: { type: Number, required: true },
	ratings: { type: Number, required: true },
	review_count: { type: Number, required: true },
	status: { type: String, enum: ['online', 'offline'], required: true },
});

export const Driver = model<IDriver>('Driver', driverSchema);
