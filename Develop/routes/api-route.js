const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", (req, res)
    => {
        db.Workout.find({})
        .then((workoutData) => {
            res.json(workoutData);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id"), (req, res) => {
        const workoutId = req.params.id;
        console.log(workoutId);
        console.log(req.body);

        db.Workout.findByIdAndUpdate
        (workoutId, req.body, (err, Data)
        => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(found); 
            }
        })
    }
}