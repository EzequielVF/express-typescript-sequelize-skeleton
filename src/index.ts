import express from "express";
import cors from "cors";
import helmet from "helmet";
import connection from "./db/connection";
import { config } from "dotenv";

const envFile =
	process.env.NODE_ENV === "production" ? ".env.production" : ".env.local";
config({ path: envFile });


if (!process.env.PORT) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10);
const APP_URL: string = process.env.APP_URL as string;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


app.get("/", (_req, res) => {
  res.send("ExpressCORRIENDO");
});

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(PORT, () => {
      console.log(`API is listening on ${APP_URL}:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();