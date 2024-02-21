import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LocationUtil } from '../../../common/utils/location.util';
import { IDriverRepository } from '../../domain/repositories/driver.repository';
import { Driver } from '../../domain/models/driver.model';
import { Location } from '../../../common/model/location.model';
import { DriverCaseUse } from '../case-uses/driver.caseuse';

@Injectable()
export class DriverService implements DriverCaseUse {
    constructor(
        @Inject('DRIVER_REPOSITORY')
        private readonly driverRepository: IDriverRepository,
        private readonly configService: ConfigService,
    ) {}

    public async findAll(): Promise<Driver[]> {
        try {
            const drivers = await this.driverRepository.findAll();
            return drivers;
        } catch (error) {
            throw error;
        }
    }

    public async findById(id: string): Promise<Driver> {
        if (!id) {
            throw new NotFoundException(
                'You must provide driver ID to search.',
            );
        }

        try {
            const driver = await this.driverRepository.findById(id);

            if (!driver) {
                throw new NotFoundException('Driver not found.');
            }

            return driver;
        } catch (error) {
            throw error;
        }
    }

    public async findAvailables(): Promise<Driver[]> {
        try {
            const drivers = await this.driverRepository.findAvailables();
            return drivers;
        } catch (error) {
            throw error;
        }
    }

    public async findNearby(location: Location): Promise<Driver[]> {
        try {
            const { latitude, longitude } = location;
            const drivers = await this.driverRepository.findAvailables();
            return drivers.filter((driver) => {
                const distance = LocationUtil.calculateDistance(
                    latitude,
                    longitude,
                    driver.latitude,
                    driver.longitude,
                );
                return (
                    distance <=
                    Number(
                        this.configService.get('DRIVER_RADIUS_DISTANCE') || 4,
                    )
                );
            });
        } catch (error) {
            throw error;
        }
    }

    public async findNearest(location: Location): Promise<Driver[]> {
        try {
            const drivers = await this.driverRepository.findNearest(location);
            return drivers;
        } catch (error) {
            throw error;
        }
    }

    public async create(payload: Driver): Promise<Driver> {
        try {
            const driver = await this.driverRepository.save(payload);
            return driver;
        } catch (error) {
            throw error;
        }
    }
}
