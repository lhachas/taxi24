import { Inject, Injectable } from '@nestjs/common';
import { IPassengerRepository } from '../../domain/repositories/passenger.repository';
import { Passenger } from '../../domain/models/passenger.model';
import { PassengerCaseUse } from '../case-uses/passenger.caseuse';

@Injectable()
export class PassengerService implements PassengerCaseUse {
    constructor(
        @Inject('PASSENGER_REPOSITORY')
        private readonly passengerRepository: IPassengerRepository,
    ) {}

    public async findAll(): Promise<Passenger[]> {
        return this.passengerRepository.findAll();
    }

    public async findById(id: string): Promise<Passenger> {
        return this.passengerRepository.findById(id);
    }

    public async create(payload: Passenger): Promise<Passenger> {
        try {
            const passenger = await this.passengerRepository.save(payload);
            return passenger;
        } catch (error) {
            throw error;
        }
    }
}
