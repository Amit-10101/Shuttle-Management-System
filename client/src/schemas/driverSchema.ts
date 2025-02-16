import { z } from 'zod';
import { vehicleSchema } from './vehicleSchema';

export const driverSchema = z.object({
	// _id: z.string(),
	name: z.string().min(1, 'Name is required'),
	username: z.string().min(1, 'Username is required'),
	email: z.string().email('Invalid email address'),
	mobile: z.string().min(1, 'Mobile number is required'),
	// vehicle: vehicleSchema,
	vehicle: z.string(),
	// availability: z.array(
	// 	z.object({
	// 		date: z.string(),
	// 		startDuty: z.string().optional(),
	// 		endDuty: z.string().optional(),
	// 		breaks: z
	// 			.array(
	// 				z.object({
	// 					start: z.string(),
	// 					end: z.string(),
	// 				})
	// 			)
	// 			.optional(),
	// 	})
	// ),
	licenseNumber: z.string().min(1, 'License number is required'),
	experienceYears: z.number().min(0, 'Experience years must be at least 0'),
	ratings: z.number().optional(),
	review_count: z.number().optional(),
});
