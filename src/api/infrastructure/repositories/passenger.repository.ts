import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { IPassengerRepository } from '../../domain/repositories/passenger.repository';
import { Passenger } from '../entities/passenger.entity';

@Injectable()
export class PassengerRepository implements IPassengerRepository {
    constructor(
        @InjectRepository(Passenger)
        private readonly passengerRepository: Repository<Passenger>,
    ) {}

    public findAll(): Promise<Passenger[]> {
        return this.passengerRepository.find();
    }

    public findById(id: string): Promise<Passenger> {
        return this.passengerRepository.findOneBy({ id });
    }

    public save(passenger: Passenger): Promise<Passenger> {
        return this.passengerRepository.save(
            plainToClass(Passenger, passenger),
        );
    }
}
