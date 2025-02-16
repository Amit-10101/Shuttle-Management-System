import { Booking } from '@/types';

export const bookings: Booking[] = [
	{
		_id: '1',
		userId: {
			_id: 'user1',
			username: 'Thompson',
			role: 'student', // Assuming all are students for now, you might need to adjust this
		},
		routeId: {
			_id: 'route1',
			name: 'Route 1', // You'll need to create route names/IDs as needed
			pickupPoint: 'Library',
			dropOffPoint: 'Data Centre',
		},
		driverId: {
			_id: 'driver1', // Assign driver IDs as needed
			name: 'Driver A', // Assign driver names as needed
			availability: [],
		},
		requestedPickupTime: '11:21',
		pickupTime: null,
		plannedDrop: '11:32',
		actualDrop: '11:32',
		vehicle: 'NB-002-RF',
		status: 'Accepted',
	},
	{
		_id: '2',
		userId: {
			_id: 'user2',
			username: 'Daniel Radcliff',
			role: 'student',
		},
		routeId: {
			_id: 'route2',
			name: 'Route 2',
			pickupPoint: 'Library',
			dropOffPoint: 'Parking',
		},
		driverId: {
			_id: 'driver2',
			name: 'Driver B',
			availability: [],
		},
		requestedPickupTime: '11:34',
		pickupTime: null,
		plannedDrop: '11:43',
		actualDrop: '11:43',
		vehicle: 'NB-002-RF',
		status: 'Waiting',
	},
	{
		_id: '3',
		userId: {
			_id: 'user3',
			username: 'W.J. Smith',
			role: 'student',
		},
		routeId: {
			_id: 'route3',
			name: 'Route 3',
			pickupPoint: 'Data Centre',
			dropOffPoint: 'Parking',
		},
		driverId: {
			_id: 'driver3',
			name: 'Driver C',
			availability: [],
		},
		requestedPickupTime: '11:50',
		pickupTime: null,
		plannedDrop: '12:10',
		actualDrop: null,
		vehicle: 'NB-002-RF',
		status: 'No Show',
	},
	{
		_id: '4',
		userId: {
			_id: 'user4',
			username: 'Tina Shah',
			role: 'student',
		},
		routeId: {
			_id: 'route4',
			name: 'Route 4',
			pickupPoint: 'Library',
			dropOffPoint: 'Data Centre',
		},
		driverId: {
			_id: 'driver4',
			name: 'Driver D',
			availability: [],
		},
		requestedPickupTime: '11:55',
		pickupTime: null,
		plannedDrop: null,
		actualDrop: null,
		vehicle: null,
		status: 'Declined',
	},
	{
		_id: '5',
		userId: {
			_id: 'user3',
			username: 'W.J. Smith',
			role: 'student',
		},
		routeId: {
			_id: 'route3',
			name: 'Route 3',
			pickupPoint: 'Data Centre',
			dropOffPoint: 'Parking',
		},
		driverId: {
			_id: 'driver3',
			name: 'Driver C',
			availability: [],
		},
		requestedPickupTime: '11:58',
		pickupTime: '12:25',
		plannedDrop: '12:35',
		actualDrop: '12:40',
		vehicle: 'NB-002-RF',
		status: 'Completed',
	},
	{
		_id: '6',
		userId: {
			_id: 'user4',
			username: 'Tina Shah',
			role: 'student',
		},
		routeId: {
			_id: 'route4',
			name: 'Route 4',
			pickupPoint: 'Library',
			dropOffPoint: 'Data Centre',
		},
		driverId: {
			_id: 'driver4',
			name: 'Driver D',
			availability: [],
		},
		requestedPickupTime: '11:55',
		pickupTime: null,
		plannedDrop: '12:15',
		actualDrop: null,
		vehicle: 'NB-002-RF',
		status: 'Requested',
	},
	{
		_id: '7',
		userId: {
			_id: 'user3',
			username: 'W.J. Smith',
			role: 'student',
		},
		routeId: {
			_id: 'route3',
			name: 'Route 3',
			pickupPoint: 'Data Centre',
			dropOffPoint: 'Parking',
		},
		driverId: {
			_id: 'driver3',
			name: 'Driver C',
			availability: [],
		},
		requestedPickupTime: '11:58',
		pickupTime: '12:25',
		plannedDrop: '12:35',
		actualDrop: null,
		vehicle: null,
		status: 'On Going',
	},
	{
		_id: '8',
		userId: {
			_id: 'user4',
			username: 'Tina Shah',
			role: 'student',
		},
		routeId: {
			_id: 'route4',
			name: 'Route 4',
			pickupPoint: 'Library',
			dropOffPoint: 'Data Centre',
		},
		driverId: {
			_id: 'driver4',
			name: 'Driver D',
			availability: [],
		},
		requestedPickupTime: '11:55',
		pickupTime: null,
		plannedDrop: '12:15',
		actualDrop: null,
		vehicle: null,
		status: 'Cancelled',
	},
	{
		_id: '9',
		userId: {
			_id: 'user3',
			username: 'W.J. Smith',
			role: 'student',
		},
		routeId: {
			_id: 'route3',
			name: 'Route 3',
			pickupPoint: 'Data Centre',
			dropOffPoint: 'Parking',
		},
		driverId: {
			_id: 'driver3',
			name: 'Driver C',
			availability: [],
		},
		requestedPickupTime: '11:58',
		pickupTime: '12:25',
		plannedDrop: '12:35',
		actualDrop: '12:40',
		vehicle: 'NB-002-RF',
		status: 'Dropped',
	},
	{
		_id: '10',
		userId: {
			_id: 'user4',
			username: 'Tina Shah',
			role: 'student',
		},
		routeId: {
			_id: 'route4',
			name: 'Route 4',
			pickupPoint: 'Library',
			dropOffPoint: 'Data Centre',
		},
		driverId: {
			_id: 'driver4',
			name: 'Driver D',
			availability: [],
		},
		requestedPickupTime: '11:55',
		pickupTime: null,
		plannedDrop: null,
		actualDrop: null,
		vehicle: null,
		status: 'Declined',
	},
];
