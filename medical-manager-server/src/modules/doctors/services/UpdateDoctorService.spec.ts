import CreateDoctorService from './CreateDoctorService';
import UpdateDoctorService from './UpdateDoctorService';
import FakeDoctorsRepository from '../repositories/fakes/FakeDoctorsRepository';
import FakeAddressProvider from '@shared/container/providers/AddressProvider/fakes/FakeAddressProvider';
import AppError from '@shared/errors/AppError';

describe('UpdateDoctor', () => {
    it('should be able to doctor change doctors attribute', async () => {
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

        const doctor2 = await createDoctorService.execute({
            name: 'Doutor 2',
            crm: 1234,
            cep: 3333,
            landline: '99999999',
            cellphone: '88888888',
            first_medical_specialty: 'Cardiologia',
            second_medical_specialty: 'Neurologia',
        });

        const updateDoctorService = new UpdateDoctorService(
            fakeDoctorsRepository,
            fakeAddressProvider,
        );

        const updateDoctor = await updateDoctorService.execute({
            id: doctor2.id,
            name: 'Doutor 2',
            crm: 5555,
            cep: 3333,
            landline: '99999999',
            cellphone: '88888888',
            first_medical_specialty: 'Cardiologia',
            second_medical_specialty: 'Neurologia',
        });

        expect(updateDoctor.crm).toBe(5555);
    });

    it('should not be able to return error if doctor doesnt exist', async () => {
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

        const doctor2 = await createDoctorService.execute({
            name: 'Doutor 2',
            crm: 1234,
            cep: 3333,
            landline: '99999999',
            cellphone: '88888888',
            first_medical_specialty: 'Cardiologia',
            second_medical_specialty: 'Neurologia',
        });

        const updateDoctorService = new UpdateDoctorService(
            fakeDoctorsRepository,
            fakeAddressProvider,
        );

        expect(
            updateDoctorService.execute({
                id: 'wrongID',
                name: 'Doutor 2',
                crm: 5555,
                cep: 3333,
                landline: '99999999',
                cellphone: '88888888',
                first_medical_specialty: 'Cardiologia',
                second_medical_specialty: 'Neurologia',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to return error if try to update another doctor with same crm', async () => {
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

        const doctor2 = await createDoctorService.execute({
            name: 'Doutor 2',
            crm: 1234,
            cep: 3333,
            landline: '99999999',
            cellphone: '88888888',
            first_medical_specialty: 'Cardiologia',
            second_medical_specialty: 'Neurologia',
        });

        const updateDoctorService = new UpdateDoctorService(
            fakeDoctorsRepository,
            fakeAddressProvider,
        );

        expect(
            updateDoctorService.execute({
                id: doctor2.id,
                name: 'Doutor 2',
                crm: 123,
                cep: 3333,
                landline: '99999999',
                cellphone: '88888888',
                first_medical_specialty: 'Cardiologia',
                second_medical_specialty: 'Neurologia',
            }),
        ).rejects.toBeInstanceOf(AppError);
    });
});
