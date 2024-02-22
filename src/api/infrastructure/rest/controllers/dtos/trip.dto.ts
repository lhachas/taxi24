import {
    IsDefined,
    IsEnum,
    IsLatitude,
    IsLongitude,
    IsNotEmpty,
    IsString,
    IsUUID,
} from 'class-validator';
import { TripStatus } from '../../../../../shared/enums/trip-status.enum';

export class TripDto {
    @IsUUID()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    driverId: string;

    @IsUUID()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    passengerId: string;

    @IsLatitude()
    @IsDefined()
    @IsNotEmpty()
    originLatitude: number;

    @IsLongitude()
    @IsDefined()
    @IsNotEmpty()
    originLongitude: number;

    @IsLatitude()
    @IsDefined()
    @IsNotEmpty()
    destinationLatitude: number;

    @IsLongitude()
    @IsDefined()
    @IsNotEmpty()
    destinationLongitude: number;

    @IsEnum(TripStatus)
    @IsDefined()
    @IsNotEmpty()
    status: TripStatus;
}
