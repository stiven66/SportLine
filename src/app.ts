import express from 'express';
import cors from 'cors';
import sequelize from './database/db.ts';
import { runSeeders }  from './seeders/index.ts';
import dotenv from 'dotenv';
import swaggerSpec from './docs/swagger.ts';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// Rutas
import productosRoutes from './routes/productos.routes.ts';
import clientesRoutes from './routes/clientes.routes.ts';
import pedidosRoutes from './routes/pedidos.routes.ts';


// Rutas principales
app.use('/api/productos', productosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/pedidos', pedidosRoutes);

// Ruta base
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});



///// Aca corremos el puerto del servidor ///////INICIAMOSS SERVIDORR/////////////////////////////////
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

//Aca conectamos la base de datos, sincronizamos los modelos y ejecutamos los seeders
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos exitosamente');

    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados con relaciones');

    await runSeeders(); // Ejecuta los seeders
    console.log('¡Base de datos poblada!');
  } catch (err) {
    console.error('Error al iniciar la app:', err);
  }
})();

export default app;