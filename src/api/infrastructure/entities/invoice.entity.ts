import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Trip } from './trip.entity';
import { PaymentStatus } from '../../../common/enums/payment-status.enum';
import { PaymentMethod } from '../../../common/enums/payment-method.enum';

@Entity({ name: 'invoices' })
export class Invoice {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @OneToOne(() => Trip)
    @JoinColumn({
        name: 'trip_id',
    })
    trip: Trip;

    @Column({
        nullable: false,
        name: 'total_amount',
    })
    totalAmount: number;

    @Column({
        nullable: false,
        name: 'payment_method',
        type: 'enum',
        enum: PaymentMethod,
    })
    paymentMethod: PaymentMethod;

    @Column({
        nullable: false,
        name: 'payment_status',
        type: 'enum',
        enum: PaymentStatus,
    })
    paymentStatus: PaymentStatus;

    @Column({
        nullable: false,
        name: 'issued_at',
        type: 'date',
    })
    issued_at: Date;

    @CreateDateColumn({
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        name: 'updated_at',
    })
    updatedAt?: Date;
}
