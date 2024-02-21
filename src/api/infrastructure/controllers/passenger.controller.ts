import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { PassengerCaseUse } from '../../application/case-uses/passenger.caseuse';
import { Passenger } from '../../domain/models/passenger.model';
import { PassengerDto } from '../dtos/passenger.dto';

@Controller('passengers')
export class PassengerController {
    constructor(
        @Inject('PASSENGER_CASE_USE')
        private readonly passengerCaseUse: PassengerCaseUse,
    ) {}

    @Get()
    public findAll(): Promise<Passenger[]> {
        return this.passengerCaseUse.findAll();
    }

    @Get(':id')
    public findById(@Param('id') id: string): Promise<Passenger> {
        return this.passengerCaseUse.findById(id);
    }

    @Post()
    public create(@Body() passenger: PassengerDto): Promise<Passenger> {
        return this.passengerCaseUse.create(passenger);
    }
}
