import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { IUserInvoice } from '../../repository/interfaces/iModel';
import { Example } from 'tsoa';

/**
 * Data Transfer Object for UserInvoice.
 * Excludes complex associations and uses class-transformer for mapping.
 * Used by tsoa for OpenAPI documentation generation.
 */
@Exclude()
export class UserInvoiceFilterDto {
  @Expose()
  @Example("100000000000000001")
  public id?: string;

  @Expose()
  @Example("200000000000000001")
  public userId?: string;

  @Expose()
  @Example("300000000000000001")
  public invoiceId?: string;

  @Expose()
  @Example("2025-08-01T10:00:00Z")
  public dateLinked?: Date;

  @Expose()
  @Example("2025-08-10T14:00:00Z")
  public firstView?: Date | null;

  @Expose()
  @Example("2025-08-15T16:00:00Z")
  public lastView?: Date | null;

  /**
   * Convert a DTO to a UserInvoice model.
   * @param userInvoiceDto The DTO to convert.
   * @returns A IUserInvoice model object.
   */
  static toModel(userInvoiceDto: UserInvoiceFilterDto): IUserInvoice {
    return {
      id: userInvoiceDto.id ? BigInt(userInvoiceDto.id) : undefined,
      userId: userInvoiceDto.userId ? BigInt(userInvoiceDto.userId) : undefined,
      invoiceId: userInvoiceDto.invoiceId ? BigInt(userInvoiceDto.invoiceId) : undefined,
      dateLinked: userInvoiceDto.dateLinked ? new Date(userInvoiceDto.dateLinked) : undefined,
      firstView: userInvoiceDto.firstView ? new Date(userInvoiceDto.firstView) : undefined,
      lastView: userInvoiceDto.lastView ? new Date(userInvoiceDto.lastView) : undefined,
    } as IUserInvoice;
  }
}
