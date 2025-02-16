import { UserIcon } from 'lucide-react';
import React from 'react';

const NavBar: React.FC = () => {
	return (
		<div className="px-10 py-6 border-b flex justify-between items-center">
			<img src="/logo.png" alt="Logo" className="w-32" />

			<span className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
				<UserIcon />
			</span>
		</div>
	);
};

export default NavBar;
