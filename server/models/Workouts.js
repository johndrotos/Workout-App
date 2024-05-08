const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true,
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    }
});

const WorkoutModel = mongoose.model("Workouts", WorkoutSchema);
module.exports = WorkoutModel;