import express from 'express';
import Joi from 'joi';
import authenticateToken from '../middlewares/authenticate';
import { Slot, joiSlotSchema } from '../db/models.js';

const router = new express.Router();

router.post('/', authenticateToken, async (req, res) => {
    try {
        if (req.body.id.slice(3) !== 'CSI') {
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
            await Slot.create(...data);
            res.json({ status: 'success', message: 'Success: resetted slots successfully' });
        }
    } catch (e) {
        res.json({ status: 'failed', message: e.toString() });
    }
});

export default router;
