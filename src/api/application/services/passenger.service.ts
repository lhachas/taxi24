import {
    ConflictException,
    Inject,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { PassengerRepository } from '../../domain/repositories/passenger.repository';
import { Passenger } from '../../domain/models/passenger.model';
import { PassengerCaseUse } from '../case-uses/passenger.caseuse';

@Injectable()
export class PassengerService implements PassengerCaseUse {
    constructor(
        @Inject(PassengerRepository)
        private readonly passengerRepository: PassengerRepository,
    ) {}

    public async findAll(): Promise<Passenger[]> {
        try {
            const passengers = await this.passengerRepository.findAll();
            return passengers;
        } catch (error) {
            throw error;
        }
    }

    public async findById(id: string): Promise<Passenger> {
        if (!id) {
            throw new NotFoundException(
                'You must provide a passenger ID to obtain the data.',
            );
        }

        try {
            const passenger = await this.passengerRepository.findById(id);

            if (!passenger) {
                throw new NotFoundException('Passenger not found.');
            }

            return passenger;
        } catch (error) {
            throw error;
        }
    }

    public async create(payload: Passenger): Promise<Passenger> {
        try {
            const existsPassenger = await this.passengerRepository.findByEmail(
                payload.email,
            );

            if (existsPassenger) {
                throw new ConflictException('Email is already in use.');
            }

            const passenger = await this.passengerRepository.save(payload);
            return passenger;
        } catch (error) {
            throw error;
        }
    }
}
