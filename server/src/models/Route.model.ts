import { Schema, model } from 'mongoose';

export interface IRoute {
	name: string;
	pickupPoint: string;
	dropOffPoint: string;
	distance: number;
	duration: number;
	stops: string[];
}

const routeSchema = new Schema<IRoute>({
	name: { type: String, required: true },
	pickupPoint: { type: String, required: true },
	dropOffPoint: { type: String, required: true },
	distance: { type: Number, required: true },
	duration: { type: Number, required: true },
	stops: { type: [String] },
});

export const Route = model<IRoute>('Route', routeSchema);
