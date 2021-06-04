import { Router } from 'express';
import { container } from 'tsyringe';

import DoctorsController from '../controllers/DoctorsController';

const doctorsRouter = Router();
const doctorsController = new DoctorsController();

doctorsRouter.post('/', doctorsController.create);

doctorsRouter.get('/:id', doctorsController.index);

export default doctorsRouter;
