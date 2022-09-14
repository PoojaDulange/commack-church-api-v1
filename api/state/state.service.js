const db = require("../../config/db.js");
module.exports = {
  getState: (callback) => {
    const sql = `call getStateData`;
    db.query(sql, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },
};
