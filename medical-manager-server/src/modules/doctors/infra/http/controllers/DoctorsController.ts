import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDoctorService from '@modules/doctors/services/CreateDoctorService';
import GetDoctorService from '@modules/doctors/services/GetDoctorService';

class DoctorsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, crm, landline, cellphone, cep, medical_specialty } =
            request.body;

        const createDoctor = container.resolve(CreateDoctorService);

        const doctor = await createDoctor.execute({
            name,
            crm,
            landline,
            cellphone,
            cep,
            medical_specialty,
        });

        return response.json(doctor);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const getDoctor = container.resolve(GetDoctorService);

        const doctor = await getDoctor.execute(id);

        return response.json(doctor);
    }
}

export default DoctorsController;
