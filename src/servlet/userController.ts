import { UserBusiness } from "../business/userBusiness";
import { PrismaUserRepository } from "../repository/prismaUserRepository";
import { Request, Response } from "express";

const userService = new UserBusiness(new PrismaUserRepository());
//TODO: transform BigInt properties to string for JSON serialization
export class UserController {

  /**
   * Handles GET requests to retrieve all users.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  //  static async getAll(req: Request, res: Response) {
  //    try {
  //      const users = await userService.findAll();
  //      res.json(users);
  //    } catch (e: any) {
  //      res.status(500).json({ error: e.message });
  //    }
  //  }
  static async getAll(req: Request, res: Response) {
  try {
    const users = await userService.findAll();

    // transform BigInt properties to string for JSON serialization
    const usersWithSerializedBigInt = users.map(user => ({
      ...user,
      id: user.id.toString(),
    }));

    res.json(usersWithSerializedBigInt);

  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
 }

  /**
   * Handles GET requests to retrieve a single user by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async findById(req: Request, res: Response) {
    try {
      const id: bigint = BigInt(req.params.id);
      const user = await userService.findById(id);
      if (user) {
        // transform BigInt properties to string for JSON serialization
        const usersWithSerializedBigInt = {
          ...user,
          id: user.id.toString(),
        };
        res.json(usersWithSerializedBigInt);
      } else {
        res.status(404).json({ error: `User with id ${id} not found` });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles POST requests to create a new user.
   * @param req The Express request object, with user data in the body.
   * @param res The Express response object.
   */
  static async create(req: Request, res: Response) {
    try {
      const newUser = await userService.create(req.body);
      const usersWithSerializedBigInt = {
          ...newUser,
          id: newUser.id.toString(),
        };
      res.status(201).json(usersWithSerializedBigInt);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles DELETE requests to delete a user by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async delete(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      await userService.delete(id);
      res.status(204).send(); // No Content on successful deletion
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles PUT requests to update a user by ID.
   * @param req The Express request object, with user data in the body.
   * @param res The Express response object.
   */
  static async update(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      const updatedUser = await userService.update(id, req.body);
      res.json(updatedUser);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
}
