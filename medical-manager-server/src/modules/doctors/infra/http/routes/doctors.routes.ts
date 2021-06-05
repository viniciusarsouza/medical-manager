import { Router } from 'express';

import DoctorsController from '../controllers/DoctorsController';

const doctorsRouter = Router();
const doctorsController = new DoctorsController();

doctorsRouter.post('/', doctorsController.create);

doctorsRouter.get('/:id', doctorsController.index);

doctorsRouter.delete('/:id', doctorsController.delete);

doctorsRouter.put('/:id', doctorsController.update);

export default doctorsRouter;
