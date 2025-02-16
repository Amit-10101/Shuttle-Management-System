// import React from 'react';

// const HomePage: React.FC = () => {
// 	return (
// 		<div className="p-4">
// 			<h1 className="text-2xl font-bold mb-4">Shuttle Management System</h1>
// 			<p>Welcome to the Smart Campus Transit Solution!</p>
// 		</div>
// 	);
// };

// export default HomePage;

import DriverStatus from '../components/drivers/DriverStatus';
import BookingTable from '../components/bookings/BookingTable';
// import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
	return (
		<div className="p-6">
			<DriverStatus />

			{/* <SearchBar /> */}

			<BookingTable />
		</div>
	);
};

export default HomePage;
