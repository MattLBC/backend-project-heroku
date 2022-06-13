const express = require("express");
const apiRouter = require("./routes/api_routers");
const {
  handleInternalServerErrors,
  handlePSQLErrors,
  handleCustomErrors,
} = require("./controllers/error_controllers");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.use("/*", (req, res, next) => {
  res.status(404).send({ msg: "Route not found" });
});
app.use(handleCustomErrors);
app.use(handlePSQLErrors);
app.use(handleInternalServerErrors);

module.exports = app;
