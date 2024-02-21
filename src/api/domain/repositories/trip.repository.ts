import { Trip } from '../models/trip.model';

export interface ITripRepository {
    save(trip: Trip): Promise<Trip>;
    findById(id: string): Promise<Trip>;
    findAllActive(): Promise<Trip[]>;
}
