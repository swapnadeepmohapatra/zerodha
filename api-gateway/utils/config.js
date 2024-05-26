import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8080;

export const publicRoutes = {
  "/api/exchange-connector": "http://localhost:8081",
  "/api/stock-exchange": "http://localhost:8082",
};
