import { z } from 'zod';

export const vehicleSchema = z.object({
	_id: z.string(),
	make: z.string().min(1, 'Make is required'),
	model: z.string().min(1, 'Model is required'),
	year: z
		.number()
		.min(1900, 'Year must be at least 1900')
		.max(new Date().getFullYear(), 'Year cannot be in the future'),
	licensePlate: z.string().min(1, 'License plate is required'),
	capacity: z.number().min(1, 'Capacity must be at least 1'),
	status: z.enum(['Active', 'Inactive', 'Maintenance']),
});
