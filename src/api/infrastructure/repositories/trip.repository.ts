import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { ITripRepository } from '../../domain/repositories/trip.repository';
import { Trip } from '../entities/trip.entity';
import { TripStatus } from '../../../common/enums/trip-status.enum';

export class TripRepository implements ITripRepository {
    constructor(
        @InjectRepository(Trip)
        private readonly tripRepository: Repository<Trip>,
    ) {}

    save(trip: Trip): Promise<Trip> {
        return this.tripRepository.save(plainToClass(Trip, trip));
    }

    findById(id: string): Promise<Trip> {
        return this.tripRepository.findOne({
            relations: ['driver', 'passenger'],
            where: { id },
        });
    }

    findAllActive(): Promise<Trip[]> {
        return this.tripRepository.find({
            where: {
                status: TripStatus.INPROGRESS,
            },
        });
    }
}
