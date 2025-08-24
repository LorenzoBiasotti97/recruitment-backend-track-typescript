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
export class UserUpdateDto {
  
  @Expose()
  @Example("12345678901234567890")
  public id!: string;

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
  @Example("mario.rossi@example.com")
  public password!: string;

  @Expose()
  @Example("admin")
  public role!: string;

  /**
   * Static method to create a model object from a DTO instance.
   * Note: Does not include the password or ID for security/creation reasons.
   * @param userDto The User DTO object.
   * @returns A new IUser model instance.
   */
  static toModel(userDto: UserUpdateDto): IUser {
    return {
      id: BigInt(userDto.id), 
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      email: userDto.email,
      password: userDto.password,
      role: userDto.role,
    } as IUser;
  }
}
