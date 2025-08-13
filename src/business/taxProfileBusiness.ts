import { ITaxProfile } from "../repository/interfaces/iModel";
import { ITaxProfileRepository } from "../repository/interfaces/iRepository";
import { TaxProfileDto } from "../shared/dto/taxProfileDTO";
import { ITaxProfileBusiness } from "./interfaces/iTaxProfileBusiness";

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
   * Retrieves all tax profiles from the repository and maps them to TaxProfileDto.
   * @returns A promise that resolves to an array of TaxProfileDto objects.
   */
  async findAll(): Promise<TaxProfileDto[]> {
    const taxProfiles = await this.taxProfileRepository.findAll();
    return taxProfiles.map(taxProfile => TaxProfileDto.fromModel(taxProfile));
  }

  /**
   * Finds a single tax profile by its ID and maps it to TaxProfileDto.
   * @param id The ID of the tax profile to find.
   * @returns A promise that resolves to a TaxProfileDto object or null if not found.
   */
  async findById(id: bigint): Promise<TaxProfileDto | null> {
    const taxProfile = await this.taxProfileRepository.findById(id);
    return taxProfile ? TaxProfileDto.fromModel(taxProfile) : null;
  }

  /**
   * Creates a new tax profile from a DTO.
   * @param data The data for the new tax profile, as a DTO.
   * @returns A promise that resolves to the newly created TaxProfileDto object.
   */
  async create(data: Omit<ITaxProfile, 'id' | 'createdAt' | 'updatedAt' | 'invoices' | 'user'>): Promise<TaxProfileDto> {
    const createdTaxProfile = await this.taxProfileRepository.create(data);
    return TaxProfileDto.fromModel(createdTaxProfile);
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
   * @param id The ID of the tax profile to update.
   * @param data The partial data to update the tax profile with, as a DTO.
   * @returns A promise that resolves to the updated TaxProfileDto object.
   */
  async update(id: bigint, data: Partial<Omit<ITaxProfile, 'invoices' | 'user'>>): Promise<TaxProfileDto> {
    const updatedTaxProfile = await this.taxProfileRepository.update(id, data);
    return TaxProfileDto.fromModel(updatedTaxProfile);
  }
}
