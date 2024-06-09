import express from "express";
import dotenv from "dotenv";
import ordersRouter from "./routes/orders.route.js";
import { PORT } from "./utils/config.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/", ordersRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
