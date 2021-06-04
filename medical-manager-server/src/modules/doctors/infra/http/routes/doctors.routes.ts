import { Router } from 'express';

import DoctorsRepository from '@modules/doctors/infra/typeorm/repositories/DoctorsRepository';
import CreateDoctorService from '@modules/doctors/services/CreateDoctorService';
import GetDoctorService from '@modules/doctors/services/GetDoctorsService';

const doctorsRouter = Router();

doctorsRouter.post('/', async (request, response) => {
    const { name, crm, landline, cellphone, cep, medical_specialty } =
        request.body;

    const doctorsRepository = new DoctorsRepository();
    const createDoctor = new CreateDoctorService(doctorsRepository);

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

    const doctorsRepository = new DoctorsRepository();
    const getDoctor = new GetDoctorService(doctorsRepository);

    const doctor = await getDoctor.execute(id);

    return response.json(doctor);
});

export default doctorsRouter;
