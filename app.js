const express = require("express");
const connect = require("./config/db.js");
const churchRouter = require("./api/church/church.router");
const contributionRouter = require("./api/contribution/contribution.router");
const organizationRouter = require("./api/organization/organization.router");
const peopleRouter = require("./api/people/people.router");
const pledgeRouter = require("./api/pledgecategory/pledgecategory.router");
const stateRouter = require("./api/state/state.router");
const userRouter = require("./api/users/users.router");

require("dotenv").config();
const app = express();
app.use(express.json());
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
// app.use("/api/users/login", (req, res) => {
//   res.send({
//     token: "test123",
//   });
// });

app.listen(process.env.APP_PORT, () => {
  console.log(`server running on port ${process.env.APP_PORT}`);
});
