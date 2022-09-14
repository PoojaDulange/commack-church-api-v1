const { getState } = require("./state.service");

module.exports = {
  getState: (req, res) => {
    getState((error, results) => {
      console.log(error);
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
};
