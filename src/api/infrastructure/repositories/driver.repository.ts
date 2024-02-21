import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Driver } from '../entities/driver.entity';
import { IDriverRepository } from '../../domain/repositories/driver.repository';
import { Location } from '../../../common/model/location.model';

@Injectable()
export class DriverRepository implements IDriverRepository {
    constructor(
        @InjectRepository(Driver)
        private readonly driverRepository: Repository<Driver>,
    ) {}

    public findAll(): Promise<Driver[]> {
        return this.driverRepository.find();
    }

    public findById(id: string): Promise<Driver> {
        return this.driverRepository.findOneBy({ id });
    }

    public findAvailables(): Promise<Driver[]> {
        return this.driverRepository.findBy({ available: true });
    }

    public findNearest(location: Location): Promise<Driver[]> {
        return this.driverRepository
            .createQueryBuilder()
            .addSelect(
                `SQRT(POWER(latitude - :latitude, 2) + POWER(longitude - :longitude, 2))`,
                'distance',
            )
            .setParameters({
                latitude: location.latitude,
                longitude: location.longitude,
            })
            .orderBy('distance', 'ASC')
            .limit(3)
            .getMany();
    }

    public save(driver: Driver): Promise<Driver> {
        return this.driverRepository.save(plainToClass(Driver, driver));
    }
}
