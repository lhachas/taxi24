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
    @IsDefined()
    @IsLatitude()
    latitude: number;

    @IsNotEmpty()
    @IsDefined()
    @IsLongitude()
    longitude: number;

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
