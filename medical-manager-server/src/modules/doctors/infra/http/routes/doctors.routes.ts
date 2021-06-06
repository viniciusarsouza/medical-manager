import { Router } from 'express';

import DoctorsController from '../controllers/DoctorsController';
import ListDoctorsController from '../controllers/ListDoctorsController';

const doctorsRouter = Router();
const doctorsController = new DoctorsController();
const listDoctorsController = new ListDoctorsController();

doctorsRouter.post('/', doctorsController.create);

doctorsRouter.get('/', doctorsController.index);

doctorsRouter.get('/:id', doctorsController.getById);

doctorsRouter.delete('/:id', doctorsController.delete);

doctorsRouter.put('/:id', doctorsController.update);

doctorsRouter.get('/list/cep/:cep', listDoctorsController.indexByCep);

doctorsRouter.get('/list/street/:street', listDoctorsController.indexByStreet);

doctorsRouter.get('/list/city/:city', listDoctorsController.indexByCity);

doctorsRouter.get('/list/state/:state', listDoctorsController.indexByState);

doctorsRouter.get(
    '/list/medicalspecialty/:medicalSpecialty',
    listDoctorsController.indexByMedicalSpecialty,
);

export default doctorsRouter;
