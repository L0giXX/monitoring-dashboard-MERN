import { config } from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Data from "./models/Data";

config();

const PORT = 5000;

const app = express();

app.use(express.json());

app.post("/add/data", async (req: Request, res: Response) => {
  const newData = new Data({
    loc: req.body.loc,
    temp: req.body.temp,
    humi: req.body.humi,
    press: req.body.press,
  });
  const createdData = await newData.save();
  res.json(createdData);
});

app.get("/get/data/all", async (req: Request, res: Response) => {
  const allData = await Data.find();
  res.json(allData);
});

app.delete("/delete/data", async (req: Request, res: Response) => {
  const deletedData = await Data.deleteMany();
  res.json("Deleted Data: " + deletedData.deletedCount);
});

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`Listening on port ${PORT}`);
  app.listen(PORT);
});
