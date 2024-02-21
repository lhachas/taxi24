import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Driver } from './driver.entity';
import { Passenger } from './passenger.entity';
import { TripStatus } from '../../../common/enums/trip-status.enum';

@Entity({ name: 'trips' })
export class Trip {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Driver, (driver) => driver.trips)
    @JoinColumn({
        name: 'driver_id',
    })
    driver: Driver;

    @ManyToOne(() => Passenger, (passenger) => passenger.trips)
    @JoinColumn({
        name: 'passenger_id',
    })
    passenger: Passenger;

    @Column({
        nullable: false,
        name: 'origin_latitude',
        type: 'numeric',
        precision: 19,
        scale: 15,
    })
    originLatitude: number;

    @Column({
        nullable: false,
        name: 'origin_longitude',
        type: 'numeric',
        precision: 19,
        scale: 15,
    })
    originLongitude: number;

    @Column({
        nullable: false,
        name: 'destination_latitude',
        type: 'numeric',
        precision: 19,
        scale: 15,
    })
    destinationLatitude: number;

    @Column({
        nullable: false,
        name: 'destination_longitude',
        type: 'numeric',
        precision: 19,
        scale: 15,
    })
    destinationLongitude: number;

    @Column({
        nullable: false,
        type: 'enum',
        enum: TripStatus,
        default: TripStatus.INPROGRESS,
    })
    status: TripStatus;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt?: Date;
}
