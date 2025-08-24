import { IUserInvoiceRepository } from "../repository/interfaces/iRepository";
import { PaginationDto } from "../shared/dto/paginationDTO";
import { UserInvoiceFilterDto } from "../shared/dto/userInvoiceFilterDTO";
import { UserInvoiceInsertDto } from "../shared/dto/userInvoiceInsertDTO";
import { UserInvoiceReadDto } from "../shared/dto/userInvoiceReadDTO";
import { UserInvoiceUpdateDto } from "../shared/dto/userInvoiceUpdateDTO";
import { IUserInvoiceBusiness } from "./interfaces/iUserInvoiceBusiness";

/**
 * Business logic for managing UserInvoices.
 * This class implements the IUserInvoiceBusiness interface, providing concrete
 * methods for CRUD operations.
 */
export class UserInvoiceBusiness implements IUserInvoiceBusiness {

  /**
   * Constructs an instance of UserInvoiceBusiness.
   * @param userInvoiceRepository The repository for accessing UserInvoice data.
   */
  constructor(private readonly userInvoiceRepository: IUserInvoiceRepository) {}

  /**
   * Retrieves all user invoices from the repository and maps them to UserInvoiceReadDto.
   * @returns A promise that resolves to an array of UserInvoiceReadDto objects.
   * @deprecated Use findAllFilter instead
   */
  async findAll(): Promise<UserInvoiceReadDto[]> {
    const userInvoices = await this.userInvoiceRepository.findAll();
    return userInvoices.map(userInvoice => UserInvoiceReadDto.fromModel(userInvoice));
  }

  /**
   * Retrieves filtered users and maps them to UserReadDto.
   * @returns A promise that resolves to an array of UserReadDto objects.
   * @param filter Optional filter criteria for querying users.
   * @param page The page number for pagination.
   * @param pageSize The number of items per page for pagination.
   */
  async findAllFilter(filter?: Partial<UserInvoiceFilterDto>, page?: number, pageSize?: number): Promise<PaginationDto<UserInvoiceReadDto>> {
    const users = await this.userInvoiceRepository.findAllFilter(UserInvoiceFilterDto.toModel(filter), page, pageSize);
    // Map the filtered users to UserReadDto and return with pagination info
    return {
      data: users.data.map(user => UserInvoiceReadDto.fromModel(user)),
      pagination: {
        page: users.pagination.page,
        pageSize: users.pagination.pageSize,
        total: users.pagination.total,
        totalPages: users.pagination.totalPages
      } 
    } as PaginationDto<UserInvoiceReadDto>;
  }

  /**
   * Finds a single user invoice by its ID and maps it to UserInvoiceReadDto.
   * @param id The ID of the user invoice to find.
   * @returns A promise that resolves to a UserInvoiceReadDto object or null if not found.
   */
  async findById(id: bigint): Promise<UserInvoiceReadDto | null> {
    const userInvoice = await this.userInvoiceRepository.findById(id);
    return userInvoice ? UserInvoiceReadDto.fromModel(userInvoice) : null;
  }

  /**
   * Creates a new user invoice from a DTO.
   * @param data The data for the new user invoice, as a DTO.
   * @returns A promise that resolves to the newly created UserInvoiceReadDto object.
   */
  async create(data: UserInvoiceInsertDto): Promise<UserInvoiceReadDto> {
    const toCreate = UserInvoiceInsertDto.toModel(data );
    const createdUserInvoice = await this.userInvoiceRepository.create(toCreate);
    return UserInvoiceReadDto.fromModel(createdUserInvoice);
  }

  /**
   * Deletes a user invoice by its ID.
   * @param id The ID of the user invoice to delete.
   * @returns A promise that resolves when the deletion is complete.
   */
  async delete(id: bigint): Promise<void> {
    return this.userInvoiceRepository.delete(id);
  }

  /**
   * Updates an existing user invoice from a DTO.
   * @param data The partial data to update the user invoice with, as a DTO.
   * @returns A promise that resolves to the updated UserInvoiceReadDto object.
   */
  async update(data: UserInvoiceUpdateDto): Promise<UserInvoiceReadDto> {
    const toUpdate = UserInvoiceReadDto.toModel(data);
    const updatedUserInvoice = await this.userInvoiceRepository.update(toUpdate);
    return UserInvoiceReadDto.fromModel(updatedUserInvoice);
  }
}
