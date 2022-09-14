const {
  create,
  getOrganization,
  getOrganizationById,
  updateOrganization,
  getOrganizationByName,
} = require("./organization.controller");
const { checkToken } = require("../../auth/token_validation");

//const { getChurchById } = require('./church.service');
//const { getChurch } = require('./church.service');
const router = require("express").Router();
router.post("/", checkToken, create);
router.get("/", checkToken, getOrganization);
router.get("/:id", checkToken, getOrganizationById);
router.patch("/", checkToken, updateOrganization);
router.get("/name/:name", checkToken, getOrganizationByName);
module.exports = router;
