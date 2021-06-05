import cep from 'cep-promise';

import IAddressProvider from '../models/IAddressProvider';

class GetAddressProvider implements IAddressProvider {
    public async getAddress(cepDoctor: number): Promise<Address> {
        const address = await cep(cepDoctor);

        return address;
    }
}

export default GetAddressProvider;
