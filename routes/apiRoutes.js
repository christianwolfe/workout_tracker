const router = require("express").Router()
const Workout = require("../model/workout")

router.get("/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            console.log(dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

router.get("/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.post("/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.put("/workouts/:id", ({ body, params }, res) => {
    Workout.findOneAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;