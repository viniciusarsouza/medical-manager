import { injectable, inject } from 'tsyringe';

import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IListDoctorsRepository from '../repositories/IListDoctorsRepository';

@injectable()
class ListDoctorsByCityService {
    constructor(
        @inject('ListDoctorsRepository')
        private listDoctorsRepository: IListDoctorsRepository,
    ) {}

    public async execute(city: string): Promise<Doctor[] | undefined> {
        const doctors = this.listDoctorsRepository.listByCity(city);

        return doctors;
    }
}

export default ListDoctorsByCityService;
