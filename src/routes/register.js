import express from 'express';
import Joi from 'joi';
import { User } from '../db/models.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const { email } = req.query;
    try {
        const user = await User.findOne({ email: Joi.attempt(email, Joi.string()) });
        const { timeSlot, inviteUrl } = user;
        if (user) {
            res.json({
                status: 'success', timeSlot, inviteUrl, email,
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'Error: not registered',
            });
        }
    } catch (e) {
        res.status(500).json({
            status: 'error',
            message: e.toString(),
        });
    }
});

export default router;
