import React from 'react';
import BookingForm from '@/components/booking/BookingsForm';

const BookingManagementPage: React.FC = () => {
	return (
		// <div>
		<div className="max-w-lg mx-auto p-8 flex justify-center w-full">
			<BookingForm />
		</div>
		// </div>
	);
};

export default BookingManagementPage;
