import React from 'react';
import { useForm, SubmitHandler, FieldValues, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';
import { Form } from './ui/form';
import { Button } from './ui/button';
// import { Button } from './ui/button';

interface CustomFormProps<T extends FieldValues> {
	schema: ZodSchema<T>;
	onSubmit: SubmitHandler<T>;
	defaultValues?: DefaultValues<T>;
	// children: React.ReactNode;
	children: (methods: ReturnType<typeof useForm<T>>) => React.ReactNode;
	otherClassnames?: string;
}

const CustomForm = <T extends FieldValues>({
	schema,
	onSubmit,
	defaultValues,
	children,
	otherClassnames,
}: CustomFormProps<T>) => {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm<T>({
	// 	resolver: zodResolver(schema),
	// 	defaultValues,
	// });
	const form = useForm<T>({
		resolver: zodResolver(schema),
		defaultValues,
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={otherClassnames}>
				{/* {React.Children.map(children, (child) => {
				if (React.isValidElement(child) && typeof child.props === 'object') {
					return React.cloneElement(child, {
						...child.props,
						register,
						errors,
					} as React.Attributes & { register: typeof register; errors: typeof errors });
				}
				return child;
			})}
			<button type="submit">Submit</button> */}
				{children(form)}
				{/* <Button type="submit">Submit</Button> */}
			</form>
		</Form>
	);
};

export default CustomForm;
