import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Slot } from '../db/models.js';

dotenv.config();

// To run this script, run the following command from the root directory
// node src/scripts/addSlots.js

async function main() {
	try {
		await mongoose
			.connect(process.env.DB_URL, {
				useNewUrlParser: true,
				useCreateIndex: true,
				useUnifiedTopology: true,
			});

		console.info({ Message: 'DB connected successfully', error: 'Value: null' });

		const newSlots = [
			{
				day: '24 dec 2020',
				slots: [
					{ duration: '11 AM - 12 PM', maxRegs: 10 },
					{ duration: '12 PM - 1 PM', maxRegs: 10 },
					{ duration: '2 PM - 3 PM', maxRegs: 10 },
					{ duration: '3 PM - 4 PM', maxRegs: 10 },
					{ duration: '4 PM - 5 PM', maxRegs: 10 },
					{ duration: '5 PM - 6 PM', maxRegs: 10 },
					{ duration: '6 PM - 7 PM', maxRegs: 10 },
					{ duration: '7 PM - 8 PM', maxRegs: 10 },
					{ duration: '8 PM - 9 PM', maxRegs: 10 },
				],
			},
			{
				day: '25 dec 2020',
				slots: [
					{ duration: '11 AM - 12 PM', maxRegs: 10 },
					{ duration: '12 PM - 1 PM', maxRegs: 10 },
					{ duration: '2 PM - 3 PM', maxRegs: 10 },
					{ duration: '3 PM - 4 PM', maxRegs: 10 },
					{ duration: '4 PM - 5 PM', maxRegs: 10 },
					{ duration: '5 PM - 6 PM', maxRegs: 10 },
					{ duration: '6 PM - 7 PM', maxRegs: 10 },
					{ duration: '7 PM - 8 PM', maxRegs: 10 },
					{ duration: '8 PM - 9 PM', maxRegs: 10 },
				],
			},
		];

		await Slot.insertMany(newSlots);
		console.info('Added slots');
		process.exit(0);
	} catch (e) {
		console.error({ Message: 'DB connection failed', error: e.toString() });
		process.exit(1);
	}
}

main();
