import { injectable, inject } from 'tsyringe';

import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IListDoctorsRepository from '../repositories/IListDoctorsRepository';

@injectable()
class ListDoctorsByCepService {
    constructor(
        @inject('ListDoctorsRepository')
        private listDoctorsRepository: IListDoctorsRepository,
    ) {}

    public async execute(cep: number): Promise<Doctor[] | undefined> {
        const doctors = this.listDoctorsRepository.listByCep(cep);

        return doctors;
    }
}

export default ListDoctorsByCepService;
