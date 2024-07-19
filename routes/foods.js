const express = require("express");
const router = express.Router();
const foodsdata = require("../data/foods");

// outline page routes

//process added data
router.post("/added", (req, res) => {
    const { food_name, food_desc, food_cals, gCarbs, gProtein, gFat } = req.body;

    let result = {
        id: foodsdata.length + 1,
        name: food_name,
        description: food_desc,
        cals: food_cals,
        gcarbs: gCarbs,
        gprotein: gProtein,
        gfat: gFat
    };
    res.setHeader('Content-Type', 'text/plain');
    result ? res.send(`You added the following record: \nid: ${result.id} \nName: ${result.name} \nDescription: ${result.description} \nCalories: ${result.food_cals} \nCarbs (g): ${result.gcarbs} \nProtein (g): ${result.gprotein} \nFat (g): ${result.gfat}`) : res.status(404).send("Not found");
});

//get route via search query
router.get("/", (req, res) => {
    if (req.query.food) {
        let result = foodsdata.find(food => food.id === Number(req.query.food));
        if (result) res.send(result);
        else res.status(404).send("Not found");
    }
    else {
        res.send(foodsdata);
    }
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