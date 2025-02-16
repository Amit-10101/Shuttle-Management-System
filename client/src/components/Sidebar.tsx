import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, User, MapPin, Users, Truck } from 'lucide-react';

const SideBar: React.FC = () => {
	return (
		<div className="relative">
			<div className="sidebar group">
				<nav className="sidebar-nav">
					<Link to="/" className="sidebar-link">
						<Home className="w-6 h-6" />
						<span>Home</span>
					</Link>
					<Link to="/booking" className="sidebar-link">
						<Calendar className="w-6 h-6" />
						<span>Booking</span>
					</Link>
					<Link to="/driver" className="sidebar-link">
						<User className="w-6 h-6" />
						<span>Driver</span>
					</Link>
					<Link to="/route" className="sidebar-link">
						<MapPin className="w-6 h-6" />
						<span>Route</span>
					</Link>
					<Link to="/user" className="sidebar-link">
						<Users className="w-6 h-6" />
						<span>User</span>
					</Link>
					<Link to="/vehicle" className="sidebar-link">
						<Truck className="w-6 h-6" />
						<span>Vehicle</span>
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default SideBar;
