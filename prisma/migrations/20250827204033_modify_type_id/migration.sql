/*
  Warnings:

  - The primary key for the `Invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TaxProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
*/

-- DropForeignKey
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_id_tax_profile_fkey";
ALTER TABLE "public"."TaxProfile" DROP CONSTRAINT "TaxProfile_id_user_fkey";
ALTER TABLE "public"."user_invoice" DROP CONSTRAINT "user_invoice_id_invoice_fkey";
ALTER TABLE "public"."user_invoice" DROP CONSTRAINT "user_invoice_id_user_fkey";

-- AlterTable: Invoice
ALTER TABLE "public"."Invoice" DROP CONSTRAINT "Invoice_pkey";
ALTER TABLE "public"."Invoice" ALTER COLUMN "id_invoice" TYPE bigint;
ALTER TABLE "public"."Invoice" ALTER COLUMN "id_tax_profile" TYPE bigint;
CREATE SEQUENCE IF NOT EXISTS invoice_id_invoice_seq;
ALTER TABLE "public"."Invoice" ALTER COLUMN "id_invoice" SET DEFAULT nextval('invoice_id_invoice_seq');
ALTER SEQUENCE invoice_id_invoice_seq OWNED BY "public"."Invoice"."id_invoice";
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id_invoice");

-- AlterTable: TaxProfile
ALTER TABLE "public"."TaxProfile" DROP CONSTRAINT "TaxProfile_pkey";
ALTER TABLE "public"."TaxProfile" ALTER COLUMN "id_tax_profile" TYPE bigint;
ALTER TABLE "public"."TaxProfile" ALTER COLUMN "id_user" TYPE bigint;
CREATE SEQUENCE IF NOT EXISTS taxprofile_id_tax_profile_seq;
ALTER TABLE "public"."TaxProfile" ALTER COLUMN "id_tax_profile" SET DEFAULT nextval('taxprofile_id_tax_profile_seq');
ALTER SEQUENCE taxprofile_id_tax_profile_seq OWNED BY "public"."TaxProfile"."id_tax_profile";
ALTER TABLE "public"."TaxProfile" ADD CONSTRAINT "TaxProfile_pkey" PRIMARY KEY ("id_tax_profile");

-- AlterTable: User
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey";
ALTER TABLE "public"."User" ALTER COLUMN "id_user" TYPE bigint;
CREATE SEQUENCE IF NOT EXISTS user_id_user_seq;
ALTER TABLE "public"."User" ALTER COLUMN "id_user" SET DEFAULT nextval('user_id_user_seq');
ALTER SEQUENCE user_id_user_seq OWNED BY "public"."User"."id_user";
ALTER TABLE "public"."User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id_user");

-- AlterTable: user_invoice
ALTER TABLE "public"."user_invoice" DROP CONSTRAINT "user_invoice_pkey";
ALTER TABLE "public"."user_invoice" ALTER COLUMN "id_user_invoice" TYPE bigint;
ALTER TABLE "public"."user_invoice" ALTER COLUMN "id_user" TYPE bigint;
ALTER TABLE "public"."user_invoice" ALTER COLUMN "id_invoice" TYPE bigint;
CREATE SEQUENCE IF NOT EXISTS user_invoice_id_user_invoice_seq;
ALTER TABLE "public"."user_invoice" ALTER COLUMN "id_user_invoice" SET DEFAULT nextval('user_invoice_id_user_invoice_seq');
ALTER SEQUENCE user_invoice_id_user_invoice_seq OWNED BY "public"."user_invoice"."id_user_invoice";
ALTER TABLE "public"."user_invoice" ADD CONSTRAINT "user_invoice_pkey" PRIMARY KEY ("id_user_invoice");

-- AddForeignKey
ALTER TABLE "public"."TaxProfile"
  ADD CONSTRAINT "TaxProfile_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."Invoice"
  ADD CONSTRAINT "Invoice_id_tax_profile_fkey" FOREIGN KEY ("id_tax_profile") REFERENCES "public"."TaxProfile"("id_tax_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."user_invoice"
  ADD CONSTRAINT "user_invoice_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "public"."user_invoice"
  ADD CONSTRAINT "user_invoice_id_invoice_fkey" FOREIGN KEY ("id_invoice") REFERENCES "public"."Invoice"("id_invoice") ON DELETE RESTRICT ON UPDATE CASCADE;
