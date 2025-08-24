import { Controller, Route, Tags, Get, Post, Put, Delete, Path, Body, Response, SuccessResponse, Query } from "tsoa";
import { TaxProfileBusiness } from "../business/taxProfileBusiness";
import { PrismaTaxProfileRepository } from "../repository/prismaUserRepository";
import { TaxProfileReadDto } from "../shared/dto/taxProfileReadDTO";
import { TaxProfileInsertDto } from "../shared/dto/taxProfileInsertDTO";
import { TaxProfileUpdateDto } from "../shared/dto/taxProfileUpdateDTO";
import { PaginationDto } from "../shared/dto/paginationDTO";
import { TaxProfileFilterDto } from "../shared/dto/taxProfileFilterDTO";

const taxProfileBusiness = new TaxProfileBusiness(new PrismaTaxProfileRepository());

@Route("tax-profiles")
@Tags("Tax Profiles")
export class TaxProfileController extends Controller {

  /**
   * @deprecated Use findAllFilter instead
   */
  @Get()
  @SuccessResponse("200", "List of tax profiles")
  @Response<Error>(500, "Internal Server Error")
  public async findAll(): Promise<Array<Omit<TaxProfileReadDto, 'id' | 'userId'> & { id: string; userId: string }>> {
    try {
      const taxProfiles = await taxProfileBusiness.findAll();
      return taxProfiles.map(profile => ({
        ...profile,
        id: profile.id.toString(),
        userId: profile.userId.toString(),
      }));
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }

  @Post()
  @SuccessResponse("201", "Created tax profile")
  @Response<Error>(500, "Internal Server Error")
  public async create(@Body() body: TaxProfileInsertDto): Promise<TaxProfileReadDto> {
    try {
      const newTaxProfile = await taxProfileBusiness.create(body);
      this.setStatus(201);
      return newTaxProfile;
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }

  @Post("/taxprofile-filter")
  @SuccessResponse("200", "List of tax profiles")
  @Response<Error>(500, "Internal Server Error")
  async findAllFilter(
    @Body() invoice?: Partial<TaxProfileFilterDto>,
    @Query() page: number = 1,
    @Query() pageSize: number = 10
  ) : Promise<PaginationDto<TaxProfileReadDto>> {
    try {
      const result = await taxProfileBusiness.findAllFilter(invoice, page, pageSize);
      return result;
    } catch (e: any) {
      this.setStatus(500);
      return { data: [], pagination: { page, pageSize, total: 0, totalPages: 0 }, error: e.message };
    }
  } 

  @Get("{id}")
  @SuccessResponse("200", "Tax profile")
  @Response<Error>(404, "Tax profile not found")
  @Response<Error>(500, "Internal Server Error")
  public async findById(@Path() id: string): Promise<Omit<TaxProfileReadDto, 'id' | 'userId'> & { id: string; userId: string }> {
    try {
      const bigIntId = BigInt(id);
      const taxProfile = await taxProfileBusiness.findById(bigIntId);
      if (!taxProfile) {
        this.setStatus(404);
        throw new Error("Tax profile not found");
      }
      return {
        ...taxProfile,
        id: taxProfile.id.toString(),
        userId: taxProfile.userId.toString(),
      };
    } catch (e: any) {
      if (this.getStatus() === 404) throw e;
      this.setStatus(500);
      throw e;
    }
  }

  @Put("{id}")
  @SuccessResponse("200", "Tax profile updated")
  @Response<Error>(404, "Tax profile not found")
  @Response<Error>(500, "Internal Server Error")
  public async update(@Body() body: TaxProfileUpdateDto): Promise <TaxProfileReadDto> {
    try {
      const updatedTaxProfile = await taxProfileBusiness.update(body);
      return updatedTaxProfile
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }

  @Delete("{id}")
  @SuccessResponse("204", "Tax profile deleted")
  @Response<Error>(500, "Internal Server Error")
  public async delete(@Path() id: string): Promise<void> {
    try {
      const bigIntId = BigInt(id);
      await taxProfileBusiness.delete(bigIntId);
      this.setStatus(204);
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }
}
