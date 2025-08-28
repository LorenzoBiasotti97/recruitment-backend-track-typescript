import { InvoiceInsertDto } from "../../shared/dto/invoiceInsertDTO";

export const validInvoiceInsertDto: InvoiceInsertDto = {
  invoiceNumber: '1234567890',
  amount: 150.50,
  dueDate: new Date('2024-12-31'),
  title: 'Test Invoice',
  docDate: new Date('2024-11-01'),
  docType: 'Fattura Elettronica',
  isPaid: false,
  isCancelled: false,
  taxProfileId: '1' // Sarà sostituito nei test con ID valido
};

export const paidInvoiceInsertDto: InvoiceInsertDto = {
  ...validInvoiceInsertDto,
  invoiceNumber: '9876543210',
  title: 'Paid Invoice',
  isPaid: true
};