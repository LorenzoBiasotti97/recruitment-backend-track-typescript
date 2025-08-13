import { Request, Response } from "express";
import { InvoiceBusiness } from "../business/invoiceBusiness";
import { PrismaInvoiceRepository } from "../repository/prismaUserRepository";

const invoiceService = new InvoiceBusiness(new PrismaInvoiceRepository());
//TODO: transform BigInt properties to string for JSON serialization
export class InvoiceController {

  /**
   * Handles GET requests to retrieve all invoices.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async findAll(req: Request, res: Response) {
    try {
      const invoices = await invoiceService.findAll();
      res.json(invoices);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles GET requests to retrieve a single invoice by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async findById(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      const invoice = await invoiceService.findById(id);
      if (invoice) {
        res.json(invoice);
      } else {
        res.status(404).json({ error: `Invoice with id ${id} not found` });
      }
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles POST requests to create a new invoice.
   * @param req The Express request object, with invoice data in the body.
   * @param res The Express response object.
   */
  static async create(req: Request, res: Response) {
    try {
      const newInvoice = await invoiceService.create(req.body);
      res.status(201).json(newInvoice);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles DELETE requests to delete an invoice by ID.
   * @param req The Express request object.
   * @param res The Express response object.
   */
  static async delete(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      await invoiceService.delete(id);
      res.status(204).send(); // No Content response on successful deletion
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }

  /**
   * Handles PUT requests to update an invoice by ID.
   * @param req The Express request object, with invoice data in the body.
   * @param res The Express response object.
   */
  static async update(req: Request, res: Response) {
    try {
      const id = BigInt(req.params.id);
      const updatedInvoice = await invoiceService.update(id, req.body);
      res.json(updatedInvoice);
    } catch (e: any) {
      res.status(500).json({ error: e.message });
    }
  }
}
