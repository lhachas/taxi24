import { Trip } from '../../domain/models/trip.model';

export abstract class TripCaseUse {
    public abstract create(trip: any): Promise<Trip>;
    public abstract complete(id: string): Promise<Trip>;
    public abstract findAllActive(): Promise<Trip[]>;
}
