const pool = require("../../config/db.js");

module.exports = {
  create: (data, callback) => {
    const sql = `call insertContributionData(?,?,?,?,?,?,?)`;
    pool.query(
      sql,

      [
        data.organizationID,
        data.peopleID,
        data.churchID,
        data.contributionDate,
        data.pledgeID,
        data.comments,
        data.pledgeAmount,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getContribution: (callback) => {
    const sql = `call getContributionData`;
    pool.query(sql, [], (error, result, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, result);
    });
  },
  getContributionById: (id, callback) => {
    const sql = `call getContributionOne(?)`;

    pool.query(sql, [id], (error, result, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, result);
    });
  },
  updateContribution: (data, callback) => {
    const sql = `call updateContributionData(?,?,?,?,?,?,?,?)`;

    pool.query(
      sql,
      [
        data.contributionID,
        data.organizationID,
        data.peopleID,
        data.churchID,
        data.contributionDate,
        data.pledgeID,
        data.comments,
        data.pledgeAmount,
      ],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  deleteContribution: (id, callback) => {
    const sql = `call deleteContributionData(?)`;

    pool.query(sql, [id], (error, result, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, result);
    });
  },
};
