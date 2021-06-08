import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import DoctorsController from '../controllers/DoctorsController';
import ListDoctorsController from '../controllers/ListDoctorsController';

const doctorsRouter = Router();
const doctorsController = new DoctorsController();
const listDoctorsController = new ListDoctorsController();

doctorsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().max(120).required(),
            crm: Joi.number().max(10000000).required(),
            landline: Joi.number().required(),
            cellphone: Joi.number().required(),
            cep: Joi.number().max(100000000).required(),
            first_medical_specialty: Joi.string().required(),
            second_medical_specialty: Joi.string(),
        },
    }),
    doctorsController.create,
);

doctorsRouter.get('/', doctorsController.index);

doctorsRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    doctorsController.getById,
);

doctorsRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    doctorsController.delete,
);

doctorsRouter.put(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
        [Segments.BODY]: {
            name: Joi.string().max(120).required(),
            crm: Joi.number().max(10000000).required(),
            landline: Joi.number().required(),
            cellphone: Joi.number().required(),
            cep: Joi.number().max(100000000).required(),
            first_medical_specialty: Joi.string().required(),
            second_medical_specialty: Joi.string(),
        },
    }),
    doctorsController.update,
);

doctorsRouter.get(
    '/list/cep/:cep',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    listDoctorsController.indexByCep,
);

doctorsRouter.get(
    '/list/street/:street',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    listDoctorsController.indexByStreet,
);

doctorsRouter.get(
    '/list/city/:city',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    listDoctorsController.indexByCity,
);

doctorsRouter.get(
    '/list/state/:state',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    listDoctorsController.indexByState,
);

doctorsRouter.get(
    '/list/medicalspecialty/:medicalSpecialty',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        },
    }),
    listDoctorsController.indexByMedicalSpecialty,
);

export default doctorsRouter;
