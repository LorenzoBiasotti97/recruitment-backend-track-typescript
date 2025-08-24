import { PaginationDto } from "../../shared/dto/paginationDTO";
import { IUser, IInvoice, ITaxProfile, IUserInvoice } from "./iModel";

/**
 * Repository interface for the User entity.
 * Defines the methods for CRUD operations on the User model.
 */
export interface IUserRepository {
  /**
   * @deprecated Use findAllFilter instead
   */
  findAll(): Promise<IUser[]>;
  findAllFilter(filter?: Partial<IUser>, page?: number, pageSize?: number): Promise<PaginationDto<IUser>>;
  findById(id: bigint): Promise<IUser | null>;
  create(data: Omit<IUser, 'id' | 'createdAt' | 'updatedAt' | 'associations' | 'taxProfile'>): Promise<IUser>;
  delete(id: bigint): Promise<void>;
  update(data: Partial<Omit<IUser, 'associations' | 'taxProfile'>>): Promise<IUser>;
}

/**
 * Repository interface for the Invoice entity.
 * Defines the methods for CRUD operations on the Invoice model.
 */
export interface IInvoiceRepository {
  /**
   * @deprecated Use findAllFilter instead
   */
  findAll(): Promise<IInvoice[]>;
  findAllFilter(filter?: Partial<IInvoice>, page?: number, pageSize?: number): Promise<PaginationDto<IInvoice>>;
  findById(id: bigint): Promise<IInvoice | null>;
  create(data: Omit<IInvoice, 'id' | 'createdAt' | 'updatedAt' | 'associations' | 'taxProfile'>): Promise<IInvoice>;
  delete(id: bigint): Promise<void>;
  update(data: Partial<Omit<IInvoice, 'associations' | 'taxProfile'>>): Promise<IInvoice>;
}

/**
 * Repository interface for the TaxProfile entity.
 * Defines the methods for CRUD operations on the TaxProfile model.
 */
export interface ITaxProfileRepository {
  /**
   * @deprecated Use findAllFilter instead
   */
  findAll(): Promise<ITaxProfile[]>;
  findAllFilter(filter?: Partial<ITaxProfile>, page?: number, pageSize?: number): Promise<PaginationDto<ITaxProfile>>;
  findById(id: bigint): Promise<ITaxProfile | null>;
  create(data: Omit<ITaxProfile, 'id' | 'createdAt' | 'updatedAt' | 'invoices' | 'user'>): Promise<ITaxProfile>;
  delete(id: bigint): Promise<void>;
  update(data: Partial<Omit<ITaxProfile, 'invoices' | 'user'>>): Promise<ITaxProfile>;
}

/**
 * Repository interface for the UserInvoice entity.
 * Defines the methods for CRUD operations on the UserInvoice model.
 */
export interface IUserInvoiceRepository {
  /**
   * @deprecated Use findAllFilter instead
   */
  findAll(): Promise<IUserInvoice[]>;
  findAllFilter(filter?: Partial<IUserInvoice>, page?: number, pageSize?: number): Promise<PaginationDto<IUserInvoice>>;
  findById(id: bigint): Promise<IUserInvoice | null>;
  create(data: Omit<IUserInvoice, 'id' | 'dateLinked' | 'user' | 'invoice'>): Promise<IUserInvoice>;
  delete(id: bigint): Promise<void>;
  update(data: Partial<Omit<IUserInvoice, 'user' | 'invoice'>>): Promise<IUserInvoice>;
}