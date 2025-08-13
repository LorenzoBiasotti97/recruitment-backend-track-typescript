import { UserDto } from "../../shared/dto/userDTO";


/**
 * Business interface for the User entity.
 * Defines the methods for CRUD operations on the User model,
 * using DTO
 */
export interface IUserBusiness {
  /*return all UserDto as array*/
  findAll(): Promise<UserDto[]>;
  /*return UserDto from ID*/
  findById(id: bigint): Promise<UserDto | null>;
  /*create UserDto*/
  create(data: Omit<UserDto, 'id' | 'createdAt' | 'updatedAt' | 'role'>): Promise<UserDto>;
  /*update UserDto*/
  update(id: bigint, data: Partial<Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'>>): Promise<UserDto>;
}