import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { PassengerEntity } from '../entities/passenger.entity';
import { PassengerRepository } from '../../../domain/repositories/passenger.repository';
import { Passenger } from '../../../domain/models/passenger.model';

@Injectable()
export class PassengerDBRepository implements PassengerRepository {
    constructor(
        @InjectRepository(PassengerEntity)
        private readonly passengerRepository: Repository<PassengerEntity>,
    ) {}

    public findAll(): Promise<Passenger[]> {
        return this.passengerRepository.find();
    }

    public findById(id: string): Promise<Passenger> {
        return this.passengerRepository.findOneBy({ id });
    }

    public save(passenger: Passenger): Promise<Passenger> {
        return this.passengerRepository.save(
            plainToClass(PassengerEntity, passenger),
        );
    }
}
