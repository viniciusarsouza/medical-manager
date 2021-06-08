import { injectable, inject } from 'tsyringe';

import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IListDoctorsRepository from '../repositories/IListDoctorsRepository';

@injectable()
class ListDoctorsByMedicalSpecialtyService {
    constructor(
        @inject('ListDoctorsRepository')
        private listDoctorsRepository: IListDoctorsRepository,
    ) {}

    public async execute(
        medicalSpecialty: string,
    ): Promise<Doctor[] | undefined> {
        const doctors =
            this.listDoctorsRepository.listByMedicalSpecialty(medicalSpecialty);

        return doctors;
    }
}

export default ListDoctorsByMedicalSpecialtyService;
