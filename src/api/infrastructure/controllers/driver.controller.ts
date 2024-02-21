import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Query,
} from '@nestjs/common';
import { DriverDto } from '../dtos/driver.dto';
import { LocationDto } from '../../../common/dtos/location.dto';
import { DriverCaseUse } from '../../application/case-uses/driver.caseuse';
import { Driver } from '../../domain/models/driver.model';

@Controller('drivers')
export class DriverController {
    constructor(
        @Inject('DRIVER_CASE_USE')
        private readonly driverCaseUse: DriverCaseUse,
    ) {}

    @Get()
    public findAll(): Promise<Driver[]> {
        return this.driverCaseUse.findAll();
    }

    @Get('/availables')
    public findAvailables(): Promise<Driver[]> {
        return this.driverCaseUse.findAvailables();
    }

    @Get('/nearby')
    public findNearby(@Query() location: LocationDto): Promise<Driver[]> {
        return this.driverCaseUse.findNearby(location);
    }

    @Get('/nearest')
    public findNearest(@Query() location: LocationDto): Promise<Driver[]> {
        return this.driverCaseUse.findNearest(location);
    }

    @Get(':id')
    public findById(@Param('id') id: string): Promise<Driver> {
        return this.driverCaseUse.findById(id);
    }

    @Post()
    public save(@Body() driver: DriverDto): Promise<Driver> {
        return this.driverCaseUse.create(driver);
    }
}
