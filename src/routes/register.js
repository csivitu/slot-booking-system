import express from 'express';
import Joi from 'joi';
import regSchem from '../utils/regSchema.js';
import { Slot } from '../db/models.js';

function someFunctionToCreateInviteLink() {
    return Promise.resolve('XXXX');
}

const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const { day, id, slot } = Joi.attempt(req.body, regSchem);
        const doc = await Slot.findOne({ day });
        if (!doc) {
            res.json({ status: 'failed', message: 'Error: day unavailable' });
        } else {
            let index;
            for (let i = 0; i < doc.slots.length; i += 1) {
                const element = doc.slots[i];
                if (element.duration === slot && element.maxRegs > element.regs.length) {
                    index = i;
                    break;
                }
            }
            if (index) {
                const link = await someFunctionToCreateInviteLink();
                doc.slots[index].maxRegs.push({ id, inviteLink: link });
                await doc.save();
                res.json({ status: 'success', message: `inviteLink: ${link}` });
            } else {
                res.json({ status: 'failed', message: 'Error: slot unavailable' });
            }
        }
    } catch (e) {
        res.json({ status: 'failed', message: e.toString() });
    }
});

export default router;
