import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { ITaxProfile } from '../../repository/interfaces/iModel';
import { Example } from 'tsoa';

/**
 * Data Transfer Object for TaxProfile.
 * Excludes complex associations and uses class-transformer for mapping.
 * Used by tsoa for OpenAPI documentation generation.
 */
@Exclude()
export class TaxProfileInsertDto {
  @Expose()
  @Example("200000000000000001")
  public userId!: string;

  @Expose()
  @Example("standard")
  public taxType!: string;

  @Expose()
  @Example(true)
  public isFlatRate!: boolean;

  /**
   * Converts a TaxProfileReadDto instance to a model object.
   * @param taxProfileDto The DTO object.
   * @returns An ITaxProfile model object.
   */
  static toModel(taxProfileDto: TaxProfileInsertDto): ITaxProfile {
    return {
      userId: BigInt(taxProfileDto.userId),
      taxType: taxProfileDto.taxType,
      isFlatRate: taxProfileDto.isFlatRate,
    } as ITaxProfile;
  }
}
