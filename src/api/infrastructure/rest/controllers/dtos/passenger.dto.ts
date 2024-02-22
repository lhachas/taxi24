import {
    IsDate,
    IsDefined,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

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

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    updatedAt?: Date;
}
