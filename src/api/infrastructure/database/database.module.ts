import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../../../config/db.config';
import { Driver } from '../entities/driver.entity';
import { Passenger } from '../entities/passenger.entity';
import { Trip } from '../entities/trip.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot(dbConfig),
        TypeOrmModule.forFeature([Driver, Passenger, Trip]),
    ],
    exports: [TypeOrmModule.forFeature([Driver, Passenger, Trip])],
})
export class DatabaseModule {}
