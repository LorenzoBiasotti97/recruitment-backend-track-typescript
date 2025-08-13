import { InvoiceDto } from "../../shared/dto/invoiceDTO";

/**
 * Business interface for the Invoice entity.
 * Defines the methods for CRUD operations on the Invoice model,
 * using DTO
 */
export interface IInvoiceBusiness {
  findAll(): Promise<InvoiceDto[]>;
  findById(id: bigint): Promise<InvoiceDto | null>;
  create(data: Omit<InvoiceDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<InvoiceDto>;
  update(id: bigint, data: Partial<Omit<InvoiceDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<InvoiceDto>;
}