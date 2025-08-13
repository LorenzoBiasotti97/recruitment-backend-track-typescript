-- CreateTable
CREATE TABLE "public"."User" (
    "id_user" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "public"."TaxProfile" (
    "id_tax_profile" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "id_user" INTEGER NOT NULL,
    "tax_type" TEXT NOT NULL,
    "is_flat_rate" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TaxProfile_pkey" PRIMARY KEY ("id_tax_profile")
);

-- CreateTable
CREATE TABLE "public"."Invoice" (
    "id_invoice" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "invoice_number" BIGINT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "data" BYTEA,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "is_cancelled" BOOLEAN NOT NULL DEFAULT false,
    "id_tax_profile" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id_invoice")
);

-- CreateTable
CREATE TABLE "public"."user_invoice" (
    "id_user_invoice" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_invoice" INTEGER NOT NULL,
    "date_link" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_view" TIMESTAMP(3),
    "last_view" TIMESTAMP(3),

    CONSTRAINT "user_invoice_pkey" PRIMARY KEY ("id_user_invoice")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_mail_key" ON "public"."User"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "TaxProfile_id_user_key" ON "public"."TaxProfile"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoice_number_key" ON "public"."Invoice"("invoice_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_invoice_id_user_id_invoice_key" ON "public"."user_invoice"("id_user", "id_invoice");

-- AddForeignKey
ALTER TABLE "public"."TaxProfile" ADD CONSTRAINT "TaxProfile_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_id_tax_profile_fkey" FOREIGN KEY ("id_tax_profile") REFERENCES "public"."TaxProfile"("id_tax_profile") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_invoice" ADD CONSTRAINT "user_invoice_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_invoice" ADD CONSTRAINT "user_invoice_id_invoice_fkey" FOREIGN KEY ("id_invoice") REFERENCES "public"."Invoice"("id_invoice") ON DELETE RESTRICT ON UPDATE CASCADE;
