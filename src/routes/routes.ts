/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserInvoiceController } from './../servlet/userInvoiceController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../servlet/userController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TaxProfileController } from './../servlet/taxProfileController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { InvoiceController } from './../servlet/invoiceController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Error": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "message": {"dataType":"string","required":true},
            "stack": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInvoiceReadDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "userId": {"dataType":"string","required":true},
            "invoiceId": {"dataType":"string","required":true},
            "dateLinked": {"dataType":"datetime"},
            "firstView": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}]},
            "lastView": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginationDto_UserInvoiceReadDto_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"UserInvoiceReadDto"},"required":true},
            "pagination": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"total":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"page":{"dataType":"double","required":true}},"required":true},
            "error": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInvoiceFilterDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "userId": {"dataType":"string"},
            "invoiceId": {"dataType":"string"},
            "dateLinked": {"dataType":"datetime"},
            "firstView": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}]},
            "lastView": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInvoiceInsertDto": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
            "invoiceId": {"dataType":"string","required":true},
            "dateLinked": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInvoiceUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "userId": {"dataType":"string","required":true},
            "invoiceId": {"dataType":"string","required":true},
            "dateLinked": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserReadDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "firstName": {"dataType":"string","required":true},
            "lastName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "role": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginationDto_UserReadDto_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"UserReadDto"},"required":true},
            "pagination": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"total":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"page":{"dataType":"double","required":true}},"required":true},
            "error": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFilterDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "firstName": {"dataType":"string"},
            "lastName": {"dataType":"string"},
            "email": {"dataType":"string"},
            "role": {"dataType":"string"},
            "createdAt": {"dataType":"datetime"},
            "updatedAt": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserInsertDto": {
        "dataType": "refObject",
        "properties": {
            "firstName": {"dataType":"string","required":true},
            "lastName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "role": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "firstName": {"dataType":"string","required":true},
            "lastName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "role": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_TaxProfileReadDto.Exclude_keyofTaxProfileReadDto.id-or-userId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"createdAt":{"dataType":"datetime"},"updatedAt":{"dataType":"datetime"},"taxType":{"dataType":"string","required":true},"isFlatRate":{"dataType":"boolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_TaxProfileReadDto.id-or-userId_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_TaxProfileReadDto.Exclude_keyofTaxProfileReadDto.id-or-userId__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TaxProfileReadDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"datetime"},
            "updatedAt": {"dataType":"datetime"},
            "userId": {"dataType":"string","required":true},
            "taxType": {"dataType":"string","required":true},
            "isFlatRate": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TaxProfileInsertDto": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"string","required":true},
            "taxType": {"dataType":"string","required":true},
            "isFlatRate": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginationDto_TaxProfileReadDto_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"TaxProfileReadDto"},"required":true},
            "pagination": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"total":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"page":{"dataType":"double","required":true}},"required":true},
            "error": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_TaxProfileFilterDto_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"createdAt":{"dataType":"datetime"},"updatedAt":{"dataType":"datetime"},"userId":{"dataType":"string"},"taxType":{"dataType":"string"},"isFlatRate":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TaxProfileUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "userId": {"dataType":"string","required":true},
            "taxType": {"dataType":"string","required":true},
            "isFlatRate": {"dataType":"boolean","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_InvoiceReadDto.Exclude_keyofInvoiceReadDto.id-or-invoiceNumber-or-taxProfileId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"createdAt":{"dataType":"datetime"},"updatedAt":{"dataType":"datetime"},"amount":{"dataType":"double","required":true},"dueDate":{"dataType":"datetime","required":true},"title":{"dataType":"string","required":true},"docDate":{"dataType":"datetime","required":true},"docType":{"dataType":"string","required":true},"data":{"dataType":"buffer"},"isPaid":{"dataType":"boolean","required":true},"isCancelled":{"dataType":"boolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_InvoiceReadDto.id-or-invoiceNumber-or-taxProfileId_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_InvoiceReadDto.Exclude_keyofInvoiceReadDto.id-or-invoiceNumber-or-taxProfileId__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InvoiceReadDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"datetime"},
            "updatedAt": {"dataType":"datetime"},
            "invoiceNumber": {"dataType":"string","required":true},
            "amount": {"dataType":"double","required":true},
            "dueDate": {"dataType":"datetime","required":true},
            "title": {"dataType":"string","required":true},
            "docDate": {"dataType":"datetime","required":true},
            "docType": {"dataType":"string","required":true},
            "data": {"dataType":"buffer"},
            "isPaid": {"dataType":"boolean","required":true},
            "isCancelled": {"dataType":"boolean","required":true},
            "taxProfileId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginationDto_InvoiceReadDto_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"InvoiceReadDto"},"required":true},
            "pagination": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"total":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"page":{"dataType":"double","required":true}},"required":true},
            "error": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_InvoiceReadFilterDto_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string"},"createdAt":{"dataType":"datetime"},"updatedAt":{"dataType":"datetime"},"invoiceNumber":{"dataType":"string"},"amount":{"dataType":"double"},"dueDate":{"dataType":"datetime"},"title":{"dataType":"string"},"docDate":{"dataType":"datetime"},"docType":{"dataType":"string"},"data":{"dataType":"buffer"},"isPaid":{"dataType":"boolean"},"isCancelled":{"dataType":"boolean"},"taxProfileId":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InvoiceInsertDto": {
        "dataType": "refObject",
        "properties": {
            "invoiceNumber": {"dataType":"string","required":true},
            "amount": {"dataType":"double","required":true},
            "dueDate": {"dataType":"datetime","required":true},
            "title": {"dataType":"string","required":true},
            "docDate": {"dataType":"datetime","required":true},
            "docType": {"dataType":"string","required":true},
            "data": {"dataType":"buffer"},
            "isPaid": {"dataType":"boolean","required":true},
            "isCancelled": {"dataType":"boolean","required":true},
            "taxProfileId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "InvoiceUpdateDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "invoiceNumber": {"dataType":"string","required":true},
            "amount": {"dataType":"double","required":true},
            "dueDate": {"dataType":"datetime","required":true},
            "title": {"dataType":"string","required":true},
            "docDate": {"dataType":"datetime","required":true},
            "docType": {"dataType":"string","required":true},
            "data": {"dataType":"buffer"},
            "isPaid": {"dataType":"boolean","required":true},
            "isCancelled": {"dataType":"boolean","required":true},
            "taxProfileId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsUserInvoiceController_findAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/user-invoices',
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController.prototype.findAll)),

            async function UserInvoiceController_findAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserInvoiceController_findAll, request, response });

                const controller = new UserInvoiceController();

              await templateService.apiHandler({
                methodName: 'findAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserInvoiceController_findAllFilter: Record<string, TsoaRoute.ParameterSchema> = {
                user: {"in":"body","name":"user","ref":"UserInvoiceFilterDto"},
                page: {"default":1,"in":"query","name":"page","dataType":"double"},
                pageSize: {"default":10,"in":"query","name":"pageSize","dataType":"double"},
        };
        app.post('/user-invoices/userInvoice-filter',
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController.prototype.findAllFilter)),

            async function UserInvoiceController_findAllFilter(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserInvoiceController_findAllFilter, request, response });

                const controller = new UserInvoiceController();

              await templateService.apiHandler({
                methodName: 'findAllFilter',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserInvoiceController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"UserInvoiceInsertDto"},
        };
        app.post('/user-invoices',
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController.prototype.create)),

            async function UserInvoiceController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserInvoiceController_create, request, response });

                const controller = new UserInvoiceController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserInvoiceController_findById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/user-invoices/:id',
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController.prototype.findById)),

            async function UserInvoiceController_findById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserInvoiceController_findById, request, response });

                const controller = new UserInvoiceController();

              await templateService.apiHandler({
                methodName: 'findById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserInvoiceController_update: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"UserInvoiceUpdateDto"},
        };
        app.put('/user-invoices/:id',
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController.prototype.update)),

            async function UserInvoiceController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserInvoiceController_update, request, response });

                const controller = new UserInvoiceController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserInvoiceController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/user-invoices/:id',
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(UserInvoiceController.prototype.delete)),

            async function UserInvoiceController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserInvoiceController_delete, request, response });

                const controller = new UserInvoiceController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 204,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_findAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.findAll)),

            async function UserController_findAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_findAll, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'findAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_findAllFilter: Record<string, TsoaRoute.ParameterSchema> = {
                user: {"in":"body","name":"user","ref":"UserFilterDto"},
                page: {"default":1,"in":"query","name":"page","dataType":"double"},
                pageSize: {"default":10,"in":"query","name":"pageSize","dataType":"double"},
        };
        app.post('/users/user-filter',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.findAllFilter)),

            async function UserController_findAllFilter(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_findAllFilter, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'findAllFilter',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"UserInsertDto"},
        };
        app.post('/users',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.create)),

            async function UserController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_create, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_findById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.findById)),

            async function UserController_findById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_findById, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'findById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_update: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"UserUpdateDto"},
        };
        app.put('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.update)),

            async function UserController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_update, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/users/:id',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.delete)),

            async function UserController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_delete, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 204,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaxProfileController_findAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/tax-profiles',
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController)),
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController.prototype.findAll)),

            async function TaxProfileController_findAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaxProfileController_findAll, request, response });

                const controller = new TaxProfileController();

              await templateService.apiHandler({
                methodName: 'findAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaxProfileController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"TaxProfileInsertDto"},
        };
        app.post('/tax-profiles',
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController)),
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController.prototype.create)),

            async function TaxProfileController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaxProfileController_create, request, response });

                const controller = new TaxProfileController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaxProfileController_findAllFilter: Record<string, TsoaRoute.ParameterSchema> = {
                invoice: {"in":"body","name":"invoice","ref":"Partial_TaxProfileFilterDto_"},
                page: {"default":1,"in":"query","name":"page","dataType":"double"},
                pageSize: {"default":10,"in":"query","name":"pageSize","dataType":"double"},
        };
        app.post('/tax-profiles/taxprofile-filter',
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController)),
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController.prototype.findAllFilter)),

            async function TaxProfileController_findAllFilter(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaxProfileController_findAllFilter, request, response });

                const controller = new TaxProfileController();

              await templateService.apiHandler({
                methodName: 'findAllFilter',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaxProfileController_findById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/tax-profiles/:id',
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController)),
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController.prototype.findById)),

            async function TaxProfileController_findById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaxProfileController_findById, request, response });

                const controller = new TaxProfileController();

              await templateService.apiHandler({
                methodName: 'findById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaxProfileController_update: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"TaxProfileUpdateDto"},
        };
        app.put('/tax-profiles/:id',
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController)),
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController.prototype.update)),

            async function TaxProfileController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaxProfileController_update, request, response });

                const controller = new TaxProfileController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTaxProfileController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/tax-profiles/:id',
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController)),
            ...(fetchMiddlewares<RequestHandler>(TaxProfileController.prototype.delete)),

            async function TaxProfileController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTaxProfileController_delete, request, response });

                const controller = new TaxProfileController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 204,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInvoiceController_findAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/invoices',
            ...(fetchMiddlewares<RequestHandler>(InvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(InvoiceController.prototype.findAll)),

            async function InvoiceController_findAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInvoiceController_findAll, request, response });

                const controller = new InvoiceController();

              await templateService.apiHandler({
                methodName: 'findAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInvoiceController_findAllFilter: Record<string, TsoaRoute.ParameterSchema> = {
                invoice: {"in":"body","name":"invoice","ref":"Partial_InvoiceReadFilterDto_"},
                page: {"default":1,"in":"query","name":"page","dataType":"double"},
                pageSize: {"default":10,"in":"query","name":"pageSize","dataType":"double"},
        };
        app.post('/invoices/invoice-filter',
            ...(fetchMiddlewares<RequestHandler>(InvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(InvoiceController.prototype.findAllFilter)),

            async function InvoiceController_findAllFilter(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInvoiceController_findAllFilter, request, response });

                const controller = new InvoiceController();

              await templateService.apiHandler({
                methodName: 'findAllFilter',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInvoiceController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"InvoiceInsertDto"},
        };
        app.post('/invoices',
            ...(fetchMiddlewares<RequestHandler>(InvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(InvoiceController.prototype.create)),

            async function InvoiceController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInvoiceController_create, request, response });

                const controller = new InvoiceController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInvoiceController_findById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/invoices/:id',
            ...(fetchMiddlewares<RequestHandler>(InvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(InvoiceController.prototype.findById)),

            async function InvoiceController_findById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInvoiceController_findById, request, response });

                const controller = new InvoiceController();

              await templateService.apiHandler({
                methodName: 'findById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInvoiceController_update: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"InvoiceUpdateDto"},
        };
        app.put('/invoices/:id',
            ...(fetchMiddlewares<RequestHandler>(InvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(InvoiceController.prototype.update)),

            async function InvoiceController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInvoiceController_update, request, response });

                const controller = new InvoiceController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsInvoiceController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/invoices/:id',
            ...(fetchMiddlewares<RequestHandler>(InvoiceController)),
            ...(fetchMiddlewares<RequestHandler>(InvoiceController.prototype.delete)),

            async function InvoiceController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsInvoiceController_delete, request, response });

                const controller = new InvoiceController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 204,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
