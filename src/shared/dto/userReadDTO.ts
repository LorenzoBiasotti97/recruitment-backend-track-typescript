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
export class UserReadDto {
  @Expose()
  @Example("12345678901234567890")
  public id?: string;

  @Expose()
  @Example("Mario")
  public firstName!: string;

  @Expose()
  @Example("Rossi")
  public lastName!: string;

  @Expose()
  @Example("mario.rossi@example.com")
  public email!: string;

  @Expose()
  @Example("admin")
  public role!: string;

  @Expose()
  @Example("2024-01-01T12:00:00Z")
  public createdAt!: Date;

  @Expose()
  @Example("2024-01-02T12:00:00Z")
  public updatedAt!: Date;

  /**
   * Static method to create a DTO instance from a model object.
   * @param user The User model object.
   * @returns A new UserReadDto instance.
   */
  static fromModel(user: IUser): UserReadDto {
    return {
      id: user.id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      password: ' ', // TODO: manage encrypted password elsewhere
    } as UserReadDto;
  }

  /**
   * Static method to create a model object from a DTO instance.
   * Note: Does not include the password or ID for security/creation reasons.
   * @param userDto The User DTO object.
   * @returns A new IUser model instance.
   */
  static toModel(userDto: UserReadDto): IUser {
    return {
      id: BigInt(userDto.id),
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      email: userDto.email,
      role: userDto.role,
      createdAt: userDto.createdAt,
      updatedAt: userDto.updatedAt,
      password: ' ', // TODO: manage encrypted password elsewhere
    } as IUser;
  }
}
