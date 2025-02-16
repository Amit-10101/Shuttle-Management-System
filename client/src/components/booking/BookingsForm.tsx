import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { bookingSchema } from '../../schemas/bookingSchema';
import { z } from 'zod';
import CustomForm from '../CustomForm';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm: React.FC = () => {
	const onSubmit: SubmitHandler<BookingFormData> = (data) => {
		console.log(data);
	};

	const defaultValues: BookingFormData = {
		userId: '',
		status: 'Requested',
		routeId: '',
		driverId: '',
		vehicle: '',
		requestedPickupTime: '',
		pickupTime: '',
		plannedDrop: '',
		actualDrop: '',
	};

	const formFields: {
		title: string;
		name: keyof BookingFormData;
		defaultValue: string;
		type: string;
	}[] = [
		{ title: 'User ID', name: 'userId', defaultValue: '', type: 'text' },
		{ title: 'Status', name: 'status', defaultValue: 'Requested', type: 'dropdown' },
		{ title: 'Route ID', name: 'routeId', defaultValue: '', type: 'text' },
		{
			title: 'Requested Pickup Time',
			name: 'requestedPickupTime',
			defaultValue: '',
			type: 'text',
		},
	];

	return (
		<CustomForm<BookingFormData>
			schema={bookingSchema}
			onSubmit={onSubmit}
			defaultValues={defaultValues}
			otherClassnames="w-full flex flex-col gap-4"
		>
			{({ control, setValue }) => (
				<>
					{formFields.map((field) => (
						<FormField
							key={field.name}
							control={control}
							name={field.name}
							render={({ field: formField }) => (
								<FormItem className="flex w-full flex-col gap-2.5">
									<FormLabel className="">{field.title}</FormLabel>
									<FormControl>
										{field.type === 'dropdown' ? (
											<Select
												onValueChange={(value) =>
													setValue(field.name, value)
												}
												defaultValue={formField.value || 'Requested'}
											>
												<SelectTrigger>
													<SelectValue placeholder="Select Status" />
												</SelectTrigger>

												<SelectContent>
													{[
														'Accepted',
														'Waiting',
														'No Show',
														'Declined',
														'Completed',
														'Requested',
														'On Going',
														'Cancelled',
														'Dropped',
													].map((status) => (
														<SelectItem key={status} value={status}>
															{status}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										) : (
											<Input
												type={field.type}
												className="no-focus min-h-12 rounded-1.5 border"
												required
												{...formField}
												value={formField.value || ''}
											/>
										)}
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}

					<div className="flex justify-between w-full">
						<Button
							type="reset"
							className="w-[47%] !py-6 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
							variant="outline"
						>
							Reset
						</Button>
						<Button
							type="submit"
							className="w-[47%] !py-6 bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out"
						>
							Submit
						</Button>
					</div>
				</>
			)}
		</CustomForm>
	);
};

export default BookingForm;
