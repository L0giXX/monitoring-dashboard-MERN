import mongoose from "mongoose";

const Schema = mongoose.Schema;
//onst ObjectId = mongoose.Types.ObjectId;

const DataSchema = new Schema({
  ip: String,
  loc: String,
  sensor: String,
  temp: Number,
  humi: Number,
  press: Number,
});

const DataModel = mongoose.model("Data", DataSchema);

export default DataModel;
