import { ApiProperty } from '@nestjs/swagger';
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
    @ApiProperty()
    id: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @ApiProperty()
    fullName: string;

    @IsEmail()
    @IsDefined()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @ApiProperty()
    phoneNumber: string;

    @IsOptional()
    @IsDate()
    @ApiProperty()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    @ApiProperty()
    updatedAt?: Date;
}
