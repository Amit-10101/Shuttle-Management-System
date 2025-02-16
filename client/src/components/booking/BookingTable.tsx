// import React, { useMemo, useState } from 'react';
// import {
// 	useReactTable,
// 	// usePagination,
// 	ColumnDef,
// 	getCoreRowModel,
// 	flexRender,
// } from '@tanstack/react-table';
// import DatePicker from 'react-datepicker';
// // import { useGetBookingsQuery } from '../api/bookingApi';
// import { Calendar, Search } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Booking } from '@/types';
// import { bookings } from '@/utils/data';
// import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
// import BookingDetails from './BookingDetails';

// const bookingStatus: { [key: string]: string } = {
// 	Accepted: 'bg-gray-200 text-gray-800',
// 	Waiting: 'bg-yellow-100 text-yellow-800',
// 	'No Show': 'bg-red-100 text-red-800',
// 	Declined: 'bg-gray-100 text-gray-800',
// 	Completed: 'bg-green-100 text-green-800',
// 	Requested: 'bg-blue-100 text-blue-800',
// 	'On Going': 'bg-blue-100 text-blue-800',
// 	Cancelled: 'bg-red-100 text-red-800',
// 	Dropped: 'bg-gray-100 text-gray-800',
// };

// const BookingTable: React.FC = () => {
// 	// const { data: bookings, isLoading } = useGetBookingsQuery();
// 	// const bookings: Booking[] = [...]  // Previous mock data
// 	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

// 	const getStatusColor = (status: string): string => {
// 		return bookingStatus[status] || 'bg-gray-100 text-gray-800';
// 	};

// 	const columns = useMemo<ColumnDef<Booking>[]>(
// 		() => [
// 			{
// 				accessorKey: '_id',
// 				header: 'Booking ID',
// 				cell: (info) => <span className="font-medium">{info.getValue() as string}</span>,
// 			},
// 			{
// 				accessorKey: 'userId.username',
// 				header: 'Employee',
// 				cell: (info) => <span className="font-medium">{info.getValue() as string}</span>,
// 			},
// 			{
// 				accessorKey: 'status',
// 				header: 'Status',
// 				cell: (info) => {
// 					const status = info.getValue() as string;
// 					return (
// 						<span
// 							className={`px-3 py-1 rounded-full text-sm ${getStatusColor(status)}`}
// 						>
// 							{status}
// 						</span>
// 					);
// 				},
// 			},
// 			{ accessorKey: 'routeId.pickupPoint', header: 'From' },
// 			{ accessorKey: 'routeId.dropOffPoint', header: 'To' },
// 			{ accessorKey: 'vehicle', header: 'Vehicle' },
// 			{ accessorKey: 'requestedPickupTime', header: 'Requested Pickup Time' },
// 			{ accessorKey: 'pickupTime', header: 'Pickup Time' },
// 			{ accessorKey: 'plannedDrop', header: 'Planned Drop' },
// 			{ accessorKey: 'actualDrop', header: 'Actual Drop' },
// 			{
// 				id: 'view',
// 				accessorKey: 'view',
// 				header: '',
// 				cell: (row) => (
// 					<Sheet>
// 						<SheetTrigger>
// 							<Button
// 								variant="outline"
// 								className="text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 font-medium cursor-pointer"
// 							>
// 								View
// 							</Button>
// 						</SheetTrigger>

// 						<SheetContent>
// 							<BookingDetails />
// 						</SheetContent>
// 					</Sheet>
// 				),
// 			},
// 		],
// 		[]
// 	);

// 	const table = useReactTable({
// 		data: bookings,
// 		columns,
// 		getCoreRowModel: getCoreRowModel(),
// 	});

// 	return (
// 		<div className="pb-6 pt-8 px-6 mb-6 bg-white rounded-lg shadow">
// 			<div className="flex justify-between items-center mb-6 px-2">
// 				<h2 className="text-xl font-semibold">Booking Management</h2>

// 				<div className="flex items-center space-x-4">
// 					<div className="relative">
// 						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
// 						<input
// 							type="text"
// 							placeholder="Search Emp, Booking ID"
// 							className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// 						/>
// 					</div>

