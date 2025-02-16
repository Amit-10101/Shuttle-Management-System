import { Request, Response } from 'express';
import { Booking } from '../models/Booking.model';

export const createBooking = async (req: Request, res: Response) => {
	try {
		const newBooking = await Booking.create(req.body);
		res.status(201).json(newBooking);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error creating booking' });
	}
};

export const getAllBookings = async (req: Request, res: Response) => {
	try {
		const bookings = await Booking.find()
			.populate('userId', '-password')
			.populate('driverId')
			.populate('routeId')
			.populate('vehicle');

		res.status(200).json(bookings);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error while fetching bookings' });
	}
};

export const getBookingById = async (req: Request, res: Response) => {
	try {
		const booking = await Booking.findById(req.params.id)
			.populate('userId', 'username')
			.populate('driverId', 'name')
			.populate('routeId', 'name pickupPoint dropOffPoint');
		if (!booking) {
			res.status(404).json({ message: 'Booking not found' });
			return;
		}
		res.status(200).json(booking);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error fetching booking' });
	}
};

export const updateBooking = async (req: Request, res: Response) => {
	try {
		const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!updatedBooking) {
			res.status(404).json({ message: 'Booking not found' });
			return;
		}
		res.status(200).json(updatedBooking);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error updating booking' });
	}
};

export const deleteBooking = async (req: Request, res: Response) => {
	try {
		const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
		if (!deletedBooking) {
			res.status(404).json({ message: 'Booking not found' });
			return;
		}
		res.status(200).json({ message: 'Booking deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error deleting booking' });
	}
};
