import mongoose from 'mongoose';
import Joi from 'joi';

const joiSlotSchema = Joi.object({
	day: Joi.string().required(),
	slots: Joi.array().items(Joi.object({
		duration: Joi.string().required(),
		maxRegs: Joi.number().required(),
		regCount: Joi.number().default(0),
	})).required(),
});

const mongooseSlotSchema = new mongoose.Schema({
	day: {
		type: String,
		required: true,
		unique: true,
	},
	slots: {
		type: [{
			duration: {
				type: String,
				required: true,
			},
			maxRegs: {
				type: Number,
				required: true,
			},
			regCount: {
				type: Number,
				default: 0,
			},
		}],
		required: true,
	},
});

const mongooseUserSchema = new mongoose.Schema({
	regNo: {
		type: String,
		required: true,
		unique: true,
	},
	inviteLink: {
		type: String,
		required: true,
		unique: true,
	},
	day: {
		type: String,
		required: true,
	},
	slot: {
		type: String,
		required: true,
	},
});

const Slot = mongoose.model('Slot', mongooseSlotSchema);
const User = mongoose.model('User', mongooseUserSchema);

export {
	Slot,
	User,
	joiSlotSchema,
};
