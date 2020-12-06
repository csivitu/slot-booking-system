import express from 'express';
import Joi from 'joi';
import { Slot, User } from '../db/models.js';
import someFunctionToCreateInviteLink from '../utils/createInvite.js';
import regSchema from '../utils/regSchema.js';

const router = new express.Router();

router.post('/', async (req, res) => {
	try {
		const { day, regNo, slot } = Joi.attempt({
			day: req.body.day,
			slot: req.body.slot,
			regNo: req.user.regNo,
		}, regSchema);
		const doc = await Slot.findOne({ day });
		if (!doc) {
			res.json({ status: 'failed', message: 'Error: day unavailable' });
		} else {
			let index;
			for (let i = 0; i < doc.slots.length; i += 1) {
				const element = doc.slots[i];
				if (element.duration === slot && element.seatsAvailable !== 0) {
					index = i;
					break;
				}
			}
			if (index) {
				const inviteLink = await someFunctionToCreateInviteLink();
				doc.slots[index].seatsAvailable -= 1;
				await User.create({
					regNo, day, slot, inviteLink,
				});
				await doc.save();
				res.json({ status: 'success', inviteLink });
			} else {
				res.json({ status: 'failed', message: 'Error: slot unavailable' });
			}
		}
	} catch (e) {
		res.json({ status: 'failed', message: e.toString() });
	}
});

router.get('/', async (req, res) => {
	try {
		const user = await User.findOne({ regNo: req.user.regNo });
		res.json({ status: 'success', data: user });
	} catch (e) {
		res.json({ status: 'failed', message: e.toString() });
	}
});

router.get('/slots', async (req, res) => {
	try {
		const { day } = req.query;
		const data = day ? await Slot.findOne({ day }) : await Slot.find({});
		res.json({ status: 'success', data });
	} catch (e) {
		res.json({ status: 'failed', message: e.toString() });
	}
});

export default router;
