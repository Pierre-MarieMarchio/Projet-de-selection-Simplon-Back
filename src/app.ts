import express from "express";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerOutputV1 from "./configs/swagger_V1_output.json";

import { corsMiddleware } from "./core/middlewares/cors.middlewares";
import { errorHandler } from "./core/middlewares/errors.middleware";
import { database } from "./configs/database";

const app = express();

database.sync().then(() => {
  console.log("conected to database");
});

app.use(corsMiddleware);
app.use(express.json());

app.use("/api/V1", routes);
app.use("/api-docs/V1", swaggerUi.serve, swaggerUi.setup(swaggerOutputV1));

app.use(errorHandler);

export default app;
