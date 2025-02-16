import { Schema, model } from 'mongoose';

export interface IVehicle {
	make: string;
	model: string;
	year: number;
	licensePlate: string;
	capacity: number;
	status: 'Active' | 'Inactive' | 'Maintanence';
}

const vehicleSchema = new Schema<IVehicle>({
	make: { type: String, required: true },
	model: { type: String, required: true },
	year: { type: Number, required: true },
	licensePlate: { type: String, required: true, unique: true },
	capacity: { type: Number, required: true },
	status: { type: String, enum: ['Active', 'Inactive', 'Maintanence'], required: true },
});

export const Vehicle = model<IVehicle>('Vehicle', vehicleSchema);
