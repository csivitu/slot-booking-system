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

// {
//     "data":[
//       {
//         "day":"20 dec 2020",
//         "slots":[
//           {"duration":"11 AM - 12 PM","maxRegs":10},
//           {"duration":"2 PM - 3 PM","maxRegs":10},
//           {"duration":"3 PM - 4 PM","maxRegs":10},
//           {"duration":"4 PM - 5 PM","maxRegs":10},
//           {"duration":"5 PM - 6 PM","maxRegs":10},
//           {"duration":"6 PM - 7 PM","maxRegs":10},
//           {"duration":"7 PM - 8 PM","maxRegs":10}
//         ]
//       },
//       {
//         "day":"21 dec 2020",
//         "slots":[
//           {"duration":"11 AM - 12 PM","maxRegs":10},
//           {"duration":"2 PM - 3 PM","maxRegs":10},
//           {"duration":"3 PM - 4 PM","maxRegs":10},
//           {"duration":"4 PM - 5 PM","maxRegs":10},
//           {"duration":"5 PM - 6 PM","maxRegs":10},
//           {"duration":"6 PM - 7 PM","maxRegs":10},
//           {"duration":"7 PM - 8 PM","maxRegs":10}
//         ]
//       },
//       {
//         "day":"22 dec 2020",
//         "slots":[
//           {"duration":"11 AM - 12 PM","maxRegs":10},
//           {"duration":"2 PM - 3 PM","maxRegs":10},
//           {"duration":"3 PM - 4 PM","maxRegs":10},
//           {"duration":"4 PM - 5 PM","maxRegs":10},
//           {"duration":"5 PM - 6 PM","maxRegs":10},
//           {"duration":"6 PM - 7 PM","maxRegs":10},
//           {"duration":"7 PM - 8 PM","maxRegs":10}
//         ]
//       },
//       {
//         "day":"23 dec 2020",
//         "slots":[
//           {"duration":"11 AM - 12 PM","maxRegs":10},
//           {"duration":"2 PM - 3 PM","maxRegs":10},
//           {"duration":"3 PM - 4 PM","maxRegs":10},
//           {"duration":"4 PM - 5 PM","maxRegs":10},
//           {"duration":"5 PM - 6 PM","maxRegs":10},
//           {"duration":"6 PM - 7 PM","maxRegs":10},
//           {"duration":"7 PM - 8 PM","maxRegs":10}
//         ]
//       }
//     ]
// }

export default router;
