import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";
import cookieParser from "cookie-parser";
import { PORT, publicRoutes } from "./utils/config.js";

const app = express();

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type"],
    origin: "http://localhost:3000",
  })
);

for (const route in publicRoutes) {
  const target = publicRoutes[route];
  app.use(
    route,
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
}

app.listen(PORT, () => {
  console.log(`api gateway started listening on port : ${PORT}`);
});
