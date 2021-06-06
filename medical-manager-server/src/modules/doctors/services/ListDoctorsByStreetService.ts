import { injectable, inject } from 'tsyringe';

import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IListDoctorsRepository from '../repositories/IListDoctorsRepository';

@injectable()
class ListDoctorsByStreetService {
    constructor(
        @inject('ListDoctorsRepository')
        private listDoctorsRepository: IListDoctorsRepository,
    ) {}

    public async execute(street: string): Promise<Doctor[] | undefined> {
        const doctors = this.listDoctorsRepository.listByStreet(street);

        return doctors;
    }
}

export default ListDoctorsByStreetService;
