import { TaxProfileDto } from "../../shared/dto/taxProfileDTO";


/**
 * Business interface for the TaxProfile entity.
 * Defines the methods for CRUD operations on the TaxProfile model,
 * using DTOS
 */
export interface ITaxProfileBusiness {
  /*return all TaxProfileDto as arrey*/
  findAll(): Promise<TaxProfileDto[]>;
  /*return TaxProfileDto from ID*/
  findById(id: bigint): Promise<TaxProfileDto | null>;
  /*create TaxProfileDto*/
  create(data: Omit<TaxProfileDto, 'id' | 'createdAt' | 'updatedAt'>): Promise<TaxProfileDto>;
  /*update TaxProfileDto*/
  update(id: bigint, data: Partial<Omit<TaxProfileDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<TaxProfileDto>;
}