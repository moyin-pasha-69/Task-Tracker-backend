import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: Number,
  task: String,
  status: String,
});

const taskModel = mongoose.model("task", taskSchema);

export { taskModel };
