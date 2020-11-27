const Workout = require("../models/Workout");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    let workoutId = req.params.id;
    Workout.findByIdAndUpdate(workoutId, { $push: { exercises: req.body } })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};