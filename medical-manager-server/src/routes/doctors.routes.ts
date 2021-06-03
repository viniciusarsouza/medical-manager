import { Router } from 'express';
import CreateDoctorService from '../services/CreateDoctorService';
import GetDoctorService from '../services/GetDoctorsService';
import DoctorsRepository from '../repositories/DoctorsRepository';

const doctorsRouter = Router();

doctorsRouter.post('/', async (request, response) => {
    try {
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
    } catch (err) {
        return response.status(400).json({ err: err.message });
    }
});

doctorsRouter.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const getDoctor = new GetDoctorService();

        const doctor = await getDoctor.execute(id);

        return response.json(doctor);
    } catch (err) {
        return response.status(400).json({ err: err.message });
    }
});

export default doctorsRouter;
