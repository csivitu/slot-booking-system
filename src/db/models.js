import mongoose from 'mongoose';
import joigoose from 'joigoose';
import Joi from 'joi';

const Joigoose = joigoose(mongoose);

const joiUserSchema = Joi.object({
    email: Joi.string().required().meta({ unique: true }),
    timeSlot: Joi.string().required().meta(),
    inviteUrl: Joi.string().required().meta({ unique: true }),
});

const mongooseUserSchema = new mongoose.Schema(
    Joigoose.convert(joiUserSchema),
);

const User = mongoose.model('User', mongooseUserSchema);

export {
    User,
    joiUserSchema,
};
