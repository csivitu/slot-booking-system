import Joi from 'joi';

const regSchema = Joi.object({
	day: Joi.string().required(),
	id: Joi.string().required(),
	slot: Joi.string().required(),
});

export default regSchema;
