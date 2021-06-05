import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IDoctorsRepository from '../repositories/IDoctorsRepository';
import IAddressProvider from '@shared/container/providers/AddressProvider/models/IAddressProvider';
import GetAddressProvider from '@shared/container/providers/AddressProvider/implementations/GetAddressProvider';

interface Request {
    name: string;
    crm: number;
    landline: string;
    cellphone: string;
    cep: number;
    first_medical_specialty: string;
    second_medical_specialty: string;
}

@injectable()
class CreateDoctorService {
    constructor(
        @inject('DoctorsRepository')
        private doctorsRepository: IDoctorsRepository,

        @inject('AddressProvider')
        private addressProvider: IAddressProvider,
    ) {}

    public async execute({
        name,
        crm,
        landline,
        cellphone,
        cep,
        first_medical_specialty,
        second_medical_specialty,
    }: Request): Promise<Doctor> {
        const checkDoctorExists = await this.doctorsRepository.findByCrm(crm);

        const address = await this.addressProvider.getAddress(cep);

        if (checkDoctorExists) {
            throw new AppError('CRM já cadastrado.');
        }

        const doctor = await this.doctorsRepository.create({
            name,
            crm,
            landline,
            cellphone,
            cep,
            city: address.city,
            state: address.state,
            street: address.street,
            first_medical_specialty,
            second_medical_specialty,
        });

        return doctor;
    }
}

export default CreateDoctorService;
