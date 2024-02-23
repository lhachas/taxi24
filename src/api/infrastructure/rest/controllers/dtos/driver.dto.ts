import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsDate,
    IsDefined,
    IsEmail,
    IsLatitude,
    IsLongitude,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUUID,
} from 'class-validator';

export class DriverDto {
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    id: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    fullName: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    email: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    licensePlate: string;

    @IsNotEmpty()
    @IsDefined()
    @IsLatitude()
    @ApiProperty()
    latitude: number;

    @IsNotEmpty()
    @IsDefined()
    @IsLongitude()
    @ApiProperty()
    longitude: number;

    @IsBoolean()
    @IsNotEmpty()
    @IsDefined()
    @ApiProperty()
    available: boolean;
}
