import { IUser } from "../repository/interfaces/iModel";
import { IUserRepository } from "../repository/interfaces/iRepository";
import { UserDto } from "../shared/dto/userDTO";
import { IUserBusiness } from "./interfaces/iUserBusiness";

/**
 * Business logic for managing User.
 * This class implements the IUserBusiness interface, providing concrete
 * methods for CRUD operations.
 */
export class UserBusiness implements IUserBusiness {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Retrieves all users and maps them to UserDto.
   * @returns A promise that resolves to an array of UserDto objects.
   */
  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.findAll();
    return users.map(user => UserDto.fromModel(user));
  }

  /**
   * Finds a single user by ID and maps it to UserDto.
   * @param id The ID of the user to find.
   * @returns A promise that resolves to a UserDto object or null if not found.
   */
  async findById(id: bigint): Promise<UserDto | null> {
    const user = await this.userRepository.findById(id);
    return user ? UserDto.fromModel(user) : null;
  }

  /**
   * Creates a new user from a DTO.
   * @param data The data for the new user, as a DTO.
   * @returns A promise that resolves to the newly created UserDto.
   */
  async create(data: Omit<IUser, "id" | "createdAt" | "updatedAt" | "associations" | "taxProfile">): Promise<UserDto> {
    const createdUser = await this.userRepository.create(data);
    return UserDto.fromModel(createdUser);
  }

  /**
   * Deletes a user by ID.
   * @param id The ID of the user to delete.
   * @returns A promise that resolves when the deletion is complete.
   */
  async delete(id: bigint): Promise<void> {
    return this.userRepository.delete(id);
  }

  /**
   * Updates an existing user from a DTO.
   * @param id The ID of the user to update.
   * @param data The partial data to update the user with, as a DTO.
   * @returns A promise that resolves to the updated UserDto.
   */
  async update(id: bigint, data: Partial<Omit<IUser, "associations" | "taxProfile">>): Promise<UserDto> {
    const updatedUser = await this.userRepository.update(id, data);
    return UserDto.fromModel(updatedUser);
  }
}
