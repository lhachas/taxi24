import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Trip } from '../../../domain/models/trip.model';
import { TripCaseUse } from '../../../application/case-uses/trip.caseuse';
import { TripDto } from './dtos/trip.dto';

@ApiTags('Trips')
@Controller('trips')
export class TripController {
    constructor(
        @Inject(TripCaseUse)
        private readonly tripCaseUse: TripCaseUse,
    ) {}

    @Get('/actives')
    public findAllActive(): Promise<Trip[]> {
        return this.tripCaseUse.findAllActive();
    }

    @Put(':id')
    public complete(@Param('id') id: string): Promise<Trip> {
        return this.tripCaseUse.complete(id);
    }

    @Post()
    public create(@Body() trip: TripDto): Promise<Trip> {
        return this.tripCaseUse.create(
            trip.driverId,
            trip.passengerId,
            trip.originLatitude,
            trip.originLongitude,
            trip.destinationLatitude,
            trip.destinationLongitude,
            trip.status,
        );
    }
}
