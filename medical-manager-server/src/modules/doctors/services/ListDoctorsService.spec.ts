import CreateDoctorService from './CreateDoctorService';
import ListDoctorsService from './ListDoctorsService';
import FakeDoctorsRepository from '../repositories/fakes/FakeDoctorsRepository';
import FakeAddressProvider from '@shared/container/providers/AddressProvider/fakes/FakeAddressProvider';
import DoctorsRepository from '../infra/typeorm/repositories/DoctorsRepository';

describe('ListDoctors', () => {
    it('should be able to list all doctors', async () => {
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

        await createDoctorService.execute({
            name: 'Doutor 2',
            crm: 1234,
            cep: 123456,
            landline: '99999999',
            cellphone: '88888888',
            first_medical_specialty: 'Cardiologia',
            second_medical_specialty: 'Neurologia',
        });

        const listDoctorsService = new ListDoctorsService(
            fakeDoctorsRepository,
        );

        const listDoctors = await listDoctorsService.execute();

        expect(listDoctors[0].crm).toBe(123);
        expect(listDoctors[1].crm).toBe(1234);
    });
});
