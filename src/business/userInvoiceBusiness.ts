import { IUserInvoice } from "../repository/interfaces/iModel";
import { IUserInvoiceRepository } from "../repository/interfaces/iRepository";
import { UserInvoiceDto } from "../shared/dto/userInvoiceDTO";
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
   * Retrieves all user invoices from the repository and maps them to UserInvoiceDto.
   * @returns A promise that resolves to an array of UserInvoiceDto objects.
   */
  async findAll(): Promise<UserInvoiceDto[]> {
    const userInvoices = await this.userInvoiceRepository.findAll();
    return userInvoices.map(userInvoice => UserInvoiceDto.fromModel(userInvoice));
  }

  /**
   * Finds a single user invoice by its ID and maps it to UserInvoiceDto.
   * @param id The ID of the user invoice to find.
   * @returns A promise that resolves to a UserInvoiceDto object or null if not found.
   */
  async findById(id: bigint): Promise<UserInvoiceDto | null> {
    const userInvoice = await this.userInvoiceRepository.findById(id);
    return userInvoice ? UserInvoiceDto.fromModel(userInvoice) : null;
  }

  /**
   * Creates a new user invoice from a DTO.
   * @param data The data for the new user invoice, as a DTO.
   * @returns A promise that resolves to the newly created UserInvoiceDto object.
   */
  async create(data: Omit<IUserInvoice, 'id' | 'dateLinked' | 'user' | 'invoice'>): Promise<UserInvoiceDto> {
    const createdUserInvoice = await this.userInvoiceRepository.create(data);
    return UserInvoiceDto.fromModel(createdUserInvoice);
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
   * @param id The ID of the user invoice to update.
   * @param data The partial data to update the user invoice with, as a DTO.
   * @returns A promise that resolves to the updated UserInvoiceDto object.
   */
  async update(id: bigint, data: Partial<Omit<IUserInvoice, 'user' | 'invoice'>>): Promise<UserInvoiceDto> {
    const updatedUserInvoice = await this.userInvoiceRepository.update(id, data);
    return UserInvoiceDto.fromModel(updatedUserInvoice);
  }
}
