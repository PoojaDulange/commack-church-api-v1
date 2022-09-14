const db = require("../../config/db.js");
module.exports = {
  create: (data, callback) => {
    const sql = `call insertChurchData(?,?,?,?,?,?,?,?,?,?)`;
    db.query(
      sql,
      [
        data.name,
        data.description,
        data.address1,
        data.address2,
        data.city,
        data.stateID,
        data.zipcode,
        data.mobileNo,
        data.email,
        data.churchUrl,
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
  getChurch: (callback) => {
    let sql = `call getChurchData`;
    db.query(sql, [], (error, results, fields) => {
      if (error) {
        console.log(error);
        console.log("Its not comming here");
        return callback(error);
      }
      return callback(null, results);
    });
  },
  getChurchById: (churchID, callback) => {
    let sql = `call getChurchOne(?)`;

    db.query(sql, [churchID], (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, results[0]);
    });
  },
  updateChurch: (data, callback) => {
    let sql = `call updateChurchData(?,?,?,?,?,?,?,?,?,?,?)`;

    db.query(
      `update church set name=?, description=?,address1=?,address2=?,city=?,stateID=?,zipcode=?,mobileNo=?,email=?,churchURL=? where churchID=?`,
      [
        data.name,
        data.description,
        data.address1,
        data.address2,
        data.city,
        data.stateID,
        data.zipcode,
        data.mobileNo,
        data.email,
        data.churchURL,
        data.churchID,
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  /* deleteChurch :(data, callback) => {
        db.query(
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
