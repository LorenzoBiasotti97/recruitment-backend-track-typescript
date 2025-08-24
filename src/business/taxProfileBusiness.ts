import { ITaxProfileRepository } from "../repository/interfaces/iRepository";
import { TaxProfileReadDto } from "../shared/dto/taxProfileReadDTO";
import { TaxProfileInsertDto } from "../shared/dto/taxProfileInsertDTO";
import { ITaxProfileBusiness } from "./interfaces/iTaxProfileBusiness";
import { TaxProfileUpdateDto } from "../shared/dto/taxProfileUpdateDTO";
import { TaxProfileFilterDto } from "../shared/dto/taxProfileFilterDTO";
import { PaginationDto } from "../shared/dto/paginationDTO";

/**
 * Business logic for managing TaxProfiles.
 * This class implements the ITaxProfileBusiness interface, providing concrete
 * methods for CRUD operations.
 */
export class TaxProfileBusiness implements ITaxProfileBusiness {

  /**
   * Constructs an instance of TaxProfileBusiness.
   * @param taxProfileRepository The repository for accessing TaxProfile data.
   */
  constructor(private readonly taxProfileRepository: ITaxProfileRepository) {}

  /**
   * Retrieves all tax profiles from the repository and maps them to TaxProfileReadDto.
   * @returns A promise that resolves to an array of TaxProfileReadDto objects.
   * @deprecated Use findAllFilter with appropriate parameters instead.
   */
  async findAll(): Promise<TaxProfileReadDto[]> {
    const taxProfiles = await this.taxProfileRepository.findAll();
    return taxProfiles.map(taxProfile => TaxProfileReadDto.fromModel(taxProfile));
  }

  /**
   * Finds a single tax profile by its ID and maps it to TaxProfileReadDto.
   * @param id The ID of the tax profile to find.
   * @returns A promise that resolves to a TaxProfileReadDto object or null if not found.
   */
  async findById(id: bigint): Promise<TaxProfileReadDto | null> {
    const taxProfile = await this.taxProfileRepository.findById(id);
    return taxProfile ? TaxProfileReadDto.fromModel(taxProfile) : null;
  }

  /**
   * Retrieves all tax profiles from the repository and maps them to TaxProfileReadDto.
   * @param filter Optional filter criteria for querying tax profiles.
   * @param page The page number for pagination.
   * @param pageSize The number of items per page for pagination.
   * @returns A promise that resolves to an array of TaxProfileReadDto objects.
   **/
  async findAllFilter(filter?: Partial<TaxProfileFilterDto>, page = 1, pageSize = 10): Promise<PaginationDto<TaxProfileReadDto>> {
      const users = await this.taxProfileRepository.findAllFilter(TaxProfileFilterDto.toModel(filter), page, pageSize);
      return {
            data: users.data.map(user => TaxProfileReadDto.fromModel(user)),
            pagination: {
              page: users.pagination.page,
              pageSize: users.pagination.pageSize,
              total: users.pagination.total,
              totalPages: users.pagination.totalPages
            } 
          } as PaginationDto<TaxProfileReadDto>;
    }

  /**
   * Creates a new tax profile from a DTO.
   * @param data The data for the new tax profile, as a DTO.
   * @returns A promise that resolves to the newly created TaxProfileReadDto object.
   */
  async create(data: TaxProfileInsertDto): Promise<TaxProfileReadDto> {
    const createdTaxProfile = await this.taxProfileRepository.create(TaxProfileInsertDto.toModel(data));
    return TaxProfileReadDto.fromModel(createdTaxProfile);
  }

  /**
   * Deletes a tax profile by its ID.
   * @param id The ID of the tax profile to delete.
   * @returns A promise that resolves when the deletion is complete.
   */
  async delete(id: bigint): Promise<void> {
    return this.taxProfileRepository.delete(id);
  }

  /**
   * Updates an existing tax profile from a DTO.
   * @param data The partial data to update the tax profile with, as a DTO.
   * @returns A promise that resolves to the updated TaxProfileReadDto object.
   */
  async update(data: TaxProfileUpdateDto): Promise<TaxProfileReadDto> {
    const updatedTaxProfile = await this.taxProfileRepository.update(TaxProfileUpdateDto.toModel(data));
    return TaxProfileReadDto.fromModel(updatedTaxProfile);
  }
}
