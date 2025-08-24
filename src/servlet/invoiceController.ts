import { Controller, Route, Tags, Get, Post, Put, Delete, Path, Body, Response, SuccessResponse, Query } from "tsoa";
import { InvoiceBusiness } from "../business/invoiceBusiness";
import { PrismaInvoiceRepository } from "../repository/prismaUserRepository";
import { InvoiceReadDto } from "../shared/dto/invoiceReadDTO";
import { InvoiceInsertDto } from "../shared/dto/invoiceInsertDTO";
import { InvoiceUpdateDto } from "../shared/dto/invoiceUpdateDTO";
import { PaginationDto } from "../shared/dto/paginationDTO";
import { InvoiceReadFilterDto } from "../shared/dto/invoiceFilterDTO";

const invoiceBusiness = new InvoiceBusiness(new PrismaInvoiceRepository());

@Route("invoices")
@Tags("Invoices")
export class InvoiceController extends Controller {

  /**
   * @deprecated Use findAllFilter instead
   */
    
  @Get()
  @SuccessResponse("200", "List of invoices")
  @Response<Error>(500, "Internal Server Error")
  public async findAll(): Promise<Array<Omit<InvoiceReadDto, 'id' | 'invoiceNumber' | 'taxProfileId'> & { id: string; invoiceNumber: string; taxProfileId: string }>> {
    try {
      const invoices = await invoiceBusiness.findAll();
      return invoices.map(invoice => ({
        ...invoice,
        id: invoice.id.toString(),
        invoiceNumber: invoice.invoiceNumber.toString(),
        taxProfileId: invoice.taxProfileId.toString(),
      }));
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }

  @Post("/invoice-filter")
  @SuccessResponse("200", "List of invoices")
  @Response<Error>(500, "Internal Server Error")
  async findAllFilter(
    @Body() invoice?: Partial<InvoiceReadFilterDto>,
    @Query() page: number = 1,
    @Query() pageSize: number = 10
  ) : Promise<PaginationDto<InvoiceReadDto>> {
    try {
      const result = await invoiceBusiness.findAllFilter(invoice, page, pageSize);
      return result;
    } catch (e: any) {
      this.setStatus(500);
      return { data: [], pagination: { page, pageSize, total: 0, totalPages: 0 }, error: e.message };
    }
  } 


  @Post()
  @SuccessResponse("201", "Created invoice")
  @Response<Error>(500, "Internal Server Error")
  public async create(@Body() body: InvoiceInsertDto): Promise<InvoiceReadDto> {
    try {
      const newInvoice = await invoiceBusiness.create(body);
      this.setStatus(201);
      return newInvoice;
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }

  @Get("{id}")
  @SuccessResponse("200", "Invoice")
  @Response<Error>(404, "Invoice not found")
  @Response<Error>(500, "Internal Server Error")
  public async findById(@Path() id: string): Promise<Omit<InvoiceReadDto, 'id' | 'invoiceNumber' | 'taxProfileId'> & { id: string; invoiceNumber: string; taxProfileId: string }> {
    try {
      const bigIntId = BigInt(id);
      const invoice = await invoiceBusiness.findById(bigIntId);
      if (!invoice) {
        this.setStatus(404);
        throw new Error("Invoice not found");
      }
      return {
        ...invoice,
        id: invoice.id.toString(),
        invoiceNumber: invoice.invoiceNumber.toString(),
        taxProfileId: invoice.taxProfileId.toString(),
      };
    } catch (e: any) {
      if (this.getStatus() === 404) throw e;
      this.setStatus(500);
      throw e;
    }
  }

  @Put("{id}")
  @SuccessResponse("200", "Invoice updated")
  @Response<Error>(404, "Invoice not found")
  @Response<Error>(500, "Internal Server Error")
  public async update(@Body() body: InvoiceUpdateDto ): Promise <InvoiceReadDto> {
    try {
      const updatedInvoice = await invoiceBusiness.update(body);
      return updatedInvoice
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }

  @Delete("{id}")
  @SuccessResponse("204", "Invoice deleted")
  @Response<Error>(500, "Internal Server Error")
  public async delete(@Path() id: string): Promise<void> {
    try {
      const bigIntId = BigInt(id);
      await invoiceBusiness.delete(bigIntId);
      this.setStatus(204);
    } catch (e: any) {
      this.setStatus(500);
      throw e;
    }
  }
}
