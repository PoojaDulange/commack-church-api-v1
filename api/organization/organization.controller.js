const {
  create,
  getOrganization,
  getOrganizationById,
  updateOrganization,
  getOrganizationByName,
} = require("./organization.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    // console.log(body.name);
    create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getOrganization: (req, res) => {
    getOrganization((error, results) => {
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
  getOrganizationById: (req, res) => {
    const id = req.params.id;
    console.log("params", id);
    getOrganizationById(id, (error, results) => {
      if (error) {
        // console.log(error);
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
  updateOrganization: (req, res) => {
    const body = req.body;
    updateOrganization(body, (error, results) => {
      if (error) {
        // console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getOrganizationByName: (req, res) => {
    const name = req.params.name;
    console.log("Name:=-", name);
    //console.log("Name wala output", name);
    getOrganizationByName(name, (error, results) => {
      console.log("Inname");
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "no record found",
        });
      }
      console.log(results);
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  /* deteleChurch :(req,res) =>{
        const body = req.body;
        console.log(body);
        deleteChurch(body, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            })
        })
    }*/
};
