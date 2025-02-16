import { Schema, model } from 'mongoose';

export interface IUser {
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	role: 'student' | 'staff' | 'admin';
}

const userSchema = new Schema<IUser>({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: false },
	phone: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	role: { type: String, enum: ['student', 'staff', 'admin'], default: 'student' },
});

export const User = model<IUser>('User', userSchema);
