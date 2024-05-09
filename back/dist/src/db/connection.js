"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../server/config"));
const user = config_1.default.DB_USERNAME || '';
const password = config_1.default.DB_PASSWORD || '';
const host = config_1.default.DB_HOST || '';
const port = config_1.default.DB_PORT || 5432;
const database = config_1.default.DB_DATABASE || 'AppCarAssistan-DB';
const typeDatabase = config_1.default.DB_CONNECTION || '';
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
const db = new sequelize_1.Sequelize('content-create-db', 'postgres', 'password', {
    host: 'localhost',
    dialect: "postgres",
});
exports.default = db;
//# sourceMappingURL=connection.js.map