import { Controller, Route, Tags, Get, Post, Put, Delete, Path, Body, SuccessResponse, Query, Response } from "tsoa";
import { UserBusiness } from "../business/userBusiness";
import { PrismaUserRepository } from "../repository/prismaUserRepository";
import { UserReadDto } from "../shared/dto/userReadDTO";
import { UserInsertDto } from "../shared/dto/userInsertDTO";
import { UserUpdateDto } from "../shared/dto/userUpdateDTO";
import { UserFilterDto } from "../shared/dto/userFilterDTO";
import { PaginationDto } from "../shared/dto/paginationDTO";

const userBusiness = new UserBusiness(new PrismaUserRepository());

@Route("users")
@Tags("Users")
export class UserController extends Controller {

  /**
   * @deprecated Use findAllFilter instead
   */
  @Get("/")
  @SuccessResponse("200", "List of users")
  @Response("500", "Internal Server Error")
  public async findAll() {
    try {
      const users = await userBusiness.findAll();
      return users;
    } catch (e: any) {
      this.setStatus(500);
      return { error: e.message };
    }
  }

  @Post("/user-filter")
  @SuccessResponse("200", "List of users")
  @Response("500", "Internal Server Error")
  public async findAllFilter(
    @Body() user?: UserFilterDto,
    @Query() page: number = 1,
    @Query() pageSize: number = 10
  ): Promise<PaginationDto<UserReadDto>> {
    try {
      const result = await userBusiness.findAllFilter(user, page, pageSize);

      return result;
    } catch (e: any) {
      this.setStatus(500);
      return { data: [], pagination: { page, pageSize, total: 0, totalPages: 0 }, error: e.message };
    }
  }

  @SuccessResponse("201", "Created user")
  @Response("500", "Internal Server Error")
  @Post("/")
  public async create(@Body() body: UserInsertDto) {
    try {
      const newUser = await userBusiness.create(body);
      this.setStatus(201);
      return newUser;
    } catch (e: any) {
      this.setStatus(500);
      return { error: e.message };
    }
  }

  @Get("{id}")
  @SuccessResponse("200", "User")
  @Response("404", "User not found")
  @Response("500", "Internal Server Error")
  public async findById(@Path() id: string) {
    try {
      const user = await userBusiness.findById(BigInt(id));
      if (user) {
        return {
          ...user,
          id: user.id.toString(),
        };
      } else {
        this.setStatus(404);
        return { error: `User with id ${id} not found` };
      }
    } catch (e: any) {
      this.setStatus(500);
      return { error: e.message };
    }
  }

  @Put("{id}")
  @SuccessResponse("200", "User updated")
  @Response("500", "Internal Server Error")
  public async update(@Body() body: UserUpdateDto) {
    try {
      const updatedUser = await userBusiness.update(body);
      return updatedUser;
    } catch (e: any) {
      this.setStatus(500);
      return { error: e.message };
    }
  }

  @Delete("{id}")
  @SuccessResponse("204", "User deleted")
  @Response("500", "Internal Server Error")
  public async delete(@Path() id: string) {
    try {
      await userBusiness.delete(BigInt(id));
      this.setStatus(204);
      return;
    } catch (e: any) {
      this.setStatus(500);
      return { error: e.message };
    }
  }
}
