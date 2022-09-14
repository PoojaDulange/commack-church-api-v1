const {
  createPledgeCategory,
  getPledgeCategory,
  getPledgeCategoryId,
  updatePledgeCategory,
} = require("./pledgecategory.controller");
const { checkToken } = require("../../auth/token_validation");

const router = require("express").Router();

router.post("/", checkToken, createPledgeCategory);
router.get("/", checkToken, getPledgeCategory);
router.get("/:id", checkToken, getPledgeCategoryId);
router.patch("/", checkToken, updatePledgeCategory);

module.exports = router;
