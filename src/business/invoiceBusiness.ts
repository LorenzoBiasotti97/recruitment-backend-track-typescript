import { IInvoice } from "../repository/interfaces/iModel";
import { IInvoiceRepository } from "../repository/interfaces/iRepository";
import { InvoiceDto } from "../shared/dto/invoiceDTO";
import { IInvoiceBusiness } from "./interfaces/iInvoiceBusiness";

/**
 * Business logic for managing Invoices.
 * This class implements the IInvoiceBusiness interface, providing concrete
 * methods for CRUD operations.
 */
export class InvoiceBusiness implements IInvoiceBusiness {

  /**
   * Constructs an instance of InvoiceBusiness.
   * @param invoiceRepository The repository for accessing Invoice data.
   */
  constructor(private readonly invoiceRepository: IInvoiceRepository) {}

  /**
   * Retrieves all invoices from the repository and maps them to InvoiceDto.
   * @returns A promise that resolves to an array of InvoiceDto objects.
   */
  async findAll(): Promise<InvoiceDto[]> {
    const invoices = await this.invoiceRepository.findAll();
    return invoices.map(invoice => InvoiceDto.fromModel(invoice));
  }

  /**
   * Finds a single invoice by its ID and maps it to InvoiceDto.
   * @param id The ID of the invoice to find.
   * @returns A promise that resolves to an InvoiceDto object or null if not found.
   */
  async findById(id: bigint): Promise<InvoiceDto | null> {
    const invoice = await this.invoiceRepository.findById(id);
    return invoice ? InvoiceDto.fromModel(invoice) : null;
  }

  /**
   * Creates a new invoice from a DTO.
   * @param data The data for the new invoice, as a DTO.
   * @returns A promise that resolves to the newly created InvoiceDto object.
   */
  async create(data: Omit<IInvoice, 'id' | 'createdAt' | 'updatedAt' | 'associations' | 'taxProfile'>): Promise<InvoiceDto> {
    const createdInvoice = await this.invoiceRepository.create(data);
    return InvoiceDto.fromModel(createdInvoice);
  }

  /**
   * Deletes an invoice by its ID.
   * @param id The ID of the invoice to delete.
   * @returns A promise that resolves when the deletion is complete.
   */
  async delete(id: bigint): Promise<void> {
    return this.invoiceRepository.delete(id);
  }

  /**
   * Updates an existing invoice from a DTO.
   * @param id The ID of the invoice to update.
   * @param data The partial data to update the invoice with, as a DTO.
   * @returns A promise that resolves to the updated InvoiceDto object.
   */
  async update(id: bigint, data: Partial<Omit<IInvoice, 'associations' | 'taxProfile'>>): Promise<InvoiceDto> {
    const updatedInvoice = await this.invoiceRepository.update(id, data);
    return InvoiceDto.fromModel(updatedInvoice);
  }
}
