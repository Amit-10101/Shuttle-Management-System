import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import BookingManagementPage from './pages/BookingManagementPage';
import SideBar from './components/Sidebar';
import UserManagementPage from './pages/UserManagementPage';
import VehicleManagementPage from './pages/VehicleManagementPage';
import DriverManagementPage from './pages/DriverManagementPage';
import RouteManagementPage from './pages/RouteManagementPage';

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<NavBar />

			<div className="flex mt-[7rem]">
				<SideBar />

				<div className="content ml-16 flex-1 p-4">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/booking" element={<BookingManagementPage />} />
						<Route path="/driver" element={<DriverManagementPage />} />
						<Route path="/route" element={<RouteManagementPage />} />
						<Route path="/user" element={<UserManagementPage />} />
						<Route path="/vehicle" element={<VehicleManagementPage />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
