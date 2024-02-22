import {
    IsDefined,
    IsLatitude,
    IsLongitude,
    IsNotEmpty,
} from 'class-validator';

export class LocationDto {
    @IsLatitude()
    @IsDefined()
    @IsNotEmpty()
    latitude: number;

    @IsLongitude()
    @IsDefined()
    @IsNotEmpty()
    longitude: number;
}
