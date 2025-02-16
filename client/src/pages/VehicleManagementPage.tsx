import React from 'react';
import VehicleForm from '@/components/vehicle/VehicleForm';

const VehicleManagementPage: React.FC = () => {
	return (
		<div className="max-w-lg mx-auto p-8 flex justify-center w-full">
			<VehicleForm />
		</div>
	);
};

export default VehicleManagementPage;
