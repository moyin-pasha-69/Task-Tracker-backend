import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://moyinpasha6969:moyinpasha6969@task-db.cktsugr.mongodb.net/taskData",
  );

  console.log("DB connected ✅");
};

export default connectDB;
