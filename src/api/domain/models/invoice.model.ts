import { PaymentMethod } from '../../../common/enums/payment-method.enum';
import { PaymentStatus } from '../../../common/enums/payment-status.enum';
import { Trip } from './trip.model';

export class Invoice {
    id: string;
    trip: Trip;
    totalAmount: number;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    issued_at: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
