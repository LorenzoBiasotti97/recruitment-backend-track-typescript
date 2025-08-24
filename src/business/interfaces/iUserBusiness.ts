import { UserReadDto } from "../../shared/dto/userReadDTO";
import { UserInsertDto } from "../../shared/dto/userInsertDTO";
import { UserUpdateDto } from "../../shared/dto/userUpdateDTO";
import { UserFilterDto } from "../../shared/dto/userFilterDTO";
import { PaginationDto } from "../../shared/dto/paginationDTO";


/**
 * Business interface for the User entity.
 * Defines the methods for CRUD operations on the User model,
 * using DTO
 */
export interface IUserBusiness {
  /*return all UserReadDto as array*/
  /**
 * @deprecated Use findAllFilter instead
 */
  findAll(): Promise<UserReadDto[]>;
  /*return paginated UserReadDto array with filter*/
  findAllFilter(filter?: Partial<UserFilterDto>, page?: number, pageSize?: number): Promise<PaginationDto<UserReadDto>>;
  /*return UserReadDto from ID*/
  findById(id: bigint): Promise<UserReadDto | null>;
  /*create UserInsertDto*/
  create(data: UserInsertDto): Promise<UserReadDto>;
  /*update UserUpdateDto*/
  update(data: UserUpdateDto): Promise<UserReadDto>;
}