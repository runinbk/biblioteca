import express, { Application } from "express";
import cors from "cors";
const bodyParser = require('body-parser');

import config from "./config";

import db from "../db/connection";

import authRoutes from "../modules/auth/routes/auth.routes";
import rolRoutes from "../modules/auth/routes/rol.routes";
import usuarioRoutes from "../modules/auth/routes/usuario.routes";

export class Server {
    private app: Application;
    private port: string | number | undefined;

    private apiPaths = {
        auth: "/api/auth",
        rol: "/api/rol",
        usuario: "/api/usuario",
    };

    constructor() {
        this.app = express();
        this.port = config.PORT || "8000";

        //    Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online");
        } catch (error) {
            console.log("Database ofline - " + error);
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // LECTURA DEL BODY
        this.app.use(express.json());

        // CARPETA PUBLICA
        this.app.use(express.static("public"));

        this.app.use(bodyParser.json());
    }

    routes() {
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.rol, rolRoutes);
        this.app.use(this.apiPaths.usuario, usuarioRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en le puerto : " + this.port);
        });
    }
}
