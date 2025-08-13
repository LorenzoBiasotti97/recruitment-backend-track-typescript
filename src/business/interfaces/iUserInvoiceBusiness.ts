import { UserInvoiceDto } from "../../shared/dto/userInvoiceDTO";

/**
 * Business interface for the UserInvoice entity.
 * Defines the methods for CRUD operations on the UserInvoice model,
 * using DTO.
 */
export interface IUserInvoiceBusiness {
  /*return all UserInvoiceDto as array*/
  findAll(): Promise<UserInvoiceDto[]>;
  /*return UserInvoiceDto from ID*/
  findById(id: bigint): Promise<UserInvoiceDto | null>;
  /*create UserInvoiceDto*/
  create(data: Omit<UserInvoiceDto, 'id' | 'dateLinked'>): Promise<UserInvoiceDto>;
  /*update UserInvoiceDto*/
  update(id: bigint, data: Partial<Omit<UserInvoiceDto, 'id' | 'dateLinked'>>): Promise<UserInvoiceDto>;
}