const {
  create,
  getChurch,
  getChurchById,
  updateChurch,
} = require("./church.controller");

//const { getChurchById } = require('./church.service');
//const { getChurch } = require('./church.service');
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getChurch);
router.get("/:id", checkToken, getChurchById);
router.patch("/", checkToken, updateChurch);

//router.delete('/',deteleChurch);

module.exports = router;
