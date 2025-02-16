import { Request, Response } from 'express';
import { User } from '../models/User.model';
import bcryptjs from 'bcryptjs';

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find({}, '-password');

		// res.status(200).json({ message: 'Users fetched successfully', users });
		res.status(200).json(users);
	} catch (e) {
		res.status(500).json({ message: 'Error fetching the users' });
	}
};
