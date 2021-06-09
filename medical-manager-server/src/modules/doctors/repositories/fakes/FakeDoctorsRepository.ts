import ICreateDoctorDTO from '@modules/doctors/dtos/ICreateDoctorDTO';
import Doctor from '@modules/doctors/infra/typeorm/entities/Doctor';
import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository';
import Address from '@modules/doctors/infra/typeorm/entities/Address';

class FakeDoctorsRepository implements IDoctorsRepository {
    private doctors: Doctor[] = [];

    public async save(doctor: Doctor): Promise<Doctor> {
        const findDoctor = this.doctors.find((doc) => doc.id === doctor.id);
        if (findDoctor) {
            findDoctor.name = doctor.name;
            findDoctor.crm = doctor.crm;
            findDoctor.cep = doctor.cep;
            findDoctor.landline = doctor.landline;
            findDoctor.cellphone = doctor.cellphone;
            findDoctor.first_medical_specialty = doctor.first_medical_specialty;
            findDoctor.second_medical_specialty =
                doctor.second_medical_specialty;
            findDoctor.city = 'city';
            findDoctor.state = 'state';
            findDoctor.street = 'street';
        }
        return doctor;
    }

    public async create({
        name,
        crm,
        landline,
        cellphone,
        cep,
        city,
        state,
        street,
        first_medical_specialty,
        second_medical_specialty,
    }: ICreateDoctorDTO): Promise<Doctor> {
        const doctor = new Doctor();

        doctor.name = name;
        doctor.crm = crm;
        doctor.cep = cep;
        doctor.landline = landline;
        doctor.cellphone = cellphone;
        doctor.first_medical_specialty = first_medical_specialty;
        doctor.second_medical_specialty = second_medical_specialty;
        doctor.city = 'city';
        doctor.state = 'state';
        doctor.street = 'street';

        this.doctors.push(doctor);

        return doctor;
    }

    public async findByCrm(crm: number): Promise<Doctor | undefined> {
        const findDoctor = this.doctors.find((doctor) => doctor.crm === crm);
        return findDoctor;
    }

    public async findById(id: string): Promise<Doctor | undefined> {
        const findDoctor = this.doctors.find((doctor) => doctor.id === id);
        return findDoctor;
    }

    public async delete(id: string): Promise<void> {}

    public async list(): Promise<Doctor[]> {
        return this.doctors;
    }
}

export default FakeDoctorsRepository;
