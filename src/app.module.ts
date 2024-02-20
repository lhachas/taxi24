import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DriverModule } from './modules/driver/driver.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        DriverModule,
    ],
})
export class AppModule {}
