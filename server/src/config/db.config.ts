import mongoose from 'mongoose';

const connectToDB = async () => {
	const { MONGO_URI, DB_NAME } = process.env;
	if (!MONGO_URI) {
		throw new Error('MongoDB URI is not defined');
	}
	if (!DB_NAME) {
		throw new Error('DB Name is not defined');
	}

	await mongoose.connect(MONGO_URI, {
		dbName: DB_NAME,
	});
	console.log('Connected to MongoDB');
};

export default connectToDB;
