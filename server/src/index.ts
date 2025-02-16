import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectToDB from './config/db.config';
import apiRouter from './routes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/api/v1', apiRouter);

connectToDB().catch((e) => {
	console.error('Error connecting to MongoDB', e);
	process.exit(1);
});

app.use('/*test', (req, res) => {
	res.status(200).json({ message: 'Server is running...' });
});

app.use('*', (req, res) => {
	res.status(404).json({ message: 'Incorrect URL. Route not found.' });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
