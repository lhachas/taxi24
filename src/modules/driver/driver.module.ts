import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverController } from './infrastructure/controllers/driver.controller';
import { DriverService } from './application/services/driver.service';
import { DriverRepository } from './domain/repositories/driver.repository';
import { Driver } from './domain/entities/driver.entity';
import { DatabaseModule } from '../../config/database/database.module';

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([Driver])],
    controllers: [DriverController],
    providers: [DriverService, DriverRepository],
})
export class DriverModule {}
