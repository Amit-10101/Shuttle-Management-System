import React from 'react';
import RouteForm from '@/components/route/RouteForm';

const RouteManagementPage: React.FC = () => {
	return (
		<div className="max-w-lg mx-auto p-8 flex justify-center w-full">
			<RouteForm />
		</div>
	);
};

export default RouteManagementPage;
