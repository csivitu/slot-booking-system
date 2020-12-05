import mongoose from 'mongoose';
import joigoose from 'joigoose';
import Joi from 'joi';

const Joigoose = joigoose(mongoose);

const joiSlotSchema = Joi.object({
    day: Joi.number().required().meta({ unique: true }),
    slots: Joi.array(Joi.object({
        duration: Joi.string().required(),
        maxRegs: Joi.number().required(),
        regs: Joi.array(Joi.object({
            id: Joi.string().required().meta({ unique: true }),
            inviteLink: Joi.string().required().meta({ unique: true }),
        })),
    })).required(),
});

// const exampleSlotDocument = {
//     day: 1,
//     slots: [
//         {
//             duration: '11AM-12PM',
//             maxRegs: 3,
//             regs: [
//                 {
//                     id: '20XXXYYYY',
//                     inviteLink: 'XXXX',
//                 },
//             ],
//         },
//     ],
// };

const mongooseSlotSchema = new mongoose.Schema(
    Joigoose.convert(joiSlotSchema),
);

const Slot = mongoose.model('Slot', mongooseSlotSchema);

export {
    Slot,
    joiSlotSchema,
};
