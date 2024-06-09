import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8080;

export const publicRoutes = {
  "/api/order": "http://localhost:8081",
  "/api/market": "http://localhost:8082",
  "/api/watchlist": "http://localhost:8083",
  "/api/users": "http://localhost:8084",
  "/api/orders": "http://localhost:8085",
};
