import { DriverDto } from '../../infrastructure/dtos/driver.dto';
import { LocationDto } from '../../infrastructure/dtos/location.dto';

export interface IDriverCaseUse {
    findAll(): Promise<DriverDto[]>;
    findById(id: string): Promise<DriverDto>;
    findAvailable(): Promise<DriverDto[]>;
    findAvailableNear(location: LocationDto): Promise<DriverDto[]>;
    create(payload: DriverDto): Promise<DriverDto>;
}
