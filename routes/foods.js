const express = require("express");
const router = express.Router();
const foodsdata = require("../data/foods");

// outline page routes

//get route via search query
router.get("/", (req, res) => {
    let result = foodsdata.find(food => food.id === Number(req.query.food));
    if (result) res.send(result);
    else res.status(404).send("Not found");
});

//get route via path params
router.get("/:id", (req, res) => {
    let result = foodsdata.find(food => food.id === Number(req.params.id));
    result ? res.send(result) : res.status(404).send("Not found");
});

// router.post((req, res) => {
// })
//     .patch((req, res) => {
//     })
//     .delete((req, res) => {
//     });

module.exports = router;