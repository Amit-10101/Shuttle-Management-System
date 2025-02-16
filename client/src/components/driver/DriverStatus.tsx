import React, { useState } from 'react';
import {
	MoreVertical,
	CoffeeIcon,
	ArrowRightFromLineIcon,
	ArrowLeftFromLineIcon,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DatePicker from '@/components/DatePicker';

type TimelineEvent = {
	type: 'duty-start' | 'duty-end' | 'pickup-drop' | 'break' | 'vehicle-change' | 'empty-leg';
	startTime: string;
	endTime?: string;
	color?: string;
};

type Driver = {
	name: string;
	status: 'Online' | 'Offline';
	events: TimelineEvent[];
};

const HOURS = Array.from({ length: 17 }, (_, i) => i + 6); // 6:00 to 22:00

const TimelineSegment: React.FC<{ event: TimelineEvent }> = ({ event }) => {
	const getEventColor = () => {
		switch (event.type) {
			case 'break':
				return 'bg-yellow-200';
			case 'empty-leg':
				return 'bg-pink-200';
			case 'pickup-drop':
				return 'bg-blue-200';
			default:
				return 'bg-gray-200';
		}
	};

	return (
		<div className={`h-8 ${getEventColor()} rounded-md mx-0.5 relative min-w-8`}>
			{event.type === 'pickup-drop' && (
				<div className="absolute -bottom-1 right-1">
					<div className="w-2 h-2 bg-gray-500 rounded-full" />
				</div>
			)}
		</div>
	);
};

const DriverStatus: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

	const drivers: Driver[] = [
		{
			name: 'Samuel Jones',
			status: 'Online',
			events: [
				{ type: 'duty-start', startTime: '7:00' },
				{ type: 'empty-leg', startTime: '7:00', endTime: '7:30' },
				{ type: 'pickup-drop', startTime: '7:30', endTime: '8:30' },
				{ type: 'break', startTime: '8:30', endTime: '9:00' },
				{ type: 'empty-leg', startTime: '11:00', endTime: '11:30' },
			],
		},
		{
			name: 'Bob Jones',
			status: 'Offline',
			events: [
				{ type: 'pickup-drop', startTime: '9:00', endTime: '11:00' },
				{ type: 'break', startTime: '18:00', endTime: '18:30' },
			],
		},
		{
			name: 'Jonathan Spikes',
			status: 'Offline',
			events: [
				{ type: 'empty-leg', startTime: '10:00', endTime: '10:30' },
				{ type: 'pickup-drop', startTime: '10:30', endTime: '12:00' },
			],
		},
	];

	return (
		<Card className="w-full py-4 px-6 mb-6">
			<CardHeader className="flex flex-row items-center justify-between pb-6 !px-2 w-full">
				<div className="flex items-center justify-between gap-4 w-full">
					<h2 className="text-xl font-semibold">Driver Management</h2>

					<div className="flex items-center gap-2 text-sm text-gray-500">
						<DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
					</div>
				</div>
			</CardHeader>

			<CardContent className="!p-0">
				<div className="relative grid grid-cols-[1fr_5fr] border rounded-2xl ">
					<div className="p-4 border-b">
						<Input placeholder="Search driver" className="max-w-xs bg-gray-50" />
					</div>

					{/* Time indicators */}
					<div className="flex flex-1 border-b border-s p-4 items-center">
						{HOURS.map((hour) => (
							<div key={hour} className="flex-1 text-sm text-gray-500 text-center">
								{hour}:00
							</div>
						))}
					</div>

					{/* Driver rows */}
					{drivers.map((driver) => (
						<>
							<div className="flex items-center justify-between gap-2 py-2.5 px-4">
								<div>
									<div className="font-medium mb-1">{driver.name}</div>
									<div
										className={`text-xs py-0.5 px-2 rounded-sm w-fit ${
											driver.status === 'Online'
												? 'bg-green-100'
												: 'bg-red-100'
										}`}
									>
										{driver.status}
									</div>
								</div>

								{/* <Button variant="ghost" className="!p-2 cursor-pointer"> */}
								<DropdownMenu>
									<DropdownMenuTrigger>
										<MoreVertical className="w-5 h-5 text-gray-400 hover:bg-gray-100" />
									</DropdownMenuTrigger>

									<DropdownMenuContent>
										<DropdownMenuItem>
											<ArrowLeftFromLineIcon /> Start Duty
										</DropdownMenuItem>
										<DropdownMenuItem>
											<ArrowRightFromLineIcon /> End Duty
										</DropdownMenuItem>
										<DropdownMenuItem>
											<CoffeeIcon /> Add Break
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
								{/* </Button> */}
							</div>

							<div className="flex-1 grid grid-cols-17 border-s py-2.5 px-4">
								{driver.events.map((event, eventIdx) => (
									<TimelineSegment key={eventIdx} event={event} />
								))}
							</div>
						</>
					))}
				</div>

				{/* Legend */}
				<div className="flex gap-6 mt-4 text-sm justify-self-end text-gray-600">
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 border flex items-center justify-center">
							<div className="w-2 h-2 border-r border-t rotate-45" />
						</div>
						<span>Duty Start</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 border flex items-center justify-center">
							<div className="w-2 h-2 border-l border-b -rotate-45" />
						</div>
						<span>Duty End</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 bg-gray-500 rounded-full" />
						<span>Pickup/Drop</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 bg-yellow-200" />
						<span>Break</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 border" />
						<span>Vehicle Change</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-4 h-4 bg-pink-200" />
						<span>Empty Leg</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default DriverStatus;
