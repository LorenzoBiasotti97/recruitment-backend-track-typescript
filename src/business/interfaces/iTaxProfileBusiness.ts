import { TaxProfileReadDto } from "../../shared/dto/taxProfileReadDTO";
import { TaxProfileInsertDto } from "../../shared/dto/taxProfileInsertDTO";
import { TaxProfileUpdateDto } from "../../shared/dto/taxProfileUpdateDTO";
import { PaginationDto } from "../../shared/dto/paginationDTO";
import { TaxProfileFilterDto } from "../../shared/dto/taxProfileFilterDTO";


/**
 * Business interface for the TaxProfile entity.
 * Defines the methods for CRUD operations on the TaxProfile model,
 * using DTOS
 */
export interface ITaxProfileBusiness {
  /*return all TaxProfileReadDto as arrey*/
  /**
 * @deprecated Use findAllFilter instead
 */
  findAll(): Promise<TaxProfileReadDto[]>;
  /*return all TaxProfileReadDto as arrey with filter and pagination*/
  findAllFilter(filter?: Partial<TaxProfileFilterDto>, page?: number, pageSize?: number): Promise<PaginationDto<TaxProfileReadDto>>;
  /*return TaxProfileReadDto from ID*/
  findById(id: bigint): Promise<TaxProfileReadDto | null>;
  /*create TaxProfileCreateDto*/
  create(data: TaxProfileInsertDto): Promise<TaxProfileReadDto>;
  /*update TaxProfileUpdateDto*/
  update(data: TaxProfileUpdateDto): Promise<TaxProfileReadDto>;
}