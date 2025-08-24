import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'A comprehensive API documentation for your project.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: [
    './src/servlet/*.ts', // Corretto per puntare ai file sorgente .ts
    './src/servlet/swagger.schema.js' // Mantieni questo se è un file a parte e non un .ts
  ],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: any) => {
  // Swagger Page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
      // app.get('/docs.json', (req, res) => {
      //   res.setHeader('Content-Type', 'application/json')
      //   res.send(swaggerSpec)
      // })
};

export default setupSwagger;