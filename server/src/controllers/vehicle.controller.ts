import { Request, Response } from 'express';
import { Vehicle } from '../models/Vehicle.model';

export const getAllVehicles = async (req: Request, res: Response) => {
	try {
		const vehicles = await Vehicle.find({});

		// res.status(200).json({ message: 'Vehicles fetched successfully', vehicles });
		res.status(200).json(vehicles);
	} catch (e) {
		res.status(500).json({ message: 'Error fetching the vehicles' });
	}
};
