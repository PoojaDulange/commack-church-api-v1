const { create, get, getById, update } = require("./pledgecategory.service");

module.exports = {
  createPledgeCategory: (req, res) => {
    const body = req.body;
    console.log(body);
    create(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection Failed",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },

  getPledgeCategory: (req, res) => {
    get((error, results) => {
      if (error)
        return res.status(500).json({
          success: 0,
          message: "No records found",
        });
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  getPledgeCategoryId: (req, res) => {
    const id = req.params.id;
    getById(id, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "no record found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  updatePledgeCategory: (req, res) => {
    const body = req.body;
    update(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Db connection error",
        });
      }
      return res.status(202).json({
        success: 1,
        data: result,
      });
    });
  },
};
