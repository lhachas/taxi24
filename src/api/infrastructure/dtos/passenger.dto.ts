import {
    IsDate,
    IsDefined,
    IsEmail,
    IsNotEmpty,
    IsObject,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';
import { LocationDto } from '../../../common/dtos/location.dto';

export class PassengerDto {
    @IsUUID()
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    fullName: string;

    @IsEmail()
    @IsDefined()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    phoneNumber: string;

    @IsObject()
    @IsNotEmpty()
    @IsDefined()
    location: LocationDto;

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    updatedAt?: Date;
}
