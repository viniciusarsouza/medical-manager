import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListDoctorsByCepService from '@modules/doctors/services/ListDoctorsByCepService';
import ListDoctorsByStreetService from '@modules/doctors/services/ListDoctorsByStreetService';
import ListDoctorsByCityService from '@modules/doctors/services/ListDoctorsByCityService';
import ListDoctorsByStateService from '@modules/doctors/services/ListDoctorsByStateService';
import ListDoctorsByMedicalSpecialtyService from '@modules/doctors/services/ListDoctorsByMedicalSpecialtyService';

class ListDoctorsController {
    public async indexByCep(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { cep } = request.params;

        const listDoctors = container.resolve(ListDoctorsByCepService);

        const doctors = await listDoctors.execute(parseInt(cep));

        return response.json(doctors);
    }

    public async indexByStreet(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { street } = request.params;

        const listDoctors = container.resolve(ListDoctorsByStreetService);

        const doctors = await listDoctors.execute(street);

        return response.json(doctors);
    }

    public async indexByState(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { state } = request.params;

        const listDoctors = container.resolve(ListDoctorsByStateService);

        const doctors = await listDoctors.execute(state);

        return response.json(doctors);
    }

    public async indexByCity(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { city } = request.params;

        const listDoctors = container.resolve(ListDoctorsByCityService);

        const doctors = await listDoctors.execute(city);

        return response.json(doctors);
    }

    public async indexByMedicalSpecialty(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { medicalSpecialty } = request.params;

        const listDoctors = container.resolve(
            ListDoctorsByMedicalSpecialtyService,
        );

        const doctors = await listDoctors.execute(medicalSpecialty);

        return response.json(doctors);
    }
}

export default ListDoctorsController;
