import { TaxProfileType, UserRole } from "../../shared/domainValues"; 

/**
 * Interface representing a User model.
  * Defines the structure of a User entity, including its properties and associations.
 */
export interface IUser {
  id: bigint;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  associations?: IUserInvoice[];
}

/**
 * Interface representing an Invoice model.
 * Defines the structure of an Invoice entity, including its properties and associations.
 */
export interface IInvoice {
  id: bigint;      
  createdAt: Date;
  updatedAt: Date;
  invoiceNumber: bigint;
  amount: number;    
  dueDate: Date;
  title: string;   
  docDate: Date;
  docType: string;   
  data?: Buffer;  
  isPaid: boolean;   
  isCancelled: boolean; 
  taxProfileId: bigint;       
  taxProfile: ITaxProfile;
  associations?: IUserInvoice[];
}

/**
 * Interface representing a Tax Profile model.
 * Defines the structure of a Tax Profile entity, including its properties and associations.
 */
export interface ITaxProfile {
  id: bigint;      
  createdAt: Date; 
  updatedAt: Date;
  userId: bigint;     
  user: IUser;        
  invoices?: IInvoice[];   
  taxType: TaxProfileType;
  isFlatRate: boolean;
}

/**
 * Interface representing a User-Invoice association model.
  * Defines the structure of a User-Invoice association entity, including its properties and associations.
 */
export interface IUserInvoice {
  id: bigint;       
  userId: bigint;       
  invoiceId: bigint;       
  dateLinked: Date; 
  firstView?: Date | null;
  lastView?: Date | null;
  user: IUser;        
  invoice: IInvoice;       
}