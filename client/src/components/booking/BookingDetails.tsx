import React from 'react';
import { Bus, Clock, Star, LogIn, Edit2, User2, Phone, Ban } from 'lucide-react';
import { SheetClose, SheetFooter, SheetHeader, SheetTitle } from '../ui/sheet';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface BookingDetailsProps {
	bookingId?: string;
	empName?: string;
	empId?: string;
	status?: string;
	date?: string;
	busNumber?: string;
	busCode?: string;
	busType?: string;
	capacity?: number;
	pickupLocation?: string;
	pickupTime?: string;
	dropLocation?: string;
	dropTime?: string;
	driverName?: string;
	driverPhone?: string;
	driverRating?: number;
	onClose?: () => void;
}

const BookingDetails: React.FC<BookingDetailsProps> = ({
	bookingId = '123123',
	empName = 'Thompson',
	empId = '123123',
	status = 'Waiting',
	date = 'Tue, Dec 17',
	busNumber = 'NB-002-RF',
	busCode = 'UA3282',
	busType = 'White Bus',
	capacity = 12,
	pickupLocation = 'Library',
	pickupTime = '11:21',
	dropLocation = 'Data Centre',
	dropTime = '11:32',
	driverName = 'Steve Smith',
	driverPhone = '+1-323-493-3293',
	driverRating = 4.5,
}) => {
	return (
		<div className="w-full h-full bg-white p-4 flex flex-col">
			{/* Header */}
			<SheetHeader className="mb-4 border-b">
				<SheetTitle className="text-gray-600">
					Booking ID: <span className="text-black font-semibold">{bookingId}</span>
				</SheetTitle>
			</SheetHeader>

			<div className="px-2 py-2 flex-1">
				{/* Employee Info */}
				<div className="flex justify-between items-center mb-4 bg-slate-100/70 py-2 px-4">
					<div>
						<h2 className="text-lg font-semibold">{empName}</h2>
						<p className="text-sm text-gray-600">Emp ID: {empId}</p>
					</div>
					<span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-md text-sm">
						{status}
					</span>
				</div>

				{/* Date */}
				<div className="flex justify-between text-sm text-gray-600 mb-4">
					<span>Sign In: - </span> <span>{date}</span>
				</div>

				<Card>
					{/* Bus Details */}
					<div className="flex items-center gap-2 mb-4 bg-gray-50 p-3 rounded-lg">
						<Bus className="text-gray-600" size={20} />
						<div className="flex-1">
							<div className="font-medium">{busNumber}</div>
							<div className="text-sm text-gray-600">
								{busCode} · {busType} · {capacity}
							</div>
						</div>
					</div>

					{/* Route */}
					<div className="relative mb-4 ps-6">
						<div className="relative mb-4 ps-6 border-l-3 border-gray-300">
							<div className="mb-4">
								<div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-gray-300" />
								<p className="font-medium">{pickupLocation}</p>
								<p className="text-sm text-gray-600">
									<Clock size={14} className="inline mr-1" />
									Requested Pickup Time: {pickupTime}
								</p>
							</div>
							<div>
								<div className="absolute left-[-7px] bottom-0 w-3 h-3 rounded-full bg-gray-300" />
								<p className="font-medium">{dropLocation}</p>
								<p className="text-sm text-gray-600">
									<Clock size={14} className="inline mr-1" />
									Planned Drop: {dropTime}
								</p>
							</div>
						</div>
					</div>

					{/* Driver */}
					<div className="flex items-center gap-3 mb-4 p-3 rounded-lg">
						<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
							<User2 className="text-gray-600" />
						</div>

						<div className="flex-1">
							<div className="font-medium">{driverName}</div>
							<div className="text-sm text-gray-600 flex items-center gap-1">
								<Phone width={15} height={15} className="mt-0.5" /> {driverPhone}
							</div>
						</div>

						<div className="flex items-center gap-1">
							<span className="ml-1">{driverRating}</span>
							<Star size={16} className="text-blue-600 fill-blue-600" />
						</div>
					</div>
				</Card>

				{/* Actions */}
				<div className="flex flex-col gap-2 mt-4">
					<button className="flex items-center gap-2 py-2 px-4 text-blue-600 hover:bg-blue-50 rounded-lg">
						<LogIn size={18} />
						Sign In rider
					</button>
					<button className="flex items-center gap-2 py-2 px-4 text-red-600 hover:bg-red-50 rounded-lg">
						<Ban size={18} />
						Mark rider as No-show
					</button>
				</div>
			</div>

			{/* Footer */}
			<SheetFooter className="w-full flex flex-row justify-between mt-4 pt-6 border-t">
				<SheetClose asChild>
					<Button className="flex items-center gap-2 text-red-600 bg-white hover:bg-gray-50 border">
						<Ban size={18} />
						Cancel Booking
					</Button>
				</SheetClose>

				<SheetClose asChild>
					<Button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
						<Edit2 size={18} />
						Edit
					</Button>
				</SheetClose>
			</SheetFooter>
		</div>
	);
};

export default BookingDetails;
