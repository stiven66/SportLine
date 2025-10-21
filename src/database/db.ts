import 'dotenv/config'; // Esto es para cargar las variables de entorno
import { Sequelize } from 'sequelize';


// const sequelize = new Sequelize(
//     process.env.DB_NAME || 'nombre_basedatos',
//     process.env.DB_USER || 'postgres',
//     process.env.DB_PASS || 'Qwe.123*',
//     {
//         host: "localhost",
//         dialect: "postgres",
//         logging: false
//     }
// );

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  logging: true,
});

export default sequelize;