import { container } from 'tsyringe';

import './providers';
import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository';
import DoctorsRepository from '@modules/doctors/infra/typeorm/repositories/DoctorsRepository';
import IListDoctorsRepository from '@modules/doctors/repositories/IListDoctorsRepository';
import ListDoctorsRepository from '@modules/doctors/infra/typeorm/repositories/ListDoctorsRepository';

container.registerSingleton<IListDoctorsRepository>(
    'ListDoctorsRepository',
    ListDoctorsRepository,
);

container.registerSingleton<IDoctorsRepository>(
    'DoctorsRepository',
    DoctorsRepository,
);
