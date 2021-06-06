import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IDoctorsRepository from '../repositories/IDoctorsRepository';

@injectable()
class ListDoctorsService {
    constructor(
        @inject('DoctorsRepository')
        private doctorsRepository: IDoctorsRepository,
    ) {}

    public async execute(): Promise<Doctor[]> {
        const doctors = this.doctorsRepository.list();

        return doctors;
    }
}

export default ListDoctorsService;
