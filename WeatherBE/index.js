const axios = require("axios");
const cors = require("cors");
const Express = require("express");
const datarouter = require("./Routes/dataroute");
const authrouter = require("./Routes/authroute");
const blogRouter = require("./Routes/blogroute");
require("./Models/db");
require("dotenv").config();
const app = Express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(Express.json());

app.use("/data", datarouter);
app.use("/auth", authrouter);
app.use("/blogs",blogRouter); 
app.listen("8000", () => {
  console.log("Listening on port 8000");
});
