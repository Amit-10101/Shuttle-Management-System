import { z } from 'zod';

export const bookingSchema = z.object({
	userId: z.string().nonempty('User ID is required'),
	status: z.enum([
		'Accepted',
		'Waiting',
		'No Show',
		'Declined',
		'Completed',
		'Requested',
		'On Going',
		'Cancelled',
		'Dropped',
	]),
	routeId: z.string().nonempty('Route ID is required'),
	driverId: z.string().optional(),
	vehicle: z.string().nullable(),
	requestedPickupTime: z.string().nonempty('Requested Pickup Time is required'),
	pickupTime: z.string().nullable(),
	plannedDrop: z.string().nullable(),
	actualDrop: z.string().nullable(),
});
