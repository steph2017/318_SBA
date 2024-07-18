const express = require("express");
const router = express.Router();
const usersdata = require("../data/users");

// outline page routes


//get route via search query
router.get("/", (req, res) => {
    if (req.query.user) {
        let result = usersdata.find(user => user.id === Number(req.query.user));
        if (result) res.send(result);
        else res.status(404).send("Not found");
    }
    else {
        res.send(usersdata);
    }
});

//get route via path params
router.get("/:id", (req, res) => {
    let result = usersdata.find(user => user.id === Number(req.params.id));
    result ? res.send(result) : res.status(404).send("Not found");
});

// // outline page routes
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