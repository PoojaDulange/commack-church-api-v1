const pool = require("../../config/db.js");

//const { updateChurch } = require('./church.controller');

module.exports = {
  create: (data, callback) => {
    console.log(data);
    const sql = `call insertPeopleData(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.churchID,
        data.firstName,
        data.middleName,
        data.lastName,
        data.address1,
        data.address2,
        data.city,
        data.stateID,
        data.zipcode,
        data.telNo,
        data.mobileNo,
        data.gender,
        data.email,
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
  getPeople: (callback) => {
    const sql = `call getPeopleData`;
    pool.query(sql, [], (error, results, fields) => {
      if (error) {
        // console.log(error)
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getPeopleById: (peopleID, callback) => {
    const sql = `call getPeopleOne(?)`;
    pool.query(sql, [peopleID], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updatePeople: (data, callback) => {
    const sql = `call updatePeopleData(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      sql,
      [
        data.peopleID,
        data.churchID,
        data.firstName,
        data.middleName,
        data.lastName,
        data.address1,
        data.address2,
        data.city,
        data.stateID,
        data.zipcode,
        data.telNo,
        data.mobileNo,
        data.gender,
        data.email,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  getPeopleByEmail: (email, callback) => {
    const sql = `call getPeopleByEmail(?)`;
    pool.query(sql, [email], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      // console.log(results);
      return callback(null, results[0]);
    });
  },
  getPeopleByName: (name, callback) => {
    const sql = `call getPeopleByName(?)`;
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
