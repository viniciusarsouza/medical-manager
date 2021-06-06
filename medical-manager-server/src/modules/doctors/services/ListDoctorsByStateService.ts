import { injectable, inject } from 'tsyringe';

import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IListDoctorsRepository from '../repositories/IListDoctorsRepository';

@injectable()
class ListDoctorsByStateService {
    constructor(
        @inject('ListDoctorsRepository')
        private listDoctorsRepository: IListDoctorsRepository,
    ) {}

    public async execute(state: string): Promise<Doctor[] | undefined> {
        const doctors = this.listDoctorsRepository.listByState(state);

        return doctors;
    }
}

export default ListDoctorsByStateService;
