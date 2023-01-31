import mongoose from "mongoose";

const Schema = mongoose.Schema;
//onst ObjectId = mongoose.Types.ObjectId;

const DataSchema = new Schema({
  sensor: { type: String },
  temp: { type: Number },
  humi: { type: Number },
  press: { type: Number },
});

const DataModel = mongoose.model("Data", DataSchema);

export default DataModel;
