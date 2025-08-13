import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { IUserInvoice } from '../../repository/interfaces/iModel';

/**
 * Data Transfer Object for UserInvoice.
 * Excludes complex associations and uses class-transformer for mapping.
 */
@Exclude()
export class UserInvoiceDto {
  @Expose()
  id: bigint;

  @Expose()
  userId: bigint;

  @Expose()
  invoiceId: bigint;

  @Expose()
  dateLinked: Date;

  @Expose()
  firstView?: Date | null;

  @Expose()
  lastView?: Date | null;

  /**
   * Static method to create a DTO instance from a model object.
   * @param userInvoice The UserInvoice model object.
   * @returns A new UserInvoiceDto instance.
   */
  static fromModel(userInvoice: IUserInvoice): UserInvoiceDto {
    return plainToInstance(UserInvoiceDto, userInvoice);
  }
  
  /**
   * Static method to create a model object from a DTO instance.
   * @param userInvoiceDto The UserInvoice DTO object.
   * @returns A new IUserInvoice model instance.
   */
  static toModel(userInvoiceDto: UserInvoiceDto): IUserInvoice {
    return {
      id: userInvoiceDto.id,
      userId: userInvoiceDto.userId,
      invoiceId: userInvoiceDto.invoiceId,
      dateLinked: userInvoiceDto.dateLinked,
      firstView: userInvoiceDto.firstView,
      lastView: userInvoiceDto.lastView,
    } as IUserInvoice;
  }
}
