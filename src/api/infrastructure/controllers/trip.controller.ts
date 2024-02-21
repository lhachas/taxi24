import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { Trip } from '../../domain/models/trip.model';
import { TripCaseUse } from '../../application/case-uses/trip.caseuse';
import { TripDto } from '../dtos/trip.dto';

@Controller('trips')
export class TripController {
    constructor(
        @Inject('TRIP_CASE_USE')
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
        return this.tripCaseUse.create(trip);
    }
}
