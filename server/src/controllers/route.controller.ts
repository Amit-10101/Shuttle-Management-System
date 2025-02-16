import { Request, Response } from 'express';
import { Route } from '../models/Route.model';

export const getAllRoutes = async (req: Request, res: Response) => {
	try {
		const routes = await Route.find({});

		// res.status(200).json({ message: 'Routes fetched successfully', routes });
		res.status(200).json(routes);
	} catch (e) {
		res.status(500).json({ message: 'Error fetching the routess' });
	}
};
