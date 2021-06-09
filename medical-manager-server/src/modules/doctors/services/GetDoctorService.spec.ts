import AppError from '@shared/errors/AppError';
import CreateDoctorService from './CreateDoctorService';
import GetDoctorService from './GetDoctorService';
import FakeDoctorsRepository from '../repositories/fakes/FakeDoctorsRepository';
import FakeAddressProvider from '@shared/container/providers/AddressProvider/fakes/FakeAddressProvider';

describe('GetDoctor', () => {
    it('should be able to get a doctor by his ID', async () => {
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

        const getDoctorService = new GetDoctorService(fakeDoctorsRepository);

        const getDoctor = await getDoctorService.execute(doctor.id);

        expect(getDoctor.id).toBe(doctor.id);
    });

    it('should be able to return a error when dont find a doctor', async () => {
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

        const getDoctorService = new GetDoctorService(fakeDoctorsRepository);

        expect(getDoctorService.execute('123')).rejects.toBeInstanceOf(
            AppError,
        );
    });
});
