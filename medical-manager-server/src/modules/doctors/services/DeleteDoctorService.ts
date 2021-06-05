import { injectable, inject } from 'tsyringe';

import IDoctorsRepository from '../repositories/IDoctorsRepository';

@injectable()
class DeleteDoctor {
    constructor(
        @inject('DoctorsRepository')
        private doctorsRepository: IDoctorsRepository,
    ) {}

    public async execute(id: string): Promise<void> {
        await this.doctorsRepository.delete(id);
    }
}

export default DeleteDoctor;
