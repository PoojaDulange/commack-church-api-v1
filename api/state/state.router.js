const { getState } = require("./state.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();
router.get("/", checkToken, getState);
module.exports = router;
