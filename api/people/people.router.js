const {
  create,
  getPeople,
  getPeopleById,
  updatePeople,
  getPeopleByEmail,
  getPeopleByName,
} = require("./people.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getPeople);
router.get("/:id", checkToken, getPeopleById);
router.patch("/", checkToken, updatePeople);
router.get("/email/:email", checkToken, getPeopleByEmail);
router.get("/name/:name", checkToken, getPeopleByName);

module.exports = router;
