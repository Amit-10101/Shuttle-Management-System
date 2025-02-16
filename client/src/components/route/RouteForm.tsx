import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import CustomForm from '../CustomForm';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { routeSchema } from '../../schemas/routeSchema';

type RouteFormData = z.infer<typeof routeSchema>;

const RouteForm: React.FC = () => {
	const onSubmit: SubmitHandler<RouteFormData> = (data) => {
		console.log(data);
	};

	const defaultValues: RouteFormData = {
		// _id: '',
		name: '',
		pickupPoint: '',
		dropOffPoint: '',
		distance: 0,
		duration: 0,
		// stops: [],
	};

	const formFields: {
		title: string;
		name: keyof RouteFormData;
		defaultValue: string | number;
		type: string;
		otherClassnames?: string;
	}[] = [
		{ title: 'Name', name: 'name', defaultValue: '', type: 'text' },
		{ title: 'Pickup Point', name: 'pickupPoint', defaultValue: '', type: 'text' },
		{ title: 'Drop Off Point', name: 'dropOffPoint', defaultValue: '', type: 'text' },
		{ title: 'Distance (km)', name: 'distance', defaultValue: '0', type: 'number' },
		{ title: 'Duration (min)', name: 'duration', defaultValue: '0', type: 'number' },
		// { title: 'Stops', name: 'stops', defaultValue: '', type: 'text' },
	];

	return (
		<CustomForm<RouteFormData>
			schema={routeSchema}
			onSubmit={onSubmit}
			defaultValues={defaultValues}
			otherClassnames="w-full flex flex-col gap-4"
		>
			{({ control }) => (
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

export default RouteForm;
