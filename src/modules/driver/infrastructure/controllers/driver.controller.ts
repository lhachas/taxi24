import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Query,
} from '@nestjs/common';
import { DriverService } from '../../application/services/driver.service';
import { IDriverCaseUse } from '../../application/use-cases/driver.use-case';
import { DriverDto } from '../dtos/driver.dto';
import { LocationDto } from '../dtos/location.dto';

@Controller('drivers')
export class DriverController {
    constructor(
        @Inject(DriverService)
        private readonly driverService: IDriverCaseUse,
    ) {}

    @Get()
    public findAll(): Promise<DriverDto[]> {
        return this.driverService.findAll();
    }

    @Get('/available')
    public findAvailable(): Promise<DriverDto[]> {
        return this.driverService.findAvailable();
    }

    @Get(':id')
    public findById(@Param('id') id: string): Promise<DriverDto> {
        return this.driverService.findById(id);
    }

    @Get('/available/near')
    public findAvailableNear(
        @Query() location: LocationDto,
    ): Promise<DriverDto[]> {
        return this.driverService.findAvailableNear(location);
    }

    @Post()
    public save(@Body() driver: DriverDto): Promise<DriverDto> {
        return this.driverService.create(driver);
    }
}
