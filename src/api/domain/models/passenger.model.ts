import { Trip } from './trip.model';

export abstract class Passenger {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
    trips?: Trip[];
}
