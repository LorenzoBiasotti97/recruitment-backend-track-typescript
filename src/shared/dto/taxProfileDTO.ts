
import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { ITaxProfile } from '../../repository/interfaces/iModel';

/**
 * Data Transfer Object for TaxProfile.
 * Excludes complex associations and uses class-transformer for mapping.
 */
@Exclude()
export class TaxProfileDto {
  @Expose()
  id: bigint;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  userId: bigint;

  @Expose()
  taxType: string;

  @Expose()
  isFlatRate: boolean;
  
  /**
   * Static method to create a DTO instance from a model object.
   * @param taxProfile The TaxProfile model object.
   * @returns A new TaxProfileDto instance.
   */
  static fromModel(taxProfile: ITaxProfile): TaxProfileDto {
    return plainToInstance(TaxProfileDto, taxProfile);
  }

  /**
   * Static method to create a model object from a DTO instance.
   * @param taxProfileDto The TaxProfile DTO object.
   * @returns A new ITaxProfile model instance.
   */
  static toModel(taxProfileDto: TaxProfileDto): ITaxProfile {
    return {
      id: taxProfileDto.id,
      createdAt: taxProfileDto.createdAt,
      updatedAt: taxProfileDto.updatedAt,
      userId: taxProfileDto.userId,
      taxType: taxProfileDto.taxType,
      isFlatRate: taxProfileDto.isFlatRate,
    } as ITaxProfile;
  }
}
