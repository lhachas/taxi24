import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Location } from './location';

@Entity({ name: 'drivers' })
export class Driver {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: false,
        name: 'full_name',
        type: 'varchar',
        length: 255,
    })
    fullName: string;

    @Column({
        nullable: false,
        unique: true,
        type: 'varchar',
        length: 255,
    })
    email: string;

    @Column({
        nullable: false,
        name: 'phone_number',
        type: 'varchar',
        length: 50,
    })
    phoneNumber: string;

    @Column({
        nullable: false,
        name: 'licence_plate',
        type: 'varchar',
        length: 50,
    })
    licensePlate: string;

    @Column({
        nullable: false,
        type: 'jsonb',
    })
    location: Location;

    @Column({
        nullable: false,
        default: true,
        type: 'boolean',
    })
    available: boolean;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt?: Date;
}
