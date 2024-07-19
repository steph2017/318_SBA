const express = require("express");
const router = express.Router();
const usersdata = require("../data/users");
const bodyparser = require("body-parser");

//set up body parser
router.use(bodyparser.urlencoded({ extended: true }));

// outline page routes

//process added data
router.post("/added", (req, res) => {
    const { username, dailycal, gCarbs, gProtein, gFat } = req.body;

    let result = { //technically dont need to build this to render the parsed info in the response but if we were updating a database we would need to organize the info inputted 
        id: usersdata.length + 1,
        username: username,
        tarCals: dailycal,
        tarCarbs: gCarbs,
        tarProtein: gProtein,
        tarFat: gFat,
        logs: []
    };
    res.setHeader('Content-Type', 'text/plain');
    result ? res.send(`You added the following record: \nid: ${result.id} \nusername: ${result.username} \nDaily Calorie Target: ${result.tarCals} \nTarget Carbs: ${result.tarCarbs} \nTarget Protein: ${result.tarProtein} \nTarget Fat: ${result.tarFat} \nLogs: ${result.logs} `) : res.status(404).send("Not found");
});

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