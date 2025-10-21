import express from 'express';
import cors from 'cors';
import sequelize from './database/db.ts';


const app = express();
app.use(cors());
app.use(express.json());



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

  } catch (err) {
    console.error('Error al iniciar la app:', err);
  }
})();