const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
        match: [
          /[a-zA-Z]/,
          "Enter a valid name using alphabetical characters only.",
        ],
      },

      duration: {
        type: Number,
        required: true,
        validate: [({ length }) => length >= 0, "Duration must be greater than 0."],
      },

      distance: {
        type: Number,
        validate: [({ length }) => length >= 0, "Distance must be greater than 0."],
        default: null,
      },

      weight: {
        type: Number,
        validate: [({ length }) => length >= 0, "Weight must be more than 0."],
        default: null,
      },

      reps: {
        type: Number,
        validate: [({ length }) => length >= 0, "Reps must be greater than 0."],
        default: null,
      },

      sets: {
        type: Number,
        validate: [({ length }) => length >= 0, "Sets must be greater than 0."],
        default: null,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;