import ICreateDoctorDTO from '@modules/doctors/dtos/ICreateDoctorDTO';
import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';

class DoctorsRepository implements IDoctorsRepository {
    private ormRepository: Repository<Doctor>;

    constructor() {
        this.ormRepository = getRepository(Doctor);
    }

    public async save(doctor: Doctor): Promise<Doctor> {
        return this.ormRepository.save(doctor);
    }

    public async create({
        name,
        crm,
        landline,
        cellphone,
        cep,
        medical_specialty,
    }: ICreateDoctorDTO): Promise<Doctor> {
        const doctor = this.ormRepository.create({
            name,
            crm,
            landline,
            cellphone,
            cep,
            medical_specialty,
        });

        await this.ormRepository.save(doctor);

        return doctor;
    }

    public async findByCrm(crm: number): Promise<Doctor | undefined> {
        const doctor = await this.ormRepository.findOne({
            where: { crm },
        });

        return doctor;
    }

    public async findById(id: string): Promise<Doctor | undefined> {
        const doctor = await this.ormRepository.findOne(id);

        return doctor;
    }
}

export default DoctorsRepository;