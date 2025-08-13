import { IUser, IInvoice, ITaxProfile, IUserInvoice } from "./iModel";

/**
 * Repository interface for the User entity.
 * Defines the methods for CRUD operations on the User model.
 */
export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: bigint): Promise<IUser | null>;
  create(data: Omit<IUser, 'id' | 'createdAt' | 'updatedAt' | 'associations' | 'taxProfile'>): Promise<IUser>;
  delete(id: bigint): Promise<void>;
  update(id: bigint, data: Partial<Omit<IUser, 'associations' | 'taxProfile'>>): Promise<IUser>;
}

/**
 * Repository interface for the Invoice entity.
 * Defines the methods for CRUD operations on the Invoice model.
 */
export interface IInvoiceRepository {
  findAll(): Promise<IInvoice[]>;
  findById(id: bigint): Promise<IInvoice | null>;
  create(data: Omit<IInvoice, 'id' | 'createdAt' | 'updatedAt' | 'associations' | 'taxProfile'>): Promise<IInvoice>;
  delete(id: bigint): Promise<void>;
  update(id: bigint, data: Partial<Omit<IInvoice, 'associations' | 'taxProfile'>>): Promise<IInvoice>;
}

/**
 * Repository interface for the TaxProfile entity.
 * Defines the methods for CRUD operations on the TaxProfile model.
 */
export interface ITaxProfileRepository {
  findAll(): Promise<ITaxProfile[]>;
  findById(id: bigint): Promise<ITaxProfile | null>;
  create(data: Omit<ITaxProfile, 'id' | 'createdAt' | 'updatedAt' | 'invoices' | 'user'>): Promise<ITaxProfile>;
  delete(id: bigint): Promise<void>;
  update(id: bigint, data: Partial<Omit<ITaxProfile, 'invoices' | 'user'>>): Promise<ITaxProfile>;
}

/**
 * Repository interface for the UserInvoice entity.
 * Defines the methods for CRUD operations on the UserInvoice model.
 */
export interface IUserInvoiceRepository {
  findAll(): Promise<IUserInvoice[]>;
  findById(id: bigint): Promise<IUserInvoice | null>;
  create(data: Omit<IUserInvoice, 'id' | 'dateLinked' | 'user' | 'invoice'>): Promise<IUserInvoice>;
  delete(id: bigint): Promise<void>;
  update(id: bigint, data: Partial<Omit<IUserInvoice, 'user' | 'invoice'>>): Promise<IUserInvoice>;
}