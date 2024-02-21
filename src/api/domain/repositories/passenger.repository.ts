import { Passenger } from '../models/passenger.model';

export interface IPassengerRepository {
    findAll(): Promise<Passenger[]>;
    findById(id: string): Promise<Passenger>;
    save(passenger: Passenger): Promise<Passenger>;
}
