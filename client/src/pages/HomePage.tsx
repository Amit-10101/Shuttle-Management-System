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

import DriverStatus from '../components/driver/DriverStatus';
import BookingTable from '../components/booking/BookingTable';
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
