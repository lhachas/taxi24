import {
    IsBoolean,
    IsDate,
    IsDefined,
    IsEmail,
    IsNotEmpty,
    IsObject,
    IsOptional,
    IsPhoneNumber,
    IsString,
    IsUUID,
} from 'class-validator';
import { LocationDto } from './location.dto';

export class DriverDto {
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    @IsDefined()
    id: string;

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    fullName: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @IsDefined()
    email: string;

    @IsPhoneNumber()
    @IsNotEmpty()
    @IsDefined()
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    licensePlate: string;

    @IsNotEmpty()
    @IsObject()
    @IsDefined()
    location: LocationDto;

    @IsBoolean()
    @IsNotEmpty()
    @IsDefined()
    available: boolean;

    @IsDate()
    @IsOptional()
    createdAt?: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}
