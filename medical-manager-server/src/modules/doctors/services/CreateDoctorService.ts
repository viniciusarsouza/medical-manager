import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IDoctorsRepository from '../repositories/IDoctorsRepository';

interface Request {
    name: string;
    crm: number;
    landline: string;
    cellphone: string;
    cep: number;
    medical_specialty: string;
}

class CreateDoctorService {
    constructor(private doctorsRepository: IDoctorsRepository) {}

    public async execute({
        name,
        crm,
        landline,
        cellphone,
        cep,
        medical_specialty,
    }: Request): Promise<Doctor> {
        const checkDoctorExists = await this.doctorsRepository.findByCrm(crm);

        if (checkDoctorExists) {
            throw new AppError('CRM já cadastrado.');
        }

        const doctor = await this.doctorsRepository.create({
            name,
            crm,
            landline,
            cellphone,
            cep,
            medical_specialty,
        });

        return doctor;
    }
}

export default CreateDoctorService;
