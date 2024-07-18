const express = require("express");
const router = express.Router();
const logsdata = require("../data/logs");

// outline page routes


//get route via search query
router.get("/", (req, res) => {
    if (req.query.log) {
        let result = logsdata.find(log => log.id === Number(req.query.log));
        if (result) res.send(result);
        else res.status(404).send("Not found");
    }
    else {
        res.send(logsdata);
    }
});

//get route via path params
router.get("/:id", (req, res) => {
    let result = logsdata.find(log => log.id === Number(req.params.id));
    result ? res.send(result) : res.status(404).send("Not found");
});

// router
//     .route("/")
//     .get((req, res) => {
//     })
//     .post((req, res) => {
//     })
//     .patch((req, res) => {
//     })
//     .delete((req, res) => {
//     });

module.exports = router;