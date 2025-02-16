import React, { useEffect, useState } from 'react';
// import { IDriver } from '../types/Driver';
// import { getDrivers } from '../services/api';
import DriverForm from '@/components/driver/DriverForm';
// import DriverTimeline from '../components/drivers/DriverTimeline';

const DriverManagementPage: React.FC = () => {
	// const [drivers, setDrivers] = useState<IDriver[]>([]);

	// const fetchDrivers = async () => {
	// 	try {
	// 		const data = await getDrivers();
	// 		setDrivers(data);
	// 	} catch (error) {
	// 		console.error('Error fetching drivers:', error);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchDrivers();
	// }, []);

	return (
		<div className="max-w-lg mx-auto p-8 flex justify-center w-full">
			<DriverForm />
		</div>
	);
};

export default DriverManagementPage;
