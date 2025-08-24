import { UserInvoiceReadDto } from "../../shared/dto/userInvoiceReadDTO";
import { UserInvoiceInsertDto } from "../../shared/dto/userInvoiceInsertDTO";
import { UserInvoiceUpdateDto } from "../../shared/dto/userInvoiceUpdateDTO";
import { UserInvoiceFilterDto } from "../../shared/dto/userInvoiceFilterDTO";
import { PaginationDto } from "../../shared/dto/paginationDTO";

/**
 * Business interface for the UserInvoice entity.
 * Defines the methods for CRUD operations on the UserInvoice model,
 * using DTO.
 */
export interface IUserInvoiceBusiness {
  /*return all UserInvoiceReadDto as array*/
  /**
 * @deprecated Use findAllFilter instead
 */
  findAll(): Promise<UserInvoiceReadDto[]>;
  /*return paginated UserInvoiceReadDto array with filter*/
  findAllFilter(filter?: Partial<UserInvoiceFilterDto>, page?: number, pageSize?: number): Promise<PaginationDto<UserInvoiceReadDto>>;
  /*return UserInvoiceReadDto from ID*/
  findById(id: bigint): Promise<UserInvoiceReadDto | null>;
  /*create UserInvoiceCreateDto*/
  create(data: UserInvoiceInsertDto): Promise<UserInvoiceReadDto>;
  /*update UserInvoiceUpdateDto*/
  update(data: UserInvoiceUpdateDto ): Promise<UserInvoiceReadDto>;
}