import { Options, Sequelize } from "sequelize";

import config from "../server/config";

const user = config.DB_USERNAME || '';
const password = config.DB_PASSWORD || '';
const host = config.DB_HOST || '';
const port = config.DB_PORT || 5432;
const database = config.DB_DATABASE || 'AppCarAssistan-DB';
const typeDatabase = config.DB_CONNECTION || '';

const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;
// const url = config.DATABASE_URL || "";

// console.log(url);

// const options: Options = {
//     dialect: 'postgres', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql'
//     logging: false, // false
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// };

// const sequelizeConnection = new Sequelize(url, options);
// export default sequelizeConnection;

// import { Sequelize } from "sequelize";


// //     PARA EL LOCALHOST
const db = new Sequelize('content-create-db', 'postgres', 'password', {
    host: 'localhost',
    dialect: "postgres",
})

export default db;