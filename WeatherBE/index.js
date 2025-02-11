const axios = require("axios");
const cors = require("cors");
const Express = require("express");
const router = require("./Routes/dataroute");
require("dotenv").config();
const app = Express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/data", router);
app.listen("8000", () => {
  console.log("Listening on port 8000");
});
