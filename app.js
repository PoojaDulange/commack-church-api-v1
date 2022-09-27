var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const churchRouter = require("./api/church/church.router");
const contributionRouter = require("./api/contribution/contribution.router");
const organizationRouter = require("./api/organization/organization.router");
const peopleRouter = require("./api/people/people.router");
const pledgeRouter = require("./api/pledgecategory/pledgecategory.router");
const stateRouter = require("./api/state/state.router");
const userRouter = require("./api/users/users.router");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

require("dotenv").config();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api/church", churchRouter);
app.use("/api/contribution", contributionRouter);
app.use("/api/organization", organizationRouter);
app.use("/api/people", peopleRouter);
app.use("/api/pledgecategory", pledgeRouter);
app.use("/api/state", stateRouter);
app.use("/api/users", userRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// module.exports = app;

// app.use("/api/users/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.APP_PORT, () => {
  console.log(`server running on port ${process.env.APP_PORT}`);
});
