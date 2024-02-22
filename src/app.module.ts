import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './api/infrastructure/database/database.module';
import { DriverController } from './api/infrastructure/rest/controllers/driver.controller';
import { PassengerController } from './api/infrastructure/rest/controllers/passenger.controller';
import { TripController } from './api/infrastructure/rest/controllers/trip.controller';
import { InvoiceController } from './api/infrastructure/rest/controllers/invoice.controller';
import { DriverService } from './api/application/services/driver.service';
import { PassengerService } from './api/application/services/passenger.service';
import { TripService } from './api/application/services/trip.service';
import { DriverCaseUse } from './api/application/case-uses/driver.caseuse';
import { PassengerCaseUse } from './api/application/case-uses/passenger.caseuse';
import { TripCaseUse } from './api/application/case-uses/trip.caseuse';
import { InvoiceCaseUse } from './api/application/case-uses/invoice.caseuse';
import { InvoiceService } from './api/application/services/invoice.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        DatabaseModule,
    ],
    controllers: [
        DriverController,
        PassengerController,
        TripController,
        InvoiceController,
    ],
    providers: [
        {
            provide: DriverCaseUse,
            useClass: DriverService,
        },
        {
            provide: PassengerCaseUse,
            useClass: PassengerService,
        },
        {
            provide: TripCaseUse,
            useClass: TripService,
        },
        {
            provide: InvoiceCaseUse,
            useClass: InvoiceService,
        },
    ],
})
export class AppModule {}
