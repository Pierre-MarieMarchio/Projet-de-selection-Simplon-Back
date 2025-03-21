import express from "express";
import routes from "./routes";
import { corsMiddleware } from "./core/middlewares/cors.middlewares";
import { errorHandler } from "./core/middlewares/errors.middleware";

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/V1", routes);
app.use(errorHandler);

export default app;
