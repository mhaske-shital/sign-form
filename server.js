const express = require("express");

const colors = require("colors");

const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const db = require("./config/db");
db();

const register = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", register);

app.listen(process.env.PORT, () => {
  console.log("Server is running".green);
});
