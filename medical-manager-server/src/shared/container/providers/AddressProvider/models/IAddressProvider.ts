import Address from '@modules/doctors/infra/typeorm/entities/Address';

export default interface IAddressProvider {
    getAddress(cepDoctor: number): Promise<Address>;
}
