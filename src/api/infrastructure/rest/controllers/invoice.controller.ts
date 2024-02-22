import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Inject,
    Param,
    Post,
} from '@nestjs/common';
import {
    ApiBody,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { InvoiceCaseUse } from '../../../application/case-uses/invoice.caseuse';
import { Invoice } from '../../../domain/models/invoice.model';
import { InvoiceDto } from './dtos/invoice';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoiceController {
    constructor(
        @Inject(InvoiceCaseUse)
        private readonly invoiceCaseUse: InvoiceCaseUse,
    ) {}

    @Get()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Gets the complete list of invoices.',
    })
    public findAll(): Promise<Invoice[]> {
        return this.invoiceCaseUse.findAll();
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        type: String,
    })
    @ApiOkResponse({
        description: 'Responds to the invoice object',
        type: Invoice,
    })
    public findById(@Param('id') id: string): Promise<Invoice> {
        return this.invoiceCaseUse.findById(id);
    }

    @Get('/trip/:tripId')
    @ApiParam({
        name: 'tripId',
        type: String,
    })
    public findByTrip(@Param('tripId') tripId: string): Promise<Invoice> {
        return this.invoiceCaseUse.findByTrip(tripId);
    }

    @Post()
    @ApiBody({
        type: InvoiceDto,
    })
    @ApiCreatedResponse({
        description: 'The invoice has been successfully created.',
        type: Invoice,
    })
    public create(@Body() invoice: InvoiceDto): Promise<Invoice> {
        return this.invoiceCaseUse.create(
            invoice.tripId,
            invoice.totalAmount,
            invoice.paymentMethod,
        );
    }
}
