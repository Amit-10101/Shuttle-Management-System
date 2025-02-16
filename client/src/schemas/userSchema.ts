import { z } from 'zod';

export const userSchema = z.object({
	// _id: z.string(),
	username: z.string().min(1, 'Username is required'),
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	phone: z.string().min(1, 'Phone number is required'),
	email: z.string().email('Invalid email address'),
	role: z.enum(['student', 'staff', 'admin']),
});
