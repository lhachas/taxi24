import { Location } from '../../../common/model/location.model';
import { Driver } from '../models/driver.model';

export interface IDriverRepository {
    findAll(): Promise<Driver[]>;
    findById(id: string): Promise<Driver>;
    findAvailables(): Promise<Driver[]>;
    findNearest(location: Location): Promise<Driver[]>;
    save(driver: Driver): Promise<Driver>;
}
