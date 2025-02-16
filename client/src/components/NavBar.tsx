import React from 'react';
import { HistoryIcon, LogOutIcon, UserIcon } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const NavBar: React.FC = () => {
	return (
		<div className="px-18 py-6 h-[7rem] w-full bg-white z-50 border-b fixed top-0 flex justify-between items-center">
			<img src="/logo.png" alt="Logo" className="w-32" />

			<DropdownMenu>
				<DropdownMenuTrigger className="flex items-center gap-4 px-6 py-2 hover:bg-gray-100 transition-md rounded-lg cursor-pointer">
					<span className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
						<UserIcon />
					</span>
					Admin
				</DropdownMenuTrigger>

				<DropdownMenuContent className="w-40">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>

					<DropdownMenuSeparator />

					<DropdownMenuItem>
						<UserIcon /> Profile
					</DropdownMenuItem>
					<DropdownMenuItem>
						<HistoryIcon /> History
					</DropdownMenuItem>

					<DropdownMenuSeparator />

					<DropdownMenuItem className="text-red-600 hover:!text-red-700">
						<LogOutIcon className="text-inherit" /> Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default NavBar;
