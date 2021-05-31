import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateDoctorService from '../services/CreateDoctorService';

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

export default doctorsRouter;
