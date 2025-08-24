import { InvoiceReadFilterDto } from "../../shared/dto/invoiceFilterDTO";
import { InvoiceInsertDto } from "../../shared/dto/invoiceInsertDTO";
import { InvoiceReadDto } from "../../shared/dto/invoiceReadDTO";
import { InvoiceUpdateDto } from "../../shared/dto/invoiceUpdateDTO";
import { PaginationDto } from "../../shared/dto/paginationDTO";


/**
 * Business interface for the Invoice entity.
 * Defines the methods for CRUD operations on the Invoice model,
 * using DTO
 */
export interface IInvoiceBusiness {
  /*return all InvoiceReadDto as array*/
  /**
 * @deprecated Use findAllFilter instead
 */
  findAll(): Promise<InvoiceReadDto[]>;
  /*return paginated InvoiceReadDto array with filter*/
  findById(id: bigint): Promise<InvoiceReadDto | null>;
  /*return InvoiceReadDto from ID*/
  findAllFilter(filter?: Partial<InvoiceReadFilterDto>, page?: number, pageSize?: number): Promise<PaginationDto<InvoiceReadDto>>;
  /*create InvoiceInsertDto*/
  create(data: InvoiceInsertDto): Promise<InvoiceReadDto>;
  /*update InvoiceUpdateDto*/
  update( data: InvoiceUpdateDto): Promise<InvoiceReadDto>;
}