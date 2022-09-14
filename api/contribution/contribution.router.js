const {
  create,
  getContribution,
  getContributionById,
  updateContribution,
  deleteContribution,
} = require("./contribution.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, create);
router.get("/", checkToken, getContribution);
router.get("/:id", checkToken, getContributionById);
router.patch("/", checkToken, updateContribution);
router.delete("/:id", checkToken, deleteContribution);

module.exports = router;
