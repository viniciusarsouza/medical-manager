import AppError from '@shared/errors/AppError';
import CreateDoctorService from './CreateDoctorService';
import FakeDoctorsRepository from '../repositories/fakes/FakeDoctorsRepository';
import FakeAddressProvider from '@shared/container/providers/AddressProvider/fakes/FakeAddressProvider';

describe('CreateDoctor', () => {
    it('should be able to create a new doctor', async () => {
        const fakeAddressProvider = new FakeAddressProvider();
        const fakeDoctorsRepository = new FakeDoctorsRepository();
        const createDoctorService = new CreateDoctorService(
            fakeDoctorsRepository,
            fakeAddressProvider,
        );

        const doctor = await createDoctorService.execute({
            name: 'Doutor 1',
            crm: 123,
            cep: 123456,
            landline: '99999999',
            cellphone: '88888888',
            first_medical_specialty: 'Cardiologia',
            second_medical_specialty: 'Neurologia',
        });

        expect(doctor).toHaveProperty('id');
        expect(doctor).toHaveProperty('city');
        expect(doctor).toHaveProperty('state');
    });

    it('should not be able to create two doctors with same CRM', async () => {
        const fakeAddressProvider = new FakeAddressProvider();
        const fakeDoctorsRepository = new FakeDoctorsRepository();
        const createDoctorService = new CreateDoctorService(
            fakeDoctorsRepository,
            fakeAddressProvider,
        );

        await createDoctorService.execute({
            name: 'Doutor 1',
            crm: 123,
            cep: 123456,
            landline: '99999999',
            cellphone: '88888888',
            first_medical_specialty: 'Cardiologia',
            second_medical_specialty: 'Neurologia',
        });

        expect(
            createDoctorService.execute({
                name: 'Doutor 1',
                crm: 123,
                cep: 123456,
                landline: '99999999',
                cellphone: '88888888',
                first_medical_specialty: 'Cardiologia',
                second_medical_specialty: 'Neurologia',
            }),
        ).rejects.toBeInstanceOf(Error);
    });
});
