import { getRepository, Repository } from 'typeorm';

import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IListDoctorsRepository from '@modules/doctors/repositories/IListDoctorsRepository';

class ListDoctorsRepository implements IListDoctorsRepository {
    private ormRepository: Repository<Doctor>;

    constructor() {
        this.ormRepository = getRepository(Doctor);
    }

    public async listByCep(cep: number): Promise<Doctor[] | undefined> {
        const doctors = await this.ormRepository.find({
            where: { cep },
        });

        return doctors;
    }
    public async listByCity(city: string): Promise<Doctor[] | undefined> {
        const doctors = await this.ormRepository.find({
            where: { city },
        });

        return doctors;
    }

    public async listByState(state: string): Promise<Doctor[] | undefined> {
        const doctors = await this.ormRepository.find({
            where: { state },
        });

        return doctors;
    }

    public async listByStreet(street: string): Promise<Doctor[] | undefined> {
        const doctors = await this.ormRepository.find({
            where: { street },
        });

        return doctors;
    }

    public async listByMedicalSpecialty(
        medicalSpecialty: string,
    ): Promise<Doctor[] | undefined> {
        const doctors = await this.ormRepository.find({
            where: [
                { first_medical_specialty: medicalSpecialty },
                { second_medical_specialty: medicalSpecialty },
            ],
        });

        return doctors;
    }
}

export default ListDoctorsRepository;
