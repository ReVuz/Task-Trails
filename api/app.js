const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://byte404.vercel.app', 
}));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

module.exports = app;
