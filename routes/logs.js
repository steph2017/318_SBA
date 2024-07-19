const express = require("express");
const router = express.Router();
const logsdata = require("../data/logs");

// outline page routes

//process added data
router.post("/added", (req, res) => {
    const { userid, logdate, foodids } = req.body;

    let result = {
        id: logsdata.length + 1,
        user_id: userid,
        date: logdate,
        food_ids: foodids,
        tCals: "calculations applied",
        tgCarbs: "calculations applied",
        tgProtein: "calculations applied",
        tgFat: "calculations applied",
        metcalTarget: "calculations applied",
        calsLeft: "calculations applied"
    };
    res.setHeader('Content-Type', 'text/plain');
    result ? res.send(`You added the following record: \nid: ${result.id} \nUser id: ${result.user_id} \nLog Date: ${result.date} \nFood ids: ${result.food_ids} \nCalories Logged: ${result.tCals} \nCarbs (g): ${result.tgCarbs} \nProtein (g): ${result.tgProtein} \nFat (g): ${result.tgFat} \nMet Calorie Target?: ${result.metcalTarget} \nCalories Remaining: ${result.calsLeft}`) : res.status(404).send("Not found");
});

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


//pseudo delete route using GET
router.get("/:id/delete", (req, res) => {
    let result = logsdata.find(log => log.id === Number(req.params.id));
    res.setHeader('Content-Type', 'text/plain');
    result ? res.send(`You deleted the following record: \nid: ${result.id} \nUser id: ${result.user_id} \nLog Date: ${result.date} \nFood ids: ${result.food_ids} \nCalories Logged: ${result.tCals} \nCarbs (g): ${result.tgCarbs} \nProtein (g): ${result.tgProtein} \nFat (g): ${result.tgFat} \nMet Calorie Target?: ${result.metcalTarget} \nCalories Remaining: ${result.calsLeft}`) : res.status(404).send("Not found");
});

//delete route - this route is not connected to anything!
router.delete("/:id/delete", (req, res) => {
    let result = logsdata.find(log => log.id === Number(req.body.id));
    res.setHeader('Content-Type', 'text/plain');
    result ? res.send(`You deleted the following record: \nid: ${result.id} \nUser id: ${result.user_id} \nLog Date: ${result.date} \nFood ids: ${result.food_ids} \nCalories Logged: ${result.tCals} \nCarbs (g): ${result.tgCarbs} \nProtein (g): ${result.tgProtein} \nFat (g): ${result.tgFat} \nMet Calorie Target?: ${result.metcalTarget} \nCalories Remaining: ${result.calsLeft}`) : res.status(404).send("Not found");
});

module.exports = router;