import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';

interface DatePickerProps {
	selectedDate: Date | undefined;
	setSelectedDate: (date: Date | undefined) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate = new Date(), setSelectedDate }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={`w-[240px] justify-start text-left font-normal ${
						!selectedDate && 'text-muted-foreground'
					}`}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{selectedDate ? format(selectedDate, 'PPP') : <span>Select Date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={selectedDate || undefined}
					onSelect={setSelectedDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};

export default DatePicker;
