import { Passenger } from '../../domain/models/passenger.model';

export abstract class PassengerCaseUse {
    public abstract findAll(): Promise<Passenger[]>;
    public abstract findById(id: string): Promise<Passenger>;
    public abstract create(passenger: Passenger): Promise<Passenger>;
}
