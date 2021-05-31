import Doctor from '../models/Doctor';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Doctor)
class DoctorsRepository extends Repository<Doctor> {}

export default DoctorsRepository;
