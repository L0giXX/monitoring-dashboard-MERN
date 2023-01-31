import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Data from "./models/Data";

const PORT = 5000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

mongoose
  .connect(
    "mongodb+srv://L0giX:21032004Mm@clusterdata.chvb5kd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
  });
