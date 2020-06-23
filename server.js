const express = require("express");
const app = express();
// Create a .env file
// require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.send({ message: "Server Running ..." });
});

app.get("/api", require("./routes"));

app.listen(PORT, () => console.log(`Serving on ${PORT}`));
