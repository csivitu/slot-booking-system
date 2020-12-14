import Joi from 'joi';

const regSchema = Joi.object({
	day: Joi.string().required(),
	regNo: Joi.string().required(),
	slot: Joi.string().required(),
});

export default regSchema;
