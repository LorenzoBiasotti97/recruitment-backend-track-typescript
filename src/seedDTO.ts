import { PrismaClient } from '@prisma/client';
import { UserDto } from './shared/dto/userDTO';
import { TaxProfileDto } from './shared/dto/taxProfileDTO';
import { InvoiceDto } from './shared/dto/invoiceDTO';
import { UserInvoiceDto } from './shared/dto/userInvoiceDTO';

const prisma = new PrismaClient();

/**
 * Main function to seed the database with initial data using Data Transfer Objects (DTOs).
 * This script first cleans up existing data and then populates the tables for users,
 * tax profiles, invoices, and their associations.
 */
async function main() {
  console.log('Starting to seed the database with DTOs...');

  // Step 1: Database cleanup. The order is important due to foreign key constraints.
  await prisma.userInvoice.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.taxProfile.deleteMany();
  await prisma.user.deleteMany();
  console.log('Existing data deleted successfully.');

  // Step 2: User creation using DTOs.
  // We create a DTO instance and use its data for creation.
  const userDto1 = new UserDto();
  Object.assign(userDto1, {
    firstName: 'Mario',
    lastName: 'Rossi',
    email: 'mario.rossi@example.com',
    password: 'password123',
    role: 'USER',
  });

  const userDto2 = new UserDto();
  Object.assign(userDto2, {
    firstName: 'Giulia',
    lastName: 'Verdi',
    email: 'giulia.verdi@example.com',
    password: 'password123',
    role: 'ADMIN',
  });

  // We pass only the primitive fields from the DTO object to Prisma.
  const user1 = await prisma.user.create({
    data: {
      firstName: userDto1.firstName,
      lastName: userDto1.lastName,
      password: "password123",
      email: userDto1.email,
      role: userDto1.role,
    },
  });
  console.log(`Created user with id: ${user1.id} using UserDto.`);
  
  const user2 = await prisma.user.create({
    data: {
      firstName: userDto2.firstName,
      lastName: userDto2.lastName,
      password: "password123",
      email: userDto2.email,
      role: userDto2.role,
    },
  });
  console.log(`Created user with id: ${user2.id} using UserDto.`);


  // Step 3: Tax profile creation using DTOs.
  const taxProfileDto1 = new TaxProfileDto();
  Object.assign(taxProfileDto1, {
    userId: user1.id,
    taxType: 'IVA',
    isFlatRate: true,
  });

  const taxProfileDto2 = new TaxProfileDto();
  Object.assign(taxProfileDto2, {
    userId: user2.id,
    taxType: 'Flat Tax',
    isFlatRate: false,
  });
  
  const taxProfile1 = await prisma.taxProfile.create({
    data: {
      userId: taxProfileDto1.userId,
      taxType: taxProfileDto1.taxType,
      isFlatRate: taxProfileDto1.isFlatRate,
    },
  });
  console.log(`Created tax profile with id: ${taxProfile1.id} for user ${user1.id} using TaxProfileDto.`);

  const taxProfile2 = await prisma.taxProfile.create({
    data: {
      userId: taxProfileDto2.userId,
      taxType: taxProfileDto2.taxType,
      isFlatRate: taxProfileDto2.isFlatRate,
    },
  });
  console.log(`Created tax profile with id: ${taxProfile2.id} for user ${user2.id} using TaxProfileDto.`);


  // Step 4: Invoice creation using DTOs.
  const invoiceDto1 = new InvoiceDto();
  Object.assign(invoiceDto1, {
    invoiceNumber: 1234567890n,
    amount: 150.50,
    dueDate: new Date('2024-12-31T23:59:59Z'),
    title: 'Servizi di consulenza',
    docDate: new Date('2024-11-01T00:00:00Z'),
    docType: 'Fattura Elettronica',
    isPaid: false,
    isCancelled: false,
    taxProfileId: taxProfile1.id,
  });

  const invoiceDto2 = new InvoiceDto();
  Object.assign(invoiceDto2, {
    invoiceNumber: 9876543210n,
    amount: 250.75,
    dueDate: new Date('2024-11-30T23:59:59Z'),
    title: 'Prodotto software',
    docDate: new Date('2024-10-15T00:00:00Z'),
    docType: 'Fattura Elettronica',
    isPaid: true,
    isCancelled: false,
    taxProfileId: taxProfile1.id,
  });

  const invoiceDto3 = new InvoiceDto();
  Object.assign(invoiceDto3, {
    invoiceNumber: 1122334455n,
    amount: 500.00,
    dueDate: new Date('2025-01-15T23:59:59Z'),
    title: 'Manutenzione sito web',
    docDate: new Date('2024-12-01T00:00:00Z'),
    docType: 'Fattura Pro Forma',
    isPaid: false,
    isCancelled: false,
    taxProfileId: taxProfile2.id,
  });

  const invoice1 = await prisma.invoice.create({
    data: {
      invoiceNumber: invoiceDto1.invoiceNumber,
      amount: invoiceDto1.amount,
      dueDate: invoiceDto1.dueDate,
      title: invoiceDto1.title,
      docDate: invoiceDto1.docDate,
      docType: invoiceDto1.docType,
      isPaid: invoiceDto1.isPaid,
      isCancelled: invoiceDto1.isCancelled,
      taxProfileId: invoiceDto1.taxProfileId,
    },
  });
  console.log(`Created invoice with id: ${invoice1.id} using InvoiceDto.`);

  const invoice2 = await prisma.invoice.create({
    data: {
      invoiceNumber: invoiceDto2.invoiceNumber,
      amount: invoiceDto2.amount,
      dueDate: invoiceDto2.dueDate,
      title: invoiceDto2.title,
      docDate: invoiceDto2.docDate,
      docType: invoiceDto2.docType,
      isPaid: invoiceDto2.isPaid,
      isCancelled: invoiceDto2.isCancelled,
      taxProfileId: invoiceDto2.taxProfileId,
    },
  });
  console.log(`Created invoice with id: ${invoice2.id} using InvoiceDto.`);

  const invoice3 = await prisma.invoice.create({
    data: {
      invoiceNumber: invoiceDto3.invoiceNumber,
      amount: invoiceDto3.amount,
      dueDate: invoiceDto3.dueDate,
      title: invoiceDto3.title,
      docDate: invoiceDto3.docDate,
      docType: invoiceDto3.docType,
      isPaid: invoiceDto3.isPaid,
      isCancelled: invoiceDto3.isCancelled,
      taxProfileId: invoiceDto3.taxProfileId,
    },
  });
  console.log(`Created invoice with id: ${invoice3.id} using InvoiceDto.`);

  // Step 5: User-invoice association creation using DTOs.
  const userInvoiceDto1 = new UserInvoiceDto();
  Object.assign(userInvoiceDto1, {
    userId: user1.id,
    invoiceId: invoice1.id,
    dateLinked: new Date(),
    firstView: new Date(),
  });
  
  const userInvoiceDto2 = new UserInvoiceDto();
  Object.assign(userInvoiceDto2, {
    userId: user1.id,
    invoiceId: invoice2.id,
    dateLinked: new Date(),
    firstView: new Date(),
    lastView: new Date(),
  });
  
  const userInvoiceDto3 = new UserInvoiceDto();
  Object.assign(userInvoiceDto3, {
    userId: user2.id,
    invoiceId: invoice3.id,
    dateLinked: new Date(),
    firstView: new Date(),
  });

  await prisma.userInvoice.create({
    data: {
      userId: userInvoiceDto1.userId,
      invoiceId: userInvoiceDto1.invoiceId,
      dateLinked: userInvoiceDto1.dateLinked,
      firstView: userInvoiceDto1.firstView,
      lastView: userInvoiceDto1.lastView,
    },
  });
  console.log(`Created user-invoice association for user ${user1.id} and invoice ${invoice1.id} using UserInvoiceDto.`);

  await prisma.userInvoice.create({
    data: {
      userId: userInvoiceDto2.userId,
      invoiceId: userInvoiceDto2.invoiceId,
      dateLinked: userInvoiceDto2.dateLinked,
      firstView: userInvoiceDto2.firstView,
      lastView: userInvoiceDto2.lastView,
    },
  });
  console.log(`Created user-invoice association for user ${user1.id} and invoice ${invoice2.id} using UserInvoiceDto.`);
  
  await prisma.userInvoice.create({
    data: {
      userId: userInvoiceDto3.userId,
      invoiceId: userInvoiceDto3.invoiceId,
      dateLinked: userInvoiceDto3.dateLinked,
      firstView: userInvoiceDto3.firstView,
      lastView: userInvoiceDto3.lastView,
    },
  });
  console.log(`Created user-invoice association for user ${user2.id} and invoice ${invoice3.id} using UserInvoiceDto.`);

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
