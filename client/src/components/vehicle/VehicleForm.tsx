import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import CustomForm from '../CustomForm';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { vehicleSchema } from '../../schemas/vehicleSchema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type VehicleFormData = z.infer<typeof vehicleSchema>;

const VehicleForm: React.FC = () => {
	const onSubmit: SubmitHandler<VehicleFormData> = (data) => {
		console.log(data);
	};

	const defaultValues: VehicleFormData = {
		_id: '',
		make: '',
		model: '',
		year: new Date().getFullYear(),
		licensePlate: '',
		capacity: 0,
		status: 'Active',
	};

	const formFields: {
		title: string;
		name: keyof VehicleFormData;
		defaultValue: string | number;
		type: string;
		otherClassnames?: string;
	}[] = [
		{ title: 'Make', name: 'make', defaultValue: '', type: 'text' },
		{ title: 'Model', name: 'model', defaultValue: '', type: 'text' },
		{
			title: 'Year',
			name: 'year',
			defaultValue: new Date().getFullYear(),
			type: 'number',
		},
		{ title: 'License Plate', name: 'licensePlate', defaultValue: '', type: 'text' },
		{ title: 'Capacity', name: 'capacity', defaultValue: 0, type: 'number' },
		{ title: 'Status', name: 'status', defaultValue: 'Active', type: 'select' },
	];

	return (
		<CustomForm<VehicleFormData>
			schema={vehicleSchema}
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
												defaultValue={
													formField.value.toString() || 'Active'
												}
											>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Select Status" />
												</SelectTrigger>
												<SelectContent>
													{['Active', 'Inactive', 'Maintenance'].map(
														(status) => (
															<SelectItem key={status} value={status}>
																{status}
															</SelectItem>
														)
													)}
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

export default VehicleForm;
