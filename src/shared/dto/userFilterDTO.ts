import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { IUser } from '../../repository/interfaces/iModel';
import { Example } from 'tsoa';

/**
 * Data Transfer Object for User.
 * Excludes sensitive fields like password and complex associations.
 * Uses class-transformer for mapping.
 * Used by tsoa for Swagger/OpenAPI documentation.
 */
@Exclude()
export class UserFilterDto {
  @Expose()
  @Example("23")
  public id?: string;

  @Expose()
  @Example("Lorenzo")
  public firstName?: string;

  @Expose()
  @Example("Biasotti")
  public lastName?: string;

  @Expose()
  @Example("lorenzo.biasotti@example.com")
  public email?: string;

  @Expose()
  @Example("admin")
  public role?: string;

  @Expose()
  @Example("2024-01-01T12:00:00Z")
  public createdAt?: Date;

  @Expose()
  @Example("2024-01-02T12:00:00Z")
  public updatedAt?: Date;

  /**
   * Static method to create a DTO instance from a model object.
   * @param user The User model object.
   * @returns A new UserFilterDto instance.
   */
  static fromModel(user: IUser): UserFilterDto {
    return {
      id: user.id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      password: ' ', // TODO: manage encrypted password elsewhere
    }  as UserFilterDto;
  }

  /**
   * Static method to create a model object from a DTO instance.
   * Note: Does not include the password or ID for security/creation reasons.
   * @param userDto The User DTO object.
   * @returns A new IUser model instance.
   */
  static toModel(userDto: UserFilterDto): Partial<IUser> {
    return {
      id: userDto.id ? BigInt(userDto.id) : undefined,
      // firstName: userDto.firstName ? String(userDto.firstName) : undefined,
      // lastName: userDto.lastName ? String(userDto.lastName) : undefined,
      // email: userDto.email ? String(userDto.email) : undefined,
      // role: userDto.role ? String(userDto.role) : undefined,
      // createdAt: userDto.createdAt ? new Date(userDto.createdAt) : undefined,
      // updatedAt: userDto.updatedAt ? new Date(userDto.updatedAt) : undefined,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      email: userDto.email,
      role: userDto.role,
      createdAt: userDto.createdAt ? new Date(userDto.createdAt) : undefined,
      updatedAt: userDto.updatedAt ? new Date(userDto.updatedAt) : undefined,
      password: ' ', // TODO: manage encrypted password elsewhere
    } as IUser;
  }
}
