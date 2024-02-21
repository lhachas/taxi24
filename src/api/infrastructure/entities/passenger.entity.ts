import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { Trip } from './trip.entity';

@Entity({ name: 'passengers' })
export class Passenger {
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

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt?: Date;

    @OneToMany(() => Trip, (trip) => trip.passenger)
    trips: Trip[];
}
