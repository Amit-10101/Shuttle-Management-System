import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import CustomForm from '../CustomForm';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { driverSchema } from '../../schemas/driverSchema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type DriverFormData = z.infer<typeof driverSchema>;

const DriverForm: React.FC = () => {
	const onSubmit: SubmitHandler<DriverFormData> = (data) => {
		console.log(data);
	};

	const defaultValues: DriverFormData = {
		name: '',
		username: '',
		email: '',
		mobile: '',
		vehicle: '',
		// availability: [],
		licenseNumber: '',
		experienceYears: 0,
	};

	const formFields: {
		title: string;
		name: keyof DriverFormData;
		defaultValue: string | number;
		type: string;
		otherClassnames?: string;
	}[] = [
		{ title: 'Name', name: 'name', defaultValue: '', type: 'text' },
		{ title: 'Username', name: 'username', defaultValue: '', type: 'text' },
		{ title: 'Email', name: 'email', defaultValue: '', type: 'email' },
		{ title: 'Mobile', name: 'mobile', defaultValue: '', type: 'text' },
		{ title: 'License Number', name: 'licenseNumber', defaultValue: '', type: 'text' },
		{ title: 'Vehicle', name: 'vehicle', defaultValue: '', type: 'select' },
		{ title: 'Experience Years', name: 'experienceYears', defaultValue: 0, type: 'number' },
	];

	const vehicles = [
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f0',
			make: 'Toyota',
			model: 'Hiace',
			year: 2022,
			licensePlate: 'PB08-AB-1234',
			capacity: 14,
			status: 'Active',
		},
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f1',
			make: 'Mercedes-Benz',
			model: 'Sprinter',
			year: 2021,
			licensePlate: 'DL12-CD-5678',
			capacity: 16,
			status: 'Active',
		},
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f2',
			make: 'Ford',
			model: 'Transit',
			year: 2023,
			licensePlate: 'HR26-EF-9012',
			capacity: 12,
			status: 'Maintenance',
		},
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f3',
			make: 'Tata Motors',
			model: 'Winger',
			year: 2020,
			licensePlate: 'MH14-GH-3456',
			capacity: 15,
			status: 'Inactive',
		},
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f4',
			make: 'Ashok Leyland',
			model: 'Stallion',
			year: 2019,
			licensePlate: 'KA05-IJ-7890',
			capacity: 20,
			status: 'Active',
		},
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f5',
			make: 'Volvo',
			model: '9400',
			year: 2022,
			licensePlate: 'TN22-KL-1234',
			capacity: 45,
			status: 'Active',
		},
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f6',
			make: 'Hyundai',
			model: 'Starex',
			year: 2018,
			licensePlate: 'UP16-MN-5678',
			capacity: 12,
			status: 'Inactive',
		},
		{
			_id: '65b7d8a7c2e8f9a3b4d5e6f7',
			make: 'Mahindra',
			model: 'Maxximo',
			year: 2023,
			licensePlate: 'RJ14-OP-9012',
			capacity: 8,
			status: 'Active',
		},
	];

	return (
		<CustomForm<DriverFormData>
			schema={driverSchema}
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
										{field.type === 'select' ? (
											<Select
												onValueChange={(value) =>
													setValue(field.name, value)
												}
												defaultValue={formField.value?.toString() || ''}
											>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Select Vehicle" />
												</SelectTrigger>
												<SelectContent>
													{vehicles.map((vehicle) => (
														<SelectItem
															key={vehicle._id}
															value={vehicle._id}
														>
															{vehicle.make} {vehicle.model}{' '}
															<span className="text-gray-500">
																({vehicle.licensePlate})
															</span>
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
												value={
													field.type === 'number'
														? Number(formField.value)
														: formField.value || undefined
												}
												onChange={(e) =>
													formField.onChange(
														field.type === 'number'
															? Number(e.target.value)
															: e.target.value
													)
												}
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

export default DriverForm;
