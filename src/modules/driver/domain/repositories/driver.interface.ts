import { Driver } from '../entities/driver.entity';

export interface IDriverRepository {
    findAll(): Promise<Driver[]>;
    findById(id: string): Promise<Driver>;
    findAvailable(): Promise<Driver[]>;
    create(payload: Driver): Promise<Driver>;
}
