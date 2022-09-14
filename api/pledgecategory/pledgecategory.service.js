const connect = require("../../config/db");
module.exports = {
  create: (data, callback) => {
    const sql = `call insertPledgeData(?,?)`;
    connect.query(
      sql,
      [data.name, data.description],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  get: (callback) => {
    const sql = `call getPledgeCategoryData`;
    connect.query(sql, [], (error, result, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, result);
    });
  },

  getById: (id, callback) => {
    const sql = `call getPledgeCategoryOne(?)`;
    connect.query(sql, [id], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  update: (data, callback) => {
    const sql = `call updatePledgeData(?,?,?)`;
    connect.query(
      sql,
      [data.id, data.name, data.description],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
