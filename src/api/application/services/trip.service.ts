/* eslint-disable @typescript-eslint/no-unused-vars */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TripCaseUse } from '../case-uses/trip.caseuse';
import { Trip } from '../../domain/models/trip.model';
import { ITripRepository } from '../../domain/repositories/trip.repository';
import { TripStatus } from '../../../common/enums/trip-status.enum';
import { IDriverRepository } from '../../domain/repositories/driver.repository';
import { IPassengerRepository } from '../../domain/repositories/passenger.repository';

@Injectable()
export class TripService implements TripCaseUse {
    constructor(
        @Inject('TRIP_REPOSITORY')
        private readonly tripRepository: ITripRepository,
        @Inject('DRIVER_REPOSITORY')
        private readonly driverRepository: IDriverRepository,
        @Inject('PASSENGER_REPOSITORY')
        private readonly passengerRepository: IPassengerRepository,
    ) {}

    public async create(payload: any): Promise<Trip> {
        const { driverId, passengerId, ...location } = payload;
        const driver = await this.driverRepository.findById(driverId);
        const passenger = await this.passengerRepository.findById(passengerId);

        if (!driver) {
            throw new NotFoundException('Driver not found.');
        }

        if (!passenger) {
            throw new NotFoundException('Passenger not found.');
        }

        try {
            const trip = await this.tripRepository.save({
                driver,
                passenger,
                ...location,
            });

            return trip;
        } catch (error) {
            throw error;
        }
    }

    public async complete(id: string): Promise<Trip> {
        const trip = await this.tripRepository.findById(id);

        if (!trip) {
            throw new NotFoundException('Trip not found.');
        }

        if (trip.status === TripStatus.COMPLETED) {
            return trip;
        }

        trip.status = TripStatus.COMPLETED;

        try {
            const tripCompleted = await this.tripRepository.save(trip);
            return tripCompleted;
        } catch (error) {
            throw error;
        }
    }

    public async findAllActive(): Promise<Trip[]> {
        try {
            const trips = await this.tripRepository.findAllActive();
            return trips;
        } catch (error) {
            throw error;
        }
    }
}
