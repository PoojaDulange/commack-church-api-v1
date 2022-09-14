const { create, getChurch, getChurchById, updateChurch } = require('./church.service');

module.exports = {

    create: (req, res) => {
        const body = req.body;
        console.log(body.name);
        create(body, (error, results) => {
            if (error) {
                // console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection Error",
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        })
    },
    getChurch: (req, res) => {
        getChurch((error, results) => {
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
    getChurchById: (req,res) =>{
        const id = req.params.id;
        getChurchById(id, (error, results) => {
            if (error) {
                // console.log(error);
                return res.status(500).json({
                    success: 0,
                    message: "no record found",
                })
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },
    updateChurch :(req,res)=>{
        const body = req.body;
        updateChurch(body, (error, results) => {
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
            })
        })
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
}