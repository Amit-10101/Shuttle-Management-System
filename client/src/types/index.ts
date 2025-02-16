export interface User {
	_id: string;
	username: string;
	role: 'student' | 'staff' | 'admin';
}

export interface Driver {
	_id: string;
	name: string;
	availability: {
		date: string;
		startDuty?: string;
		endDuty?: string;
		breaks?: { start: string; end: string }[];
	}[];
}

export interface Route {
	_id: string;
	name: string;
	pickupPoint: string;
	dropOffPoint: string;
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
	userId: User;
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
	routeId: Route;
	driverId?: Driver;
	vehicle: string | null;
	requestedPickupTime: string;
	pickupTime: string | null;
	plannedDrop: string | null;
	actualDrop: string | null;
}
