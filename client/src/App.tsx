import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			<NavBar />

			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
