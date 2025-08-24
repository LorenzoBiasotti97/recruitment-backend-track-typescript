import { PrismaClient } from '@prisma/client';
import { IUserRepository, IInvoiceRepository, ITaxProfileRepository, IUserInvoiceRepository } from './interfaces/iRepository';
import { IUser, IInvoice, ITaxProfile, IUserInvoice } from './interfaces/iModel';
import { PaginationDto } from '../shared/dto/paginationDTO';


// Single PrismaClient instance to be used across all repository classes.
const prisma = new PrismaClient();

/**
 * Implementation of IUserRepository using Prisma ORM.
 * Provides concrete methods for CRUD operations on the User model.
 */
export class PrismaUserRepository implements IUserRepository {
  /**
   * @deprecated Use findAllFilter instead
   */
  async findAll(): Promise<IUser[]> {
    return (await prisma.user.findMany()) as IUser[];
  }

  async findAllFilter( filter: Partial<IUser> = {},  page = 1,  pageSize = 10): Promise<PaginationDto<IUser>> {
  
  const where: any = {};

  if (filter.id) where.id = BigInt(filter.id);
  if (filter.firstName) where.firstName = { contains: filter.firstName, mode: 'insensitive' };
  if (filter.lastName) where.lastName = { contains: filter.lastName, mode: 'insensitive' };
  if (filter.email) where.email = { contains: filter.email, mode: 'insensitive' };
  if (filter.role) where.role = filter.role;

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: 'desc' },
    }),
    prisma.user.count({ where }),
  ]);

  const pginatedUsers = {
    data: users as IUser[],
    pagination:{
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    }
  };

  return pginatedUsers as PaginationDto<IUser>; 

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

  async update( data: Partial<Omit<IUser, 'associations' | 'taxProfile'>>): Promise<IUser> {
    const id = data.id;
    if (!id) {
      throw new Error('ID is required for update');
    }
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
  /**
   * @deprecated Use findAllFilter instead
   */
  async findAll(): Promise<IInvoice[]> {
    return (await prisma.invoice.findMany()) as IInvoice[];
  }
  
  
  async findAllFilter( filter: Partial<IInvoice> = {},  page = 1,  pageSize = 10): Promise<PaginationDto<IInvoice>> {
  
    const where: any = {};
    if (filter.id) where.id = BigInt(filter.id);
    if (filter.invoiceNumber) where.invoiceNumber = BigInt(filter.invoiceNumber);
    if (filter.amount !== undefined) where.amount = filter.amount;
    if (filter.dueDate) where.dueDate = new Date(filter.dueDate);
    if (filter.title) where.title = { contains: filter.title, mode: 'insensitive' };
    if (filter.docDate) where.docDate = new Date(filter.docDate);
    if (filter.docType) where.docType = filter.docType;
    if (filter.data) where.data = filter.data;
    if (filter.isPaid !== undefined) where.isPaid = filter.isPaid;
    if (filter.isCancelled !== undefined) where.isCancelled = filter.isCancelled;
    if (filter.taxProfileId) where.taxProfileId = BigInt(filter.taxProfileId);

    const [invoices, total] = await Promise.all([
      prisma.invoice.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.invoice.count({ where }),
    ]);
  

    const paginatedInvoices = {
      data: invoices as IInvoice[],
      pagination:{
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      }
    };

    return paginatedInvoices as PaginationDto<IInvoice>; 
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

  async update(data: Partial<Omit<IInvoice, 'associations' | 'taxProfile'>>): Promise<IInvoice> {
    const id = data.id;
    if (!id) {
      throw new Error('ID is required for update');
    }
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
  /**
   * @deprecated Use findAllFilter instead
   */
  async findAll(): Promise<ITaxProfile[]> {
    return (await prisma.taxProfile.findMany()) as ITaxProfile[];
  }

  async findAllFilter( filter: Partial<ITaxProfile> = {},  page = 1,  pageSize = 10): Promise<PaginationDto<ITaxProfile>> {
  
    const where: any = {};
    if (filter.id) where.id = BigInt(filter.id);
    if (filter.createdAt) where.createdAt = new Date(filter.createdAt);
    if (filter.updatedAt) where.updatedAt = new Date(filter.updatedAt);
    if (filter.userId) where.userId = BigInt(filter.userId);
    if (filter.taxType) where.taxType = { contains: filter.taxType, mode: 'insensitive' };
    if (filter.isFlatRate !== undefined) where.isFlatRate = filter.isFlatRate

    const [taxprofiles, total] = await Promise.all([
      prisma.taxProfile.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.taxProfile.count({ where }),
    ]);
  

    const paginatedTaxProfile = {
      data: taxprofiles as ITaxProfile[],
      pagination:{
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      }
    };

    return paginatedTaxProfile as PaginationDto<ITaxProfile>; 
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

  async update(data: Partial<Omit<ITaxProfile, 'invoices' | 'user'>>): Promise<ITaxProfile> {
    const id = data.id;
    if (!id) {
      throw new Error('ID is required for update');
    }
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
  /**
   * @deprecated Use findAllFilter instead
   */
  async findAll(): Promise<IUserInvoice[]> {
    return (await prisma.userInvoice.findMany()) as IUserInvoice[];
  }

  async findAllFilter( filter: Partial<IUserInvoice> = {},  page = 1,  pageSize = 10): Promise<PaginationDto<IUserInvoice>> {
  
    const where: any = {};
    if (filter.id) where.id = BigInt(filter.id);
    if (filter.userId) where.userId = BigInt(filter.userId);
    if (filter.invoiceId) where.invoiceId = BigInt(filter.invoiceId);
    if (filter.dateLinked) where.dateLinked = new Date(filter.dateLinked);
    if (filter.firstView) where.firstView = new Date(filter.firstView);
    if (filter.lastView) where.lastView = new Date(filter.lastView);

    const [userInvoices, total] = await Promise.all([
      prisma.userInvoice.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { dateLinked: 'desc' },
      }),
      prisma.userInvoice.count({ where }),
    ]);
  
    const paginatedUserInvoice = {
      data: userInvoices as IUserInvoice[],
      pagination:{
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize),
      }
    };

    return paginatedUserInvoice as PaginationDto<IUserInvoice>; 
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

  async update(data: Partial<Omit<IUserInvoice, 'user' | 'invoice'>>): Promise<IUserInvoice> {
    const id = data.id;
    if (!id) {
      throw new Error('ID is required for update');
    }
    return prisma.userInvoice.update({
      where: { id },
      data,
    }) as unknown as IUserInvoice;
  }
}
