import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import CustomForm from '../CustomForm';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { userSchema } from '../../schemas/userSchema';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type UserFormData = z.infer<typeof userSchema>;

const UserForm: React.FC = () => {
	const onSubmit: SubmitHandler<UserFormData> = (data) => {
		console.log(data);
	};

	const defaultValues: UserFormData = {
		// _id: '',
		username: '',
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		role: 'student',
	};

	const formFields: {
		title: string;
		name: keyof UserFormData;
		defaultValue: string;
		type: string;
		otherClassnames?: string;
	}[] = [
		{
			title: 'First Name',
			name: 'firstName',
			defaultValue: '',
			type: 'text',
		},
		{
			title: 'Last Name',
			name: 'lastName',
			defaultValue: '',
			type: 'text',
		},
		{ title: 'Username', name: 'username', defaultValue: '', type: 'text' },
		{ title: 'Phone', name: 'phone', defaultValue: '', type: 'text' },
		{ title: 'Email', name: 'email', defaultValue: '', type: 'email' },
		{ title: 'Role', name: 'role', defaultValue: 'student', type: 'select' },
	];

	return (
		<CustomForm<UserFormData>
			schema={userSchema}
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
								<FormItem className={'flex w-full flex-col gap-2.5'}>
									<FormLabel>{field.title}</FormLabel>
									<FormControl>
										{field.type === 'select' ? (
											<Select
												onValueChange={(value) =>
													setValue(field.name, value)
												}
												defaultValue={formField.value || 'student'}
											>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Select Role" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="student">Student</SelectItem>
													<SelectItem value="staff">Staff</SelectItem>
													<SelectItem value="admin">Admin</SelectItem>
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

export default UserForm;
