import express from "express";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import userRoutes from "./routes/user.routes";
const app = express();

import swaggerOptions from "../swagger.json";
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
