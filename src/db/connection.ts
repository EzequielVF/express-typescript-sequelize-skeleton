import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";

const envFile =
	process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
config({ path: envFile });

const DATABASE_HOST = process.env.DATABASE_HOST as string;
const DATABASE_PORT = process.env.DATABASE_PORT
	? Number.parseInt(process.env.DATABASE_PORT)
	: (8889 as number);
const DATABASE_USERNAME = process.env.DATABASE_USERNAME as string;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
const DATABASE_NAME = process.env.DATABASE_NAME as string;

const connection = new Sequelize({
  dialect: "mysql",
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  logging: false,

});

export default connection;