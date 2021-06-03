import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Doctor from '../models/Doctor';

interface Request {
    name: string;
    crm: number;
    landline: string;
    cellphone: string;
    cep: number;
    medical_specialty: string;
}

class CreateDoctorService {
    public async execute({
        name,
        crm,
        landline,
        cellphone,
        cep,
        medical_specialty,
    }: Request): Promise<Doctor> {
        const doctorsRepository = getRepository(Doctor);

        const checkDoctorExists = await doctorsRepository.findOne({
            where: { crm },
        });

        if (checkDoctorExists) {
            throw new AppError('CRM já cadastrado.');
        }

        const doctor = doctorsRepository.create({
            name,
            crm,
            landline,
            cellphone,
            cep,
            medical_specialty,
        });

        await doctorsRepository.save(doctor);

        return doctor;
    }
}

export default CreateDoctorService;
