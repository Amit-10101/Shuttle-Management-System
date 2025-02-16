import { z } from 'zod';

export const routeSchema = z.object({
	// _id: z.string(),
	name: z.string().min(1, 'Name is required'),
	pickupPoint: z.string().min(1, 'Pickup point is required'),
	dropOffPoint: z.string().min(1, 'Drop off point is required'),
	distance: z.number().min(0, 'Distance must be at least 0'),
	duration: z.number().min(0, 'Duration must be at least 0'),
	stops: z.array(z.string()).optional(),
});
