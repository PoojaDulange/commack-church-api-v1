const pool = require("../../config/db.js");

//const { updateChurch } = require('./church.controller');

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `call insertOrganizationData(?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.name,
        data.address1,
        data.address2,
        data.city,
        data.stateID,
        data.zipcode,
        data.telNo,
        data.mobileNo,
        data.email,
        data.enrolledOn,
        data.churchID,
        data.url,
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getOrganization: (callback) => {
    const sql = `call getOrganizationData`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        // console.log(error)
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getOrganizationById: (organizationID, callback) => {
    const sql = `call getOrganizationOne(?)`;

    pool.query(sql, [organizationID], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateOrganization: (data, callback) => {
    const sql = `call updateOrganizationData(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.organizationID,
        data.name,
        data.address1,
        data.address2,
        data.city,
        data.stateID,
        data.zipcode,
        data.telNo,
        data.mobileNo,
        data.email,
        data.enrolledOn,
        data.churchID,
        data.url,
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getOrganizationByName: (name, callback) => {
    const sql = `call getOrganizationByName(?)`;
    pool.query(sql, [name], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      // console.log(results);
      return callback(null, results[0]);
    });
  },

  /* deleteChurch :(data, callback) => {
         pool.query(
             `delete from church where id=?`,
             [data.id],(error,results,fields)=>{
                 console.log("SDATA",data.user.id);
                 if(error){
                     console.log(error);
                     return callback(error);
                 }
                 return callback(null,results[0]);
             }
         )
     }*/
};
