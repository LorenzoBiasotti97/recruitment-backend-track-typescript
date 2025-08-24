import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { IUserInvoice } from '../../repository/interfaces/iModel';
import { Example } from 'tsoa';

/**
 * Data Transfer Object for UserInvoice.
 * Excludes complex associations and uses class-transformer for mapping.
 * Used by tsoa for OpenAPI documentation generation.
 */
@Exclude()
export class UserInvoiceUpdateDto {
  @Expose()
  @Example("100000000000000001")
  public id!: string;

  @Expose()
  @Example("200000000000000001")
  public userId!: string;

  @Expose()
  @Example("300000000000000001")
  public invoiceId!: string;

  @Expose()
  @Example("2025-08-01T10:00:00Z")
  public dateLinked!: Date;

  /**
   * Convert a DTO to a UserInvoice model.
   * @param userInvoiceDto The DTO to convert.
   * @returns A IUserInvoice model object.
   */
  static toModel(userInvoiceDto: UserInvoiceUpdateDto): IUserInvoice {
    return {
      id: BigInt(userInvoiceDto.id),
      userId: BigInt(userInvoiceDto.userId),
      invoiceId: BigInt(userInvoiceDto.invoiceId),
      dateLinked: userInvoiceDto.dateLinked,
    } as IUserInvoice;
  }
}
