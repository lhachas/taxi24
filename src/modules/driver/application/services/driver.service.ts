import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DriverRepository } from '../../domain/repositories/driver.repository';
import { IDriverRepository } from '../../domain/repositories/driver.interface';
import { DriverDto } from '../../infrastructure/dtos/driver.dto';
import { IDriverCaseUse } from '../use-cases/driver.use-case';
import { LocationDto } from '../../infrastructure/dtos/location.dto';
import { LocationUtil } from '../../../../common/utils/location.util';

@Injectable()
export class DriverService implements IDriverCaseUse {
    constructor(
        @Inject(DriverRepository)
        private readonly driverRepository: IDriverRepository,
        private readonly configService: ConfigService,
    ) {}

    public async findAll(): Promise<DriverDto[]> {
        try {
            const drivers = await this.driverRepository.findAll();
            return drivers;
        } catch (error) {
            throw error;
        }
    }

    public async findById(id: string): Promise<DriverDto> {
        if (!id) {
            throw new Error('You must provide driver ID to search.');
        }

        try {
            const driver = await this.driverRepository.findById(id);

            if (!driver) {
                throw new Error('Not found driver.');
            }

            return driver;
        } catch (error) {
            throw error;
        }
    }

    public async findAvailable(): Promise<DriverDto[]> {
        try {
            const drivers = await this.driverRepository.findAvailable();
            return drivers;
        } catch (error) {
            throw error;
        }
    }

    public async findAvailableNear(
        location: LocationDto,
    ): Promise<DriverDto[]> {
        try {
            const { latitude, longitude } = location;
            const drivers = await this.driverRepository.findAvailable();
            return drivers.filter((driver) => {
                const distance = LocationUtil.calculateDistance(
                    latitude,
                    longitude,
                    driver.location.latitude,
                    driver.location.longitude,
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

    public async create(payload: DriverDto): Promise<DriverDto> {
        try {
            const driver = await this.driverRepository.create(payload);
            return driver;
        } catch (error) {
            throw error;
        }
    }
}
