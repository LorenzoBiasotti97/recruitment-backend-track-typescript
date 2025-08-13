import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Main function to seed the database with initial data with prisma operations.
 */
async function main() {
  // Step 1: Delete all existing data to ensure a clean slate.
  // The deletion order is important due to foreign key constraints.
  await prisma.userInvoice.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.taxProfile.deleteMany();
  await prisma.user.deleteMany();

  console.log('Existing data deleted successfully.');

  // Step 2: Populate the User table.
  const user1 = await prisma.user.create({
    data: {
      firstName: 'Lorenzo',
      lastName: 'Rossi',
      email: 'lorenzo.rossi@example.com',
      password: 'password123',
      role: 'USER',
    },
  });
  console.log(`Created user with id: ${user1.id}`);

  const user2 = await prisma.user.create({
    data: {
      firstName: 'Francesca',
      lastName: 'Bianchi',
      email: 'francesca.bianchi@example.com',
      password: 'password123',
      role: 'ADMIN',
    },
  });
  console.log(`Created user with id: ${user2.id}`);

  // Step 3: Populate the TaxProfile table and link it to user1.
  const taxProfile1 = await prisma.taxProfile.create({
    data: {
      userId: user1.id,
      taxType: 'IVA',
      isFlatRate: true,
    },
  });
  console.log(`Created tax profile with id: ${taxProfile1.id} for user ${user1.id}`);

  // Populate the TaxProfile table and link it to user2.
  const taxProfile2 = await prisma.taxProfile.create({
    data: {
      userId: user2.id,
      taxType: 'Flat Tax',
      isFlatRate: true,
    },
  });
  console.log(`Created tax profile with id: ${taxProfile2.id} for user ${user2.id}`);

  // Step 4: Populate the Invoice table and link it to the tax profiles.
  const invoice1 = await prisma.invoice.create({
    data: {
      invoiceNumber: 1234567890n, // A reasonably sized BigInt.
      amount: 150.50,
      dueDate: new Date('2024-12-31T23:59:59Z'),
      title: 'Consulting Services',
      docDate: new Date('2024-11-01T00:00:00Z'),
      docType: 'Fattura Elettronica',
      isPaid: false,
      isCancelled: false,
      taxProfileId: taxProfile1.id,
    },
  });
  console.log(`Created invoice with id: ${invoice1.id}`);

  const invoice2 = await prisma.invoice.create({
    data: {
      invoiceNumber: 9876543210n, // A unique and reasonably sized BigInt.
      amount: 250.75,
      dueDate: new Date('2024-11-30T23:59:59Z'),
      title: 'Software Product',
      docDate: new Date('2024-10-15T00:00:00Z'),
      docType: 'Fattura Elettronica',
      isPaid: true,
      isCancelled: false,
      taxProfileId: taxProfile1.id,
    },
  });
  console.log(`Created invoice with id: ${invoice2.id}`);

  const invoice3 = await prisma.invoice.create({
    data: {
      invoiceNumber: 1122334455n,
      amount: 500.00,
      dueDate: new Date('2025-01-15T23:59:59Z'),
      title: 'Website Maintenance',
      docDate: new Date('2024-12-01T00:00:00Z'),
      docType: 'Fattura Pro Forma',
      isPaid: false,
      isCancelled: false,
      taxProfileId: taxProfile2.id,
    },
  });
  console.log(`Created invoice with id: ${invoice3.id}`);

  // Step 5: Populate the UserInvoice table to associate users and invoices.
  await prisma.userInvoice.create({
    data: {
      userId: user1.id,
      invoiceId: invoice1.id,
      dateLinked: new Date(),
      firstView: new Date(),
    },
  });
  console.log(`Created user-invoice association for user ${user1.id} and invoice ${invoice1.id}`);

  await prisma.userInvoice.create({
    data: {
      userId: user1.id,
      invoiceId: invoice2.id,
      dateLinked: new Date(),
      firstView: new Date(),
      lastView: new Date(),
    },
  });
  console.log(`Created user-invoice association for user ${user1.id} and invoice ${invoice2.id}`);
  
  await prisma.userInvoice.create({
    data: {
      userId: user2.id,
      invoiceId: invoice3.id,
      dateLinked: new Date(),
      firstView: new Date(),
    },
  });
  console.log(`Created user-invoice association for user ${user2.id} and invoice ${invoice3.id}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
