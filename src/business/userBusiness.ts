import { IUserRepository } from "../repository/interfaces/iRepository";
import { UserReadDto } from "../shared/dto/userReadDTO";
import { UserInsertDto } from "../shared/dto/userInsertDTO";
import { IUserBusiness } from "./interfaces/iUserBusiness";
import { UserUpdateDto } from "../shared/dto/userUpdateDTO";
import { UserFilterDto } from "../shared/dto/userFilterDTO";
import { PaginationDto } from "../shared/dto/paginationDTO";

/**
 * Business logic for managing User.
 * This class implements the IUserBusiness interface, providing concrete
 * methods for CRUD operations.
 */
export class UserBusiness implements IUserBusiness {
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * Retrieves all users and maps them to UserReadDto.
   * @returns A promise that resolves to an array of UserReadDto objects.
   * @deprecated Use findAllFilter instead
   */
  async findAll(): Promise<UserReadDto[]> {
    const users = await this.userRepository.findAll();
    return users.map(user => UserReadDto.fromModel(user));
  }
  /**
   * Retrieves filtered users and maps them to UserReadDto.
   * @returns A promise that resolves to an array of UserReadDto objects.
   * @param filter Optional filter criteria for querying users.
   * @param page The page number for pagination.
   * @param pageSize The number of items per page for pagination.
   */
  async findAllFilter(filter?: Partial<UserFilterDto>, page?: number, pageSize?: number): Promise<PaginationDto<UserReadDto>> {
    const users = await this.userRepository.findAllFilter(UserFilterDto.toModel(filter), page, pageSize);
    // Map the filtered users to UserReadDto and return with pagination info
    return {
      data: users.data.map(user => UserReadDto.fromModel(user)),
      pagination: {
        page: users.pagination.page,
        pageSize: users.pagination.pageSize,
        total: users.pagination.total,
        totalPages: users.pagination.totalPages
      } 
    } as PaginationDto<UserReadDto>;
  }

  /**
   * Finds a single user by ID and maps it to UserReadDto.
   * @param id The ID of the user to find.
   * @returns A promise that resolves to a UserReadDto object or null if not found.
   */
  async findById(id: bigint): Promise<UserReadDto | null> {
    const user = await this.userRepository.findById(id);
    return user ? UserReadDto.fromModel(user) : null;
  }

  /**
   * Creates a new user from a DTO.
   * @param data The data for the new user, as a DTO.
   * @returns A promise that resolves to the newly created UserReadDto.
   */
  async create(data: UserInsertDto): Promise<UserReadDto> {
    const createdUser = await this.userRepository.create(UserInsertDto.toModel(data));
    return UserReadDto.fromModel(createdUser);
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
   * @param data The partial data to update the user with, as a DTO.
   * @returns A promise that resolves to the updated UserReadDto.
   */
  async update(data: UserUpdateDto): Promise<UserReadDto> {
    const updatedUser = await this.userRepository.update(UserUpdateDto.toModel(data));
    return UserReadDto.fromModel(updatedUser);
  }
}
