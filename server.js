const mongoose = require("mongoose");
const express = require("express");

const app = express();

// Create a .env file
// require("dotenv").config();

const PORT = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "mongodb://localhost:27017/test";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connection", con);
  } catch (err) {
    console.log("DB Error : ", err.message);
  }
};

// connectDB();

app.get("/", async (req, res) => {
  res.send({ message: "Server Running ..." });
});

app.use("/api/user", require("./apps/user/routes"));

app.listen(PORT, () => console.log(`Serving on ${PORT}`));
