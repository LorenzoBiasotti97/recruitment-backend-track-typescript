import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { IInvoice } from '../../repository/interfaces/iModel';

/**
 * Data Transfer Object for Invoice.
 * Excludes sensitive data and complex associations.
 * Uses class-transformer for mapping.
 */
@Exclude()
export class InvoiceDto {
  @Expose()
  id: bigint;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  invoiceNumber: bigint;

  @Expose()
  amount: number;

  @Expose()
  dueDate: Date;

  @Expose()
  title: string;

  @Expose()
  docDate: Date;

  @Expose()
  docType: string;

  @Expose()
  data?: Buffer;

  @Expose()
  isPaid: boolean;

  @Expose()
  isCancelled: boolean;

  @Expose()
  taxProfileId: bigint;
  
  /**
   * Static method to create a DTO instance from a model object.
   * @param invoice The Invoice model object.
   * @returns A new InvoiceDto instance.
   */
  static fromModel(invoice: IInvoice): InvoiceDto {
    return plainToInstance(InvoiceDto, invoice);
  }

  /**
   * Static method to create a model object from a DTO instance.
   * @param invoiceDto The Invoice DTO object.
   * @returns A new IInvoice model instance.
   */
  static toModel(invoiceDto: InvoiceDto): IInvoice {
    return {
      id: invoiceDto.id,
      createdAt: invoiceDto.createdAt,
      updatedAt: invoiceDto.updatedAt,
      invoiceNumber: invoiceDto.invoiceNumber,
      amount: invoiceDto.amount,
      dueDate: invoiceDto.dueDate,
      title: invoiceDto.title,
      docDate: invoiceDto.docDate,
      docType: invoiceDto.docType,
      data: invoiceDto.data,
      isPaid: invoiceDto.isPaid,
      isCancelled: invoiceDto.isCancelled,
      taxProfileId: invoiceDto.taxProfileId,
    } as IInvoice;
  }
}
