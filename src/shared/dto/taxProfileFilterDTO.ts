import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { ITaxProfile } from '../../repository/interfaces/iModel';
import { Example } from 'tsoa';

/**
 * Data Transfer Object for TaxProfile.
 * Excludes complex associations and uses class-transformer for mapping.
 * Used by tsoa for OpenAPI documentation generation.
 */
@Exclude()
export class TaxProfileFilterDto {
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
  public userId?: string;

  @Expose()
  @Example("standard")
  public taxType?: string;

  @Expose()
  @Example(true)
  public isFlatRate?: boolean;

  /**
   * Converts a TaxProfileFilterDto instance to a model object.
   * @param taxProfileDto The DTO object.
   * @returns An ITaxProfile model object.
   */
  static toModel(taxProfileDto: TaxProfileFilterDto): ITaxProfile {
    return {
      id: taxProfileDto.id ? BigInt(taxProfileDto.id) : undefined,
      createdAt: taxProfileDto.createdAt ? new Date(taxProfileDto.createdAt) : undefined,
      updatedAt: taxProfileDto.updatedAt ? new Date(taxProfileDto.updatedAt) : undefined,
      userId: taxProfileDto.userId ? BigInt(taxProfileDto.userId) : undefined,
      taxType: taxProfileDto.taxType,
      isFlatRate: typeof taxProfileDto.isFlatRate == 'boolean' ? taxProfileDto.isFlatRate : undefined,
    } as ITaxProfile;
  }
}
