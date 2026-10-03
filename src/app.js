import express from "express";
import { taskModel } from "./models/schema.models.js";

const app = express();
app.use(express.json());

// ! GET method
app.get("/task", async (req, res) => {
  const tasks = await taskModel.find();
  res.status(200).json({
    message: "Task fetched successfully!",
    tasks: tasks,
  });
});

// ! POST method
app.post("/task", async (req, res) => {
  const now = new Date();
  await taskModel.create({
    id: String(now.getHours()) + String(now.getSeconds()),
    task: req.body.task,
    status: req.body.status || "todo",
  });

  res.status(201).json({
    statusCode: 201,
    message: "Task created successfully!",
  });
});

// ! DELETE method
app.delete("/task/:id", async (req, res) => {
  console.log(req.params.id);
  await taskModel.findOneAndDelete({
    id: req.params.id,
  });

  res.status(200).json({
    statusCode: 200,
    message: `Task deleted successfully! (ID:${req.params.id})`,
  });
});

//! update (PATCH) method
app.patch("/task/:id", async (req, res) => {
  await taskModel.findOneAndUpdate(
    { id: req.params.id },
    {
      task: req.body.task,
      status: req.body.status,
    },
  );

  res.status(200).json({
    statusCode: 200,
    message: `Task Updated successfully! (ID:${req.params.id})`,
  });
});

export { app };
