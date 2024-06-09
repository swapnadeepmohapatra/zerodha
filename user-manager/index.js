import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import usersRouter from "./routes/users.route.js";
import { PORT } from "./utils/config.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", usersRouter);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is listening at http://localhost:${PORT}`);
});
