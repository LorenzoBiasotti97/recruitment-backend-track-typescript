
import { Expose, Exclude, plainToInstance } from 'class-transformer';
import { IUser } from '../../repository/interfaces/iModel';

/**
 * Data Transfer Object for User.
 * Excludes sensitive fields like password and complex associations.
 * Uses class-transformer for mapping.
 */
@Exclude()
export class UserDto {
  @Expose()
  id: bigint;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;
  
  @Expose()
  role: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  /**
   * Static method to create a DTO instance from a model object.
   * @param user The User model object.
   * @returns A new UserDto instance.
   */
  static fromModel(user: IUser): UserDto {
    return plainToInstance(UserDto, user);
  }
  
  /**
   * Static method to create a model object from a DTO instance.
   * @param userDto The User DTO object.
   * @returns A new IUser model instance.
   */
  static toModel(userDto: UserDto): IUser {
    return {
      id: userDto.id,
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      email: userDto.email,
      role: userDto.role,
      createdAt: userDto.createdAt,
      updatedAt: userDto.updatedAt,
      // TODO: manege encrypted password
      password: '', 
    } as IUser;
  }
}
