import { Driver } from './driver.model';
import { Passenger } from './passenger.model';

enum TripStatus {
    PENDING = 'pending',
    INPROGRESS = 'in_progress',
    COMPLETED = 'completed',
}

export class Trip {
    id: string;
    driver: Driver;
    passenger: Passenger;
    originLatitude: number;
    originLongitude: number;
    destinationLatitude: number;
    destinationLongitude: number;
    status: TripStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
