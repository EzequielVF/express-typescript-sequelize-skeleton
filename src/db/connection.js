"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = require("dotenv");
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
(0, dotenv_1.config)({ path: envFile });
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = process.env.DATABASE_PORT
    ? Number.parseInt(process.env.DATABASE_PORT)
    : 8889;
const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    logging: false,
});
exports.default = connection;
