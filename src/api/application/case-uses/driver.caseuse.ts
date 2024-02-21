import { Location } from '../../../common/model/location.model';
import { Driver } from '../../domain/models/driver.model';

export abstract class DriverCaseUse {
    public abstract findAll(): Promise<Driver[]>;
    public abstract findById(id: string): Promise<Driver>;
    public abstract findAvailables(): Promise<Driver[]>;
    public abstract findNearby(location: Location): Promise<Driver[]>;
    public abstract findNearest(location: Location): Promise<Driver[]>;
    public abstract create(payload: Driver): Promise<Driver>;
}
