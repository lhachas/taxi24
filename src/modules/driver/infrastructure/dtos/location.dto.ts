import {
    IsDefined,
    IsLatitude,
    IsLongitude,
    IsNotEmpty,
} from 'class-validator';

export class LocationDto {
    @IsLatitude()
    @IsNotEmpty()
    @IsDefined()
    latitude: number;

    @IsLongitude()
    @IsNotEmpty()
    @IsDefined()
    longitude: number;
}
