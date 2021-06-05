import { container } from 'tsyringe';

import IAddressProvider from './AddressProvider/models/IAddressProvider';
import GetAddressProvider from './AddressProvider/implementations/GetAddressProvider';

container.register<IAddressProvider>('AddressProvider', GetAddressProvider);
