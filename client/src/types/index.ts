export interface User {
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	role: 'student' | 'staff' | 'admin';
}

export interface Vehicle {
	_id: string;
	make: string;
	model: string;
	year: number;
	licensePlate: string;
	capacity: number;
	status: 'Active' | 'Inactive' | 'Maintenance';
}

export interface Driver {
	_id: string;
	name: string;
	username: string;
	email: string;
	mobile: string;
	vehicle: Vehicle;
	availability: {
		date: string;
		startDuty?: string;
		endDuty?: string;
		breaks?: { start: string; end: string }[];
	}[];
	licenseNumber: string;
	experienceYears: number;
	status?: 'online' | 'offline';
	ratings?: number;
	review_count?: number;
}

export interface Route {
	_id: string;
	name: string;
	pickupPoint: string;
	dropOffPoint: string;
	distance: number; // in kilometers
	duration: number; // in minutes
	stops: string[]; // list of stop points
}

// export interface Booking {
// 	_id: string;
// 	userId: User;
// 	driverId?: Driver;
// 	routeId: Route;
// 	pickupTime: string;
// 	dropTime: string;
// 	status: 'Accepted' | 'Waiting' | 'Completed' | 'Cancelled';
// }

// Driver Management
// interface Driver {
// 	name: string;
// 	status: 'Online' | 'Offline';
// 	schedule: ScheduleEntry[];
// }

// interface ScheduleEntry {
// 	timeRange: string; // e.g., "06:00 - 08:00"
// 	events: ScheduleEvent[];
// }

// interface ScheduleEvent {
// 	type: 'Duty Start' | 'Duty End' | 'Pickup/Drop' | 'Break' | 'Vehicle Change' | 'Empty Leg';
// 	details?: string;
// }

// Booking Management
export interface Booking {
	_id: string;
	userId: User | string;
	status:
		| 'Accepted'
		| 'Waiting'
		| 'No Show'
		| 'Declined'
		| 'Completed'
		| 'Requested'
		| 'On Going'
		| 'Cancelled'
		| 'Dropped';
	routeId: Route | string;
	driverId: Driver | string;
	vehicle: Vehicle | string | null;
	requestedPickupTime: string;
	pickupTime: string | null;
	plannedDrop: string | null;
	actualDrop: string | null;
}
