import { useState } from 'react';
// import { useGetBookingsQuery } from '../api/bookingApi';

const SearchBar: React.FC = () => {
	const [search, setSearch] = useState('');
	// const { refetch } = useGetBookingsQuery({ search }); // Pass search to the query

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		// setSearch(e.target.value);
		// refetch(); // Trigger refetch on input change
	};

	return (
		<input
			type="text"
			value={search}
			onChange={handleSearchChange}
			placeholder="Search bookings..."
		/>
	);
};

export default SearchBar;
