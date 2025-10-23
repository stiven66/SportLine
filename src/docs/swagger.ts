import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Pedidos',
      version: '1.0.0',
      description: 'Documentación de endpoints para gestión de pedidos',
    },
  },
  apis: ['./src/routes/*.ts'], // Ajusta si tus rutas están en otro lugar
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;