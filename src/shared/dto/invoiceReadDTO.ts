import { Expose, Exclude, plainToInstance, ClassTransformer } from 'class-transformer';
import { Example } from 'tsoa';
import { IInvoice } from '../../repository/interfaces/iModel';

/**
 * Data Transfer Object for Invoice.
 * Excludes sensitive data and complex associations.
 * Uses class-transformer for serialization and tsoa for API documentation.
 */
@Exclude()
export class InvoiceReadDto {
  @Expose()
  @Example("100000000000000001")
  public id?: string;

  @Expose()
  @Example("2025-08-01T10:00:00Z")
  public createdAt?: Date;

  @Expose()
  @Example("2025-08-15T14:35:00Z")
  public updatedAt?: Date;

  @Expose()
  @Example("202500000000000001")
  public invoiceNumber!: string;

  @Expose()
  @Example(249.99)
  public amount!: number;

  @Expose()
  @Example("2025-08-30T00:00:00Z")
  public dueDate!: Date;

  @Expose()
  @Example("Web development services")
  public title!: string;

  @Expose()
  @Example("2025-08-01T00:00:00Z")
  public docDate!: Date;

  @Expose()
  @Example("invoice")
  public docType!: string;

  @Expose()
  public data?: Buffer;

  @Expose()
  @Example(false)
  public isPaid!: boolean;

  @Expose()
  @Example(false)
  public isCancelled!: boolean;

  @Expose()
  @Example("500000000000000001")
  public taxProfileId!: string;

  /**
   * Creates an InvoiceReadDto instance from an IInvoice model object.
   * @param invoice The source model.
   * @returns A mapped InvoiceReadDto instance.
   */
  static fromModel(invoice: IInvoice): InvoiceReadDto {
    return {
      id: invoice.id.toString(),
      createdAt: invoice.createdAt,
      updatedAt: invoice.updatedAt,
      invoiceNumber: invoice.invoiceNumber.toString(),
      amount: invoice.amount,
      dueDate: invoice.dueDate,
      title: invoice.title,
      docDate: invoice.docDate,
      docType: invoice.docType,
      data: invoice.data,
      isPaid: invoice.isPaid,
      isCancelled: invoice.isCancelled,
      taxProfileId: invoice.taxProfileId.toString(),
    } as InvoiceReadDto;
  }

  /**
   * Converts an InvoiceReadDto into a raw IInvoice model object.
   * @param invoiceDto The DTO instance.
   * @returns A plain model object.
   */
  static toModel(invoiceDto: InvoiceReadDto): IInvoice {
    return {
      id: BigInt(invoiceDto.id),
      createdAt: invoiceDto.createdAt,
      updatedAt: invoiceDto.updatedAt,
      invoiceNumber: BigInt(invoiceDto.invoiceNumber),
      amount: invoiceDto.amount,
      dueDate: invoiceDto.dueDate,
      title: invoiceDto.title,
      docDate: invoiceDto.docDate,
      docType: invoiceDto.docType,
      data: invoiceDto.data,
      isPaid: invoiceDto.isPaid,
      isCancelled: invoiceDto.isCancelled,
      taxProfileId: BigInt(invoiceDto.taxProfileId),
    } as IInvoice;
  }
}
