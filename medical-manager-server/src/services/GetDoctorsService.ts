import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Doctor from '../models/Doctor';

class GetDoctor {
    public async execute(id: string): Promise<Doctor> {
        const doctorsRepository = getRepository(Doctor);

        const doctor = await doctorsRepository.findOne(id);

        if (!doctor) {
            throw new AppError('Medico não encontrado.');
        }

        return doctor;
    }
}

export default GetDoctor;
