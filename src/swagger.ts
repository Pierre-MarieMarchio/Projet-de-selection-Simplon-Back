import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v1.0.0",
    title: "Carambar & co Blague API",
    description: "Une Api Carambare !!!!",
  },
  servers: [
    {
      url: "http://localhost:3000/api/V1",
      description: "Url de base de l'api",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      BlagueRequest: {
        id: "uuid",
        question: "string",
        response: "string",
      },
      BlagueCreateRequest: {
        question: "string",
        response: "string",
      },
    },
  },
};

const outputFile = "./configs/swagger_V1_output.json";
const endpointsFiles = ["./src/routes.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
