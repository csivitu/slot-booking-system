import express from 'express';
import Joi from 'joi';
import regSchem from '../utils/regSchema.js';
import Slot from '../db/models.js';

const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const { day, id, slot } = Joi.attempt(req.body, regSchem); // auth skipped
        const doc = await Slot.findOne({ day });
        if (!doc) {
            res.json({ status: 'failed', message: 'Error: day unavailable' });
        } else {
            let slotAvailable = false;
            for (let i = 0; i < doc.slots.length; i += 1) {
                const element = doc.slots[i];
                if (element.duration === slot && element.maxRegs > element.regs.length) {
                    element.maxRegs.push({ id, inviteLink: id }); // link
                    slotAvailable = true;
                    break;
                }
            }
            if (slotAvailable) {
                await doc.save();
                res.json({ status: 'success', message: `inviteLink: ${id}` }); // link
            } else {
                res.json({ status: 'failed', message: 'Error: slot unavailable' });
            }
        }
    } catch (e) {
        res.json({ status: 'failed', message: e.toString() });
    }
});

export default router;
