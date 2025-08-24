import { Controller, Route, Tags, Get, Post, Put, Delete, Path, Body, SuccessResponse, Query, Response } from "tsoa";
import { UserInvoiceBusiness } from "../business/userInvoiceBusiness";
import { PrismaUserInvoiceRepository } from "../repository/prismaUserRepository";
import { UserInvoiceReadDto } from "../shared/dto/userInvoiceReadDTO";
import { UserInvoiceInsertDto } from "../shared/dto/userInvoiceInsertDTO";
import { UserInvoiceUpdateDto } from "../shared/dto/userInvoiceUpdateDTO";
import { UserInvoiceFilterDto } from "../shared/dto/userInvoiceFilterDTO";
import { PaginationDto } from "../shared/dto/paginationDTO";

const userInvoiceBusiness = new UserInvoiceBusiness(new PrismaUserInvoiceRepository());

@Route("user-invoices")
@Tags("User-Invoice Associations")
export class UserInvoiceController extends Controller {
  
  /**
   * @deprecated Use findAllFilter instead
   */
  @Get("/")
  @SuccessResponse("200", "List of user-invoice associations")
  @Response<Error>(500, "Internal Server Error")
  public async findAll() {
    const userInvoices = await userInvoiceBusiness.findAll();
    return userInvoices.map(userInvoice => ({
      ...userInvoice,
      id: userInvoice.id.toString(),
      userId: userInvoice.userId.toString(),
      invoiceId: userInvoice.invoiceId.toString(),
    }));
  }

  @Post("/userInvoice-filter")
  @SuccessResponse("200", "List of user-invoice associations")
  @Response<Error>(500, "Internal Server Error")
  public async findAllFilter(
    @Body() user?: UserInvoiceFilterDto,
    @Query() page: number = 1,
    @Query() pageSize: number = 10
  ): Promise<PaginationDto<UserInvoiceReadDto>> {
    try {
      const result = await userInvoiceBusiness.findAllFilter(user, page, pageSize);

      return result;
    } catch (e: any) {
      this.setStatus(500);
      return { data: [], pagination: { page, pageSize, total: 0, totalPages: 0 }, error: e.message };
    }
  }

  @Post("/")
  @SuccessResponse("201", "Created")
  @Response<Error>(500, "Internal Server Error")
  public async create(@Body() body: UserInvoiceInsertDto) {  
    const newUserInvoice = await userInvoiceBusiness.create(body);
    return newUserInvoice;
  }

  @Get("{id}")
  @SuccessResponse("200", "User-Invoice association")
  @Response<Error>(404, "User-Invoice association not found")
  @Response<Error>(500, "Internal Server Error")
  public async findById(@Path() id: string) {
    const userInvoice = await userInvoiceBusiness.findById(BigInt(id));
    if (!userInvoice) {
      this.setStatus(404);
      return { error: `UserInvoice with id ${id} not found` };
    }
    return {
      ...userInvoice,
      id: userInvoice.id.toString(),
      userId: userInvoice.userId.toString(),
      invoiceId: userInvoice.invoiceId.toString(),
    };
  }

  @Put("{id}")
  @SuccessResponse("200", "User-Invoice association updated")
  @Response<Error>(404, "User-Invoice association not found")
  @Response<Error>(500, "Internal Server Error")
  public async update(@Body() body: UserInvoiceUpdateDto) { 
    const updatedUserInvoice = await userInvoiceBusiness.update(body);
    return updatedUserInvoice;
  }

  @Delete("{id}")
  @SuccessResponse("204", "User-Invoice association deleted")
  @Response<Error>(500, "Internal Server Error")
  public async delete(@Path() id: string) {
    await userInvoiceBusiness.delete(BigInt(id));
    this.setStatus(204);
    return;
  }
}
