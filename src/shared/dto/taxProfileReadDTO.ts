import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { ITaxProfile } from '../../repository/interfaces/iModel';
import { Example } from 'tsoa';

/**
 * Data Transfer Object for TaxProfile.
 * Excludes complex associations and uses class-transformer for mapping.
 * Used by tsoa for OpenAPI documentation generation.
 */
@Exclude()
export class TaxProfileReadDto {
  @Expose()
  @Example("500000000000000001")
  public id?: string;

  @Expose()
  @Example("2025-08-01T10:00:00Z")
  public createdAt?: Date;

  @Expose()
  @Example("2025-08-17T12:30:00Z")
  public updatedAt?: Date;

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
   * Converts a TaxProfile model object to a TaxProfileReadDto.
   * @param taxProfile The TaxProfile model object.
   * @returns A TaxProfileReadDto instance.
   */
  static fromModel(taxProfile: ITaxProfile): TaxProfileReadDto {
    return {
      id: taxProfile.id.toString(),
      createdAt: taxProfile.createdAt,
      updatedAt: taxProfile.updatedAt,
      userId: taxProfile.userId.toString(),
      taxType: taxProfile.taxType,
      isFlatRate: taxProfile.isFlatRate,
    } as TaxProfileReadDto;
  }

  /**
   * Converts a TaxProfileReadDto instance to a model object.
   * @param taxProfileDto The DTO object.
   * @returns An ITaxProfile model object.
   */
  static toModel(taxProfileDto: TaxProfileReadDto): ITaxProfile {
    return {
      id: BigInt(taxProfileDto.id),
      createdAt: taxProfileDto.createdAt,
      updatedAt: taxProfileDto.updatedAt,
      userId: BigInt(taxProfileDto.userId),
      taxType: taxProfileDto.taxType,
      isFlatRate: taxProfileDto.isFlatRate,
    } as ITaxProfile;
  }
}
