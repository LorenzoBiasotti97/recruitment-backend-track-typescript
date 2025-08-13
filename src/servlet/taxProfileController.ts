import { Request, Response } from "express";
import { TaxProfileBusiness } from "../business/taxProfileBusiness";
import { PrismaTaxProfileRepository } from "../repository/prismaUserRepository";

const taxProfileService = new TaxProfileBusiness(new PrismaTaxProfileRepository());
//TODO: transform BigInt properties to string for JSON serialization
export class TaxProfileController {
  
  /**
   * Handles GET requests to retrieve all tax profiles.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async findAll(req: Request, res: Response) {
    try {
      const taxProfiles = await taxProfileService.findAll();
      res.json(taxProfiles);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles GET requests to retrieve a single tax profile by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async findById(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      const taxProfile = await taxProfileService.findById(id);
      if (taxProfile) {
        res.json(taxProfile);
      } else {
        res.status(404).json({ error: `TaxProfile with id ${id} not found` });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles POST requests to create a new tax profile.
   * @param req The Express request object, with tax profile data in the body.
   * @param res The Express response object.
   */
  static async create(req: Request, res: Response) {
    try {
      const newTaxProfile = await taxProfileService.create(req.body);
      res.status(201).json(newTaxProfile);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles DELETE requests to delete a tax profile by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async delete(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      await taxProfileService.delete(id);
      res.status(204).send(); // No Content response on successful deletion
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles PUT requests to update a tax profile by ID.
   * @param req The Express request object, with tax profile data in the body.
   * @param res The Express response object.
   */
  static async update(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      const updatedTaxProfile = await taxProfileService.update(id, req.body);
      res.json(updatedTaxProfile);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
}
