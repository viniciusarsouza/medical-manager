import { injectable, inject } from 'tsyringe';

import Doctor from '../infra/typeorm/entities/Doctor';
import IAddressProvider from '@shared/container/providers/AddressProvider/models/IAddressProvider';
import IDoctorsRepository from '../repositories/IDoctorsRepository';
import AppError from '@shared/errors/AppError';

interface Request {
    id: string;
    name: string;
    crm: number;
    landline: string;
    cellphone: string;
    cep: number;
    first_medical_specialty: string;
    second_medical_specialty: string;
}

@injectable()
class UpdateDoctorService {
    constructor(
        @inject('DoctorsRepository')
        private doctorsRepository: IDoctorsRepository,

        @inject('AddressProvider')
        private addressProvider: IAddressProvider,
    ) {}

    public async execute({
        id,
        name,
        crm,
        landline,
        cellphone,
        cep,
        first_medical_specialty,
        second_medical_specialty,
    }: Request): Promise<Doctor> {
        const doctor = await this.doctorsRepository.findById(id);

        const address = await this.addressProvider.getAddress(cep);

        if (!doctor) {
            throw new AppError('Doctor not found');
        }

        const doctorWithUpdatedCrm = await this.doctorsRepository.findByCrm(
            crm,
        );

        if (doctorWithUpdatedCrm && doctorWithUpdatedCrm.id !== id) {
            throw new AppError('Already exists a Doctor with this CRM');
        }

        doctor.name = name;
        doctor.crm = crm;
        doctor.landline = landline;
        doctor.cellphone = cellphone;
        doctor.cep = cep;
        doctor.city = address.city;
        doctor.state = address.state;
        doctor.street = address.street;
        doctor.first_medical_specialty = first_medical_specialty;
        doctor.second_medical_specialty = second_medical_specialty;

        return this.doctorsRepository.save(doctor);
    }
}

export default UpdateDoctorService;
