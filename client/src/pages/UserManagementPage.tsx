import React from 'react';
import UserForm from '@/components/user/UserForm';

const UserManagementPage: React.FC = () => {
	return (
		<div className="max-w-lg mx-auto p-8 flex justify-center w-full">
			<UserForm />
		</div>
	);
};

export default UserManagementPage;
