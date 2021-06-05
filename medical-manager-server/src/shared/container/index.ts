import { container } from 'tsyringe';

import './providers';
import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository';
import DoctorsRepository from '@modules/doctors/infra/typeorm/repositories/DoctorsRepository';

container.registerSingleton<IDoctorsRepository>(
    'DoctorsRepository',
    DoctorsRepository,
);
