import express from "express";
import dotenv from "dotenv";
import watchListRouter from "./routes/watchlists.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { PORT } from "./utils/config.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", watchListRouter);

app.get("/", async (req, res) => {
  res.json({ message: "HHLD Stock Broker Watchlist Manager Service" });
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is listening at http://localhost:${PORT}`);
});
