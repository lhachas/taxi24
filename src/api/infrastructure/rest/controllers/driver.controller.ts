import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DriverDto } from './dtos/driver.dto';
import { LocationDto } from './dtos/location.dto';
import { DriverCaseUse } from '../../../application/case-uses/driver.caseuse';
import { Driver } from '../../../domain/models/driver.model';

@ApiTags('Drivers')
@Controller('drivers')
export class DriverController {
    constructor(
        @Inject(DriverCaseUse)
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
