export default interface ICreateDoctorDTO {
    name: string;
    crm: number;
    landline: string;
    cellphone: string;
    cep: number;
    city?: string;
    state?: string;
    street?: string;
    first_medical_specialty: string;
    second_medical_specialty: string;
}
