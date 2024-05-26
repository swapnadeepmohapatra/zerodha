import express from "express";
import { PORT } from "./utils/config.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from stock exchange");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
