import express from 'express';
import Joi from 'joi';
import { Slot, joiSlotSchema } from '../db/models.js';

const router = new express.Router();

router.post('/', async (req, res) => {
	try {
		if (!req.user.scope.includes('csi')) {
			res.json({ status: 'failed', message: 'Error: unauthorized' });
		} else {
			const data = Joi.attempt(req.body.data, Joi.array().items(joiSlotSchema));
			try {
				await Slot.collection.drop();
			} catch (err) {
				if (err.message !== 'ns not found') {
					throw err;
				}
			}
			const response = await Slot.create(...data);
			res.json({ status: 'success', data: response });
		}
	} catch (e) {
		res.json({ status: 'failed', message: e.toString() });
	}
});

// const body = {
// 	data: [{
// 		day: '6	dec	2020',
// 		slots: [
// 			{
// 				duration: '11AM-12PM',
// 				maxRegs: 3,
// 			},
// 		],
// 	}],
// };

export default router;
