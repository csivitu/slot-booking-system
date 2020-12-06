import mongoose from 'mongoose';
import joigoose from 'joigoose';
import Joi from 'joi';

const Joigoose = joigoose(mongoose);

const joiSlotSchema = Joi.object({
	day: Joi.string().required().meta({ unique: true }),
	slots: Joi.array().items(Joi.object({
		duration: Joi.string().required(),
		maxRegs: Joi.number().required(),
		regCount: Joi.number().required().default(0),
	})).required(),
});

const joiUserSchema = Joi.object({
	regNo: Joi.string().required().meta({ unique: true }),
	inviteLink: Joi.string().required().meta({ unique: true }),
	day: Joi.string().required(),
	slot: Joi.string().required(),
});

const mongooseSlotSchema = new mongoose.Schema(
	Joigoose.convert(joiSlotSchema),
);

const mongooseUserSchema = new mongoose.Schema(
	Joigoose.convert(joiUserSchema),
);

const Slot = mongoose.model('Slot', mongooseSlotSchema);
const User = mongoose.model('Slot', mongooseUserSchema);

export {
	Slot,
	User,
	joiSlotSchema,
};
