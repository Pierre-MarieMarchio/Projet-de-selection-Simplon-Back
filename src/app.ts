import express from "express";
import routes from "./routes";
import { corsMiddleware } from "./core/middlewares/cors.middlewares";
import { errorHandler } from "./core/middlewares/errors.middleware";
import { database } from "./config/database";

const app = express();

database.sync().then(() => {
  console.log("conected to database");
});

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/V1", routes);
app.use(errorHandler);

export default app;
