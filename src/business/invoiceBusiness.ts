import { IInvoiceRepository } from "../repository/interfaces/iRepository";
import { InvoiceReadDto } from "../shared/dto/invoiceReadDTO";
import { IInvoiceBusiness } from "./interfaces/iInvoiceBusiness";
import { InvoiceUpdateDto } from "../shared/dto/invoiceUpdateDTO";
import { InvoiceInsertDto } from "../shared/dto/invoiceInsertDTO";
import { PaginationDto } from "../shared/dto/paginationDTO";
import { InvoiceReadFilterDto } from "../shared/dto/invoiceFilterDTO";

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
   * Retrieves all invoices from the repository and maps them to InvoiceReadDto.
   * @returns A promise that resolves to an array of InvoiceReadDto objects.
   * @deprecated Use findAllFilter with appropriate parameters instead.
   */
  async findAll(): Promise<InvoiceReadDto[]> {
    const invoices = await this.invoiceRepository.findAll();
    return invoices.map(invoice => InvoiceReadDto.fromModel(invoice));
  }

    /**
   * Retrieves all invoices from the repository and maps them to InvoiceReadDto.
   * @param filter Optional filter criteria for querying invoices.
   * @param page The page number for pagination.
   * @param pageSize The number of items per page for pagination.
   * @returns A promise that resolves to an array of InvoiceReadDto objects.
   **/
  async findAllFilter(filter?: Partial<InvoiceReadFilterDto>, page = 1, pageSize = 10): Promise<PaginationDto<InvoiceReadDto>> {
    const users = await this.invoiceRepository.findAllFilter(InvoiceReadFilterDto.toModel(filter), page, pageSize);
    return {
          data: users.data.map(user => InvoiceReadDto.fromModel(user)),
          pagination: {
            page: users.pagination.page,
            pageSize: users.pagination.pageSize,
            total: users.pagination.total,
            totalPages: users.pagination.totalPages
          } 
        } as PaginationDto<InvoiceReadDto>;
  }

  /**
   * Finds a single invoice by its ID and maps it to InvoiceReadDto.
   * @param id The ID of the invoice to find.
   * @returns A promise that resolves to an InvoiceReadDto object or null if not found.
   */
  async findById(id: bigint): Promise<InvoiceReadDto | null> {
    const invoice = await this.invoiceRepository.findById(id);
    return invoice ? InvoiceReadDto.fromModel(invoice) : null;
  }

  /**
   * Creates a new invoice from a DTO.
   * @param data The data for the new invoice, as a InvoiceCreateDto.
   * @returns A promise that resolves to the newly created InvoiceReadDto object.
   */
  async create(data: InvoiceInsertDto): Promise<InvoiceReadDto> {
    const createdInvoice = await this.invoiceRepository.create(InvoiceInsertDto.toModel(data));
    return InvoiceReadDto.fromModel(createdInvoice);
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
   * Updates an existing invoice.
   * @param data The partial data to update the invoice with, as a DTO.
   * @returns A promise that resolves to the updated InvoiceReadDto object.
   */
  async update(data: InvoiceUpdateDto): Promise<InvoiceReadDto> {
    const toupdate = InvoiceReadDto.toModel(data) ;
    const updatedInvoice = await this.invoiceRepository.update(toupdate);
    return InvoiceReadDto.fromModel(updatedInvoice);
  }
}
