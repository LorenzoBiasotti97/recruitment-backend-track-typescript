import express from 'express';
import { UserController } from './servlet/userController';
import { InvoiceController } from './servlet/invoiceController';
import { TaxProfileController } from './servlet/taxProfileController';
import { UserInvoiceController } from './servlet/userInvoiceController';
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from './routes/routes';
import swaggerDocument from "../dist/swagger.json";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
RegisterRoutes(app); 

// Serve Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));



//Rotte di esempio
// app.get('/users', async (req, res) => {
//   //res.send('Test API');
//   res.send( 
//      await UserController.findAll(req, res)
//       // .then((users) => {
//       //   res.json(users);
//       // })
//       // .catch((e) => {
//       //   console.error(e);
//       // })
//   )
//   console.log(`Server in esecuzione su http://localhost:${port}`);
// });

// Routes for the User model
// app.get('/users', UserController.findAll);
// app.get('/users/:id', UserController.findById);
// app.post('/users', UserController.create);
// app.put('/users/:id', UserController.update);
// app.delete('/users/:id', UserController.delete);

// // Routes for the Invoice model
// app.get('/invoices', InvoiceController.findAll);
// app.get('/invoices/:id', InvoiceController.findById);
// app.post('/invoices', InvoiceController.create);
// app.put('/invoices/:id', InvoiceController.update);
// app.delete('/invoices/:id', InvoiceController.delete);

// // Routes for the TaxProfile model
// app.get('/tax-profiles', TaxProfileController.findAll);
// app.get('/tax-profiles/:id', TaxProfileController.findById);
// app.post('/tax-profiles', TaxProfileController.create);
// app.put('/tax-profiles/:id', TaxProfileController.update);
// app.delete('/tax-profiles/:id', TaxProfileController.delete);

// // Routes for the UserInvoice model
// app.get('/user-invoices', UserInvoiceController.findAll);
// app.get('/user-invoices/:id', UserInvoiceController.findById);
// app.post('/user-invoices', UserInvoiceController.create);
// app.put('/user-invoices/:id', UserInvoiceController.update);
// app.delete('/user-invoices/:id', UserInvoiceController.delete);

app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
  console.log(`API docs available at http://localhost:${port}/docs`);
});