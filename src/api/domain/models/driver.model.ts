import { Trip } from './trip.model';

export abstract class Driver {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    licensePlate: string;
    latitude: number;
    longitude: number;
    available: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    trips?: Trip[];
}
