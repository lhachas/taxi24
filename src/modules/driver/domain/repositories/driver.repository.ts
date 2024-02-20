import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Driver } from '../entities/driver.entity';
import { IDriverRepository } from './driver.interface';

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

    public findAvailable(): Promise<Driver[]> {
        return this.driverRepository.findBy({ available: true });
    }

    public create(driver: Driver): Promise<Driver> {
        return this.driverRepository.save(plainToClass(Driver, driver));
    }
}
