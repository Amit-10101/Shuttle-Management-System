import { Request, Response } from 'express';
import { Driver } from '../models/Driver.model';

export const getAllDrivers = async (req: Request, res: Response) => {
	try {
		const drivers = await Driver.find({}).populate('vehicle');

		// res.status(200).json({ message: 'Drivers fetched successfully', drivers });
		res.status(200).json(drivers);
	} catch (e) {
		res.status(500).json({ message: 'Error fetching the drivers' });
	}
};