// 					<div className="flex items-center space-x-2">
// 						<DatePicker
// 							showIcon
// 							icon={<Calendar />}
// 							calendarIconClassName="mt-0.5 "
// 							selected={selectedDate}
// 							onChange={(date) => setSelectedDate(date)}
// 							className="flex w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// 							dateFormat="MMM dd, yyyy"
// 							placeholderText="Select Date"
// 						/>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="overflow-x-auto">
// 				<table className="w-full">
// 					<thead>
// 						<tr className="border-b border-gray-200">
// 							{table.getHeaderGroups().map((headerGroup) =>
// 								headerGroup.headers.map((header) => (
// 									<th
// 										key={header.id}
// 										className="px-6 py-3 text-left text-sm font-semibold text-gray-600 bg-gray-100"
// 									>
// 										{header.isPlaceholder
// 											? null
// 											: flexRender(
// 													header.column.columnDef.header,
// 													header.getContext()
// 											  )}
// 									</th>
// 								))
// 							)}
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{table.getRowModel().rows.map((row, idx) => (
// 							<tr
// 								key={row.id}
// 								className={
// 									'border-b border-gray-100 hover:bg-slate-50 ' +
// 									(idx % 2 == 1 && 'bg-slate-100/80')
// 								}
// 							>
// 								{row.getVisibleCells().map((cell) => (
// 									<td key={cell.id} className="px-6 py-4 text-sm text-gray-600">
// 										{flexRender(cell.column.columnDef.cell, cell.getContext())}
// 									</td>
// 								))}
// 							</tr>
// 						))}
// 					</tbody>
// 				</table>
// 			</div>

// 			<div className="flex items-center justify-between mt-4 text-sm text-gray-600">
// 				<span>Showing 1-10 of 50 items</span>
// 				<div className="flex items-center space-x-2">
// 					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
// 						1
// 					</button>
// 					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
// 						2
// 					</button>
// 					<span>...</span>
// 					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
// 						5
// 					</button>
// 					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
// 						→
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default BookingTable;
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Booking, Route, User, Vehicle, Driver } from '@/types';
// import { bookings } from '@/utils/data';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import BookingDetails from './BookingDetails';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import DatePicker from '@/components/DatePicker';
import { useGetBookingsQuery } from '@/api/bookingApi';

const bookingStatus: { [key: string]: string } = {
	Accepted: 'bg-gray-200 text-gray-800',
	Waiting: 'bg-yellow-100 text-yellow-800',
	'No Show': 'bg-red-100 text-red-800',
	Declined: 'bg-gray-100 text-gray-800',
	Completed: 'bg-green-100 text-green-800',
	Requested: 'bg-blue-100 text-blue-800',
	'On Going': 'bg-blue-100 text-blue-800',
	Cancelled: 'bg-red-100 text-red-800',
	Dropped: 'bg-gray-100 text-gray-800',
};

const BookingTable: React.FC = () => {
	const { data: bookings, isLoading } = useGetBookingsQuery({ search: '' });
	console.log(bookings);
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

	const getStatusColor = (status: string): string => {
		return bookingStatus[status] || 'bg-gray-100 text-gray-800';
	};

	if (isLoading || !bookings) return <div>Loading...</div>;

	return (
		<div className="pb-6 pt-8 px-6 mb-6 bg-white rounded-lg shadow">
			<div className="flex justify-between items-center mb-6 px-2">
				<h2 className="text-xl font-semibold">Booking Management</h2>

				<div className="flex items-center space-x-4">
					<div className="relative">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
						<input
							type="text"
							placeholder="Search Emp, Booking ID"
							className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="flex items-center space-x-2">
						<DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
					</div>
				</div>
			</div>

			<div className="overflow-x-auto border-b">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Booking ID</TableHead>
							<TableHead>Employee</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>From</TableHead>
							<TableHead>To</TableHead>
							<TableHead>Vehicle</TableHead>
							<TableHead>Requested Pickup Time</TableHead>
							<TableHead>Pickup Time</TableHead>
							<TableHead>Planned Drop</TableHead>
							<TableHead>Actual Drop</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{bookings.map((booking: Booking, idx) => (
							<TableRow
								key={booking._id}
								className={`${idx % 2 === 1 && 'bg-slate-100'}`}
							>
								<TableCell className="font-medium">{booking._id}</TableCell>
								<TableCell className="font-medium">
									{(booking.userId as User).firstName +
										' ' +
										(booking.userId as User).lastName}
								</TableCell>
								<TableCell>
									<span
										className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
											booking.status
										)}`}
									>
										{booking.status ?? '-'}
									</span>
								</TableCell>
								<TableCell>
									{(booking.routeId as Route).pickupPoint ?? '-'}
								</TableCell>
								<TableCell>
									{(booking.routeId as Route).dropOffPoint ?? '-'}
								</TableCell>
								<TableCell>
									{(booking.vehicle as Vehicle)?.licensePlate ?? '-'}
								</TableCell>
								<TableCell>{booking.requestedPickupTime ?? '-'}</TableCell>
								<TableCell>{booking.pickupTime ?? '-'}</TableCell>
								<TableCell>{booking.plannedDrop ?? '-'}</TableCell>
								<TableCell>{booking.actualDrop ?? '-'}</TableCell>
								<TableCell>
									<Sheet>
										<SheetTrigger asChild>
											<Button
												variant="outline"
												className="text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 font-medium cursor-pointer"
											>
												View
											</Button>
										</SheetTrigger>
										<SheetContent>
											<BookingDetails
												bookingId={booking._id}
												empName={(booking.userId as User).username}
												empId={(booking.userId as User)._id}
												status={booking.status}
												// date={booking.date}
												busNumber={
													(booking.vehicle as Vehicle)?.licensePlate
												}
												// busCode={booking.vehicle.busCode}
												busType={(booking.vehicle as Vehicle)?.make}
												capacity={(booking?.vehicle as Vehicle)?.capacity}
												pickupLocation={
													(booking.routeId as Route).pickupPoint
												}
												pickupTime={booking.requestedPickupTime}
												dropLocation={
													(booking.routeId as Route).dropOffPoint
												}
												// dropTime={booking.plannedDrop}
												driverName={(booking.driverId as Driver)?.name}

												// driverPhone={booking.driver.phone}
												// driverRating={booking.driver.rating}
											/>
										</SheetContent>
									</Sheet>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
				<span>Showing 1-10 of 50 items</span>
				<div className="flex items-center space-x-2">
					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
						1
					</button>
					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
						2
					</button>
					<span>...</span>
					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
						5
					</button>
					<button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">
						→
					</button>
				</div>
			</div> */}
			<Pagination className="mt-4 text-gray-600">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">5</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default BookingTable;
