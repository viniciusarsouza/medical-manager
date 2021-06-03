import { Router } from 'express';

import CreateDoctorService from '../services/CreateDoctorService';
import GetDoctorService from '../services/GetDoctorsService';

const doctorsRouter = Router();

doctorsRouter.post('/', async (request, response) => {
    const { name, crm, landline, cellphone, cep, medical_specialty } =
        request.body;

    const createDoctor = new CreateDoctorService();

    const doctor = await createDoctor.execute({
        name,
        crm,
        landline,
        cellphone,
        cep,
        medical_specialty,
    });

    return response.json(doctor);
});

doctorsRouter.get('/:id', async (request, response) => {
    const { id } = request.params;

    const getDoctor = new GetDoctorService();

    const doctor = await getDoctor.execute(id);

    return response.json(doctor);
});

export default doctorsRouter;
