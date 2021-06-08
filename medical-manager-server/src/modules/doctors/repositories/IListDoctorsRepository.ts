import Doctor from '../infra/typeorm/entities/Doctor';

export default interface IDoctorsRepository {
    listByCep(cep: number): Promise<Doctor[] | undefined>;
    listByCity(city: string): Promise<Doctor[] | undefined>;
    listByState(state: string): Promise<Doctor[] | undefined>;
    listByStreet(street: string): Promise<Doctor[] | undefined>;
    listByMedicalSpecialty(
        medialSpecialty: string,
    ): Promise<Doctor[] | undefined>;
}
