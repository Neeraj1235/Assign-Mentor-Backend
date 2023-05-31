require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/config");
const route = require("./route/route");

//cors origin issue
app.use(cors({ origin: "*" }));

//env eniviroment variable path
require("dotenv").config({ path: "./config/.env" });

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

const PORT = process.env.PORT || 8000;

//port connection
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
