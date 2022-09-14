const {
  create,
  getContribution,
  getContributionById,
  updateContribution,
  deleteContribution,
} = require("./contribution.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    console.log(body);
    create(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  getContribution: (req, res) => {
    getContribution((error, result) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Data does not found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  getContributionById: (req, res) => {
    const id = req.params.id;
    getContributionById(id, (error, result) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Data does not found ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  updateContribution: (req, res) => {
    const body = req.body;
    updateContribution(body, (error, result) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Data does not found ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  deleteContribution: (req, res) => {
    const id = req.params.id;
    deleteContribution(id, (error, result) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Data does not found ",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
};
