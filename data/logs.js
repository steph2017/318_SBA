import { foods } from "./foods";
import { users } from "./users";

const logs = [
    {
        id: 1,
        user_id: 1,
        date: "20230815",
        food_ids: [1, 4],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    },
    {
        id: 2,
        user_id: 1,
        date: "20230816",
        food_ids: [1, 1, 1, 4, 4, 4],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 3,
        user_id: 2,
        date: "20230815",
        food_ids: [2, 3, 4],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 4,
        user_id: 3,
        date: "20230815",
        food_ids: [1, 2, 5],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 5,
        user_id: 2,
        date: "20230908",
        food_ids: [5, 5, 5, 5, 5, 5, 5, 5],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 6,
        user_id: 2,
        date: "20230909",
        food_ids: [3, 4],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 7,
        user_id: 3,
        date: "20240222",
        food_ids: [1, 2, 1, 2, 3, 4],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 8,
        user_id: 1,
        date: "20231101",
        food_ids: [4, 4, 4, 4, 5, 5, 5, 5],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 9,
        user_id: 3,
        date: "20240507",
        food_ids: [2, 2, 3, 5],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }, {
        id: 10,
        user_id: 3,
        date: "20240613",
        food_ids: [1, 2, 3, 4, 5],
        tCals: food_ids.map((x) => foods[user_id].cals).reduce((a, c) => (a + c, 0)), //takes food_ids , converts to the calories of the referenced food, then sums all the values
        tgCarbs: food_ids.map((x) => foods[user_id].gcarbs).reduce((a, c) => (a + c, 0)),
        tgProtein: food_ids.map((x) => foods[user_id].gprotein).reduce((a, c) => (a + c, 0)),
        tgFat: food_ids.map((x) => foods[user_id].gfat).reduce((a, c) => (a + c, 0)),
        metcalTarget: (users[user_id].tarCals > tCals) ? false : true,
        calsLeft: users[user_id].tarCals - tCals
    }
]

module.exports = logs;