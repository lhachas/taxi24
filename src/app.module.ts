import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DriverController } from './api/infrastructure/controllers/driver.controller';
import { DriverRepository } from './api/infrastructure/repositories/driver.repository';
import { DriverService } from './api/application/services/driver.service';
import { DatabaseModule } from './api/infrastructure/database/database.module';
import { PassengerController } from './api/infrastructure/controllers/passenger.controller';
import { PassengerRepository } from './api/infrastructure/repositories/passenger.repository';
import { PassengerService } from './api/application/services/passenger.service';
import { TripController } from './api/infrastructure/controllers/trip.controller';
import { TripRepository } from './api/infrastructure/repositories/trip.repository';
import { TripService } from './api/application/services/trip.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        DatabaseModule,
    ],
    controllers: [DriverController, PassengerController, TripController],
    providers: [
        {
            provide: 'DRIVER_REPOSITORY',
            useClass: DriverRepository,
        },
        {
            provide: 'DRIVER_CASE_USE',
            useClass: DriverService,
        },
        {
            provide: 'PASSENGER_REPOSITORY',
            useClass: PassengerRepository,
        },
        {
            provide: 'PASSENGER_CASE_USE',
            useClass: PassengerService,
        },
        {
            provide: 'TRIP_REPOSITORY',
            useClass: TripRepository,
        },
        {
            provide: 'TRIP_CASE_USE',
            useClass: TripService,
        },
    ],
})
export class AppModule {}
