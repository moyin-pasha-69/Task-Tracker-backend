import express from "express";
import { taskModel } from "./models/schema.models.js";

const app = express();
app.use(express.json());

export { app };
