import { Driver } from './driver.model';
import { Passenger } from './passenger.model';
import { Invoice } from './invoice.model';

enum TripStatus {
    INPROGRESS = 'in_progress',
    COMPLETED = 'completed',
}

export class Trip {
    id?: string;
    driver: Driver;
    passenger: Passenger;
    originLatitude: number;
    originLongitude: number;
    destinationLatitude: number;
    destinationLongitude: number;
    status: TripStatus;
    createdAt?: Date;
    updatedAt?: Date;
    invoice?: Invoice;
}
