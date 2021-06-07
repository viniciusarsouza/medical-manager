import cep from 'cep-promise';

import Address from '@modules/doctors/infra/typeorm/entities/Address';
import IAddressProvider from '../models/IAddressProvider';

class FakeAddressProvider implements IAddressProvider {
    private address: Address = {
        city: 'cidade',
        state: 'GO',
        street: 'rua',
    };

    public async getAddress(cepDoctor: number): Promise<Address> {
        return this.address;
    }
}

export default FakeAddressProvider;
