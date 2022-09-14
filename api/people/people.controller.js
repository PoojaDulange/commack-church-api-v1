const {
  create,
  getPeople,
  getPeopleById,
  updatePeople,
  getPeopleByEmail,
  getPeopleByName,
} = require("./people.service");

module.exports = {
  create: (req, res) => {
    const body = req.body;
    console.log(body);
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
  getPeople: (req, res) => {
    getPeople((error, results) => {
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
  getPeopleById: (req, res) => {
    const id = req.params.id;
    console.log("params", id);
    getPeopleById(id, (error, results) => {
      if (error) {
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
  updatePeople: (req, res) => {
    const body = req.body;
    updatePeople(body, (error, results) => {
      if (error) {
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
  getPeopleByEmail: (req, res) => {
    const email = req.params.email;
    getPeopleByEmail(email, (error, results) => {
      console.log("InEmail");
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
  getPeopleByName: (req, res) => {
    const name = req.params.name;
    getPeopleByName(name, (error, results) => {
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
