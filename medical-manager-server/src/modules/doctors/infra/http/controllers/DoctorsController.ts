import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDoctorService from '@modules/doctors/services/CreateDoctorService';
import GetDoctorService from '@modules/doctors/services/GetDoctorService';
import DeleteDoctorService from '@modules/doctors/services/DeleteDoctorService';
import UpdateDoctorService from '@modules/doctors/services/UpdateDoctorService';

class DoctorsController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            name,
            crm,
            landline,
            cellphone,
            cep,
            first_medical_specialty,
            second_medical_specialty,
        } = request.body;

        const createDoctor = container.resolve(CreateDoctorService);

        const doctor = await createDoctor.execute({
            name,
            crm,
            landline,
            cellphone,
            cep,
            first_medical_specialty,
            second_medical_specialty,
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

    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { id } = request.params;

        const getDoctor = container.resolve(GetDoctorService);

        const doctor = await getDoctor.execute(id);

        const deleteDoctor = container.resolve(DeleteDoctorService);

        await deleteDoctor.execute(id);

        return response.json(`Deleted Dr. ${doctor.name}`);
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const {
            name,
            crm,
            landline,
            cellphone,
            cep,
            first_medical_specialty,
            second_medical_specialty,
        } = request.body;

        const { id } = request.params;

        const updateDoctor = container.resolve(UpdateDoctorService);

        const doctor = await updateDoctor.execute({
            id,
            name,
            crm,
            landline,
            cellphone,
            cep,
            first_medical_specialty,
            second_medical_specialty,
        });

        return response.json(doctor);
    }
}

export default DoctorsController;
