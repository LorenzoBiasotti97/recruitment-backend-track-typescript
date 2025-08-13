import { Request, Response } from "express";
import { UserInvoiceBusiness } from "../business/userInvoiceBusiness";
import { PrismaUserInvoiceRepository } from "../repository/prismaUserRepository";

const userInvoiceService = new UserInvoiceBusiness(new PrismaUserInvoiceRepository());
//TODO: transform BigInt properties to string for JSON serialization
export class UserInvoiceController {

  /**
   * Handles GET requests to retrieve all user-invoice associations.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async findAll(req: Request, res: Response) {
    try {
      const userInvoices = await userInvoiceService.findAll();
      res.json(userInvoices);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles GET requests to retrieve a single user-invoice association by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async findById(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      const userInvoice = await userInvoiceService.findById(id);
      if (userInvoice) {
        res.json(userInvoice);
      } else {
        res.status(404).json({ error: `UserInvoice with id ${id} not found` });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles POST requests to create a new user-invoice association.
   * @param req The Express request object, with association data in the body.
   * @param res The Express response object.
   */
  static async create(req: Request, res: Response) {
    try {
      const newUserInvoice = await userInvoiceService.create(req.body);
      res.status(201).json(newUserInvoice);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles DELETE requests to delete a user-invoice association by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async delete(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      await userInvoiceService.delete(id);
      res.status(204).send(); // No Content response on successful deletion
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles PUT requests to update a user-invoice association by ID.
   * @param req The Express request object, with association data in the body.
   * @param res The Express response object.
   */
  static async update(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      const updatedUserInvoice = await userInvoiceService.update(id, req.body);
      res.json(updatedUserInvoice);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
}
