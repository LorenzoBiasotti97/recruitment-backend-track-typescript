import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { IUserInvoice } from '../../repository/interfaces/iModel';
import { Example } from 'tsoa';

/**
 * Data Transfer Object for UserInvoice.
 * Excludes complex associations and uses class-transformer for mapping.
 * Used by tsoa for OpenAPI documentation generation.
 */
@Exclude()
export class UserInvoiceReadDto {
  @Expose()
  @Example("100000000000000001")
  public id?: string;

  @Expose()
  @Example("200000000000000001")
  public userId!: string;

  @Expose()
  @Example("300000000000000001")
  public invoiceId!: string;

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
   * Convert a UserInvoice model to a DTO.
   * @param userInvoice The UserInvoice model object.
   * @returns A UserInvoiceReadDto instance.
   */
  static fromModel(userInvoice: IUserInvoice): UserInvoiceReadDto {
    return {
      id: userInvoice.id.toString(),
      userId: userInvoice.userId.toString(),
      invoiceId: userInvoice.invoiceId.toString(),
      dateLinked: userInvoice.dateLinked,
      firstView: userInvoice.firstView,
      lastView: userInvoice.lastView,
    } as UserInvoiceReadDto;
  }

  /**
   * Convert a DTO to a UserInvoice model.
   * @param userInvoiceDto The DTO to convert.
   * @returns A IUserInvoice model object.
   */
  static toModel(userInvoiceDto: UserInvoiceReadDto): IUserInvoice {
    return {
      id: BigInt(userInvoiceDto.id),
      userId: BigInt(userInvoiceDto.userId),
      invoiceId: BigInt(userInvoiceDto.invoiceId),
      dateLinked: userInvoiceDto.dateLinked,
      firstView: userInvoiceDto.firstView,
      lastView: userInvoiceDto.lastView,
    } as IUserInvoice;
  }
}
