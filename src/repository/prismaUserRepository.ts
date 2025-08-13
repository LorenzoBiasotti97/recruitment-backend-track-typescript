import { PrismaClient } from '@prisma/client';
import { IUserRepository, IInvoiceRepository, ITaxProfileRepository, IUserInvoiceRepository } from './interfaces/iRepository';
import { IUser, IInvoice, ITaxProfile, IUserInvoice } from './interfaces/iModel';


// Single PrismaClient instance to be used across all repository classes.
const prisma = new PrismaClient();

/**
 * Implementation of IUserRepository using Prisma ORM.
 * Provides concrete methods for CRUD operations on the User model.
 */
export class PrismaUserRepository implements IUserRepository {
  async findAll(): Promise<IUser[]> {
    return (await prisma.user.findMany()) as IUser[];
  }

  async findById(id: bigint): Promise<IUser | null> {
    return (await prisma.user.findUnique({ where: { id } })) as IUser | null;
  }

  async create(data: Omit<IUser, 'id' | 'createdAt' | 'updatedAt' | 'associations' | 'taxProfile'>): Promise<IUser> {
    return prisma.user.create({ data: data as any }) as unknown as IUser;
  }

  async delete(id: bigint): Promise<void> {
    await prisma.user.delete({ where: { id } });
  }

  async update(id: bigint, data: Partial<Omit<IUser, 'associations' | 'taxProfile'>>): Promise<IUser> {
    return prisma.user.update({
      where: { id },
      data,
    }) as unknown as IUser;
  }
}

/**
 * Implementation of IInvoiceRepository using Prisma ORM.
 * Provides concrete methods for CRUD operations on the Invoice model.
 */
export class PrismaInvoiceRepository implements IInvoiceRepository {
  async findAll(): Promise<IInvoice[]> {
    return (await prisma.invoice.findMany()) as IInvoice[];
  }

  async findById(id: bigint): Promise<IInvoice | null> {
    return (await prisma.invoice.findUnique({ where: { id } })) as IInvoice | null;
  }

  async create(data: Omit<IInvoice, 'id' | 'createdAt' | 'updatedAt' | 'associations' | 'taxProfile'>): Promise<IInvoice> {
    return prisma.invoice.create({ data: data as any }) as unknown as IInvoice;
  }

  async delete(id: bigint): Promise<void> {
    await prisma.invoice.delete({ where: { id } });
  }

  async update(id: bigint, data: Partial<Omit<IInvoice, 'associations' | 'taxProfile'>>): Promise<IInvoice> {
    return prisma.invoice.update({
      where: { id },
      data,
    }) as unknown as IInvoice;
  }
}

/**
 * Implementation of ITaxProfileRepository using Prisma ORM.
 * Provides concrete methods for CRUD operations on the TaxProfile model.
 */
export class PrismaTaxProfileRepository implements ITaxProfileRepository {
  async findAll(): Promise<ITaxProfile[]> {
    return (await prisma.taxProfile.findMany()) as ITaxProfile[];
  }

  async findById(id: bigint): Promise<ITaxProfile | null> {
    return (await prisma.taxProfile.findUnique({ where: { id } })) as ITaxProfile | null;
  }

  async create(data: Omit<ITaxProfile, 'id' | 'createdAt' | 'updatedAt' | 'invoices' | 'user'>): Promise<ITaxProfile> {
    return prisma.taxProfile.create({ data: data as any }) as unknown as ITaxProfile;
  }

  async delete(id: bigint): Promise<void> {
    await prisma.taxProfile.delete({ where: { id } });
  }

  async update(id: bigint, data: Partial<Omit<ITaxProfile, 'invoices' | 'user'>>): Promise<ITaxProfile> {
    return prisma.taxProfile.update({
      where: { id },
      data,
    }) as unknown as ITaxProfile;
  }
}

/**
 * Implementation of IUserInvoiceRepository using Prisma ORM.
 * Provides concrete methods for CRUD operations on the UserInvoice model.
 */
export class PrismaUserInvoiceRepository implements IUserInvoiceRepository {
  async findAll(): Promise<IUserInvoice[]> {
    return (await prisma.userInvoice.findMany()) as IUserInvoice[];
  }

  async findById(id: bigint): Promise<IUserInvoice | null> {
    return (await prisma.userInvoice.findUnique({ where: { id } })) as IUserInvoice | null;
  }

  async create(data: Omit<IUserInvoice, 'id' | 'dateLinked' | 'user' | 'invoice'>): Promise<IUserInvoice> {
    return prisma.userInvoice.create({ data: data as any }) as unknown as IUserInvoice;
  }

  async delete(id: bigint): Promise<void> {
    await prisma.userInvoice.delete({ where: { id } });
  }

  async update(id: bigint, data: Partial<Omit<IUserInvoice, 'user' | 'invoice'>>): Promise<IUserInvoice> {
    return prisma.userInvoice.update({
      where: { id },
      data,
    }) as unknown as IUserInvoice;
  }
}
