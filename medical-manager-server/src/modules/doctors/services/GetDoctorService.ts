import { getRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IDoctorsRepository from '../repositories/IDoctorsRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
class GetDoctor {
    constructor(
        @inject('DoctorsRepository')
        private doctorsRepository: IDoctorsRepository,
    ) {}

    public async execute(id: string): Promise<Doctor> {
        const doctorsRepository = getRepository(Doctor);

        const doctor = await this.doctorsRepository.findById(id);

        if (!doctor) {
            throw new AppError('Medico não encontrado.');
        }

        return doctor;
    }
}

export default GetDoctor;