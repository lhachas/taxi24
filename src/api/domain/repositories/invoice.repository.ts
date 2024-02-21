import { Invoice } from '../models/invoice.model';

export interface IInvoiceRepository {
    findByTrip(tripId: string): Promise<Invoice>;
}
