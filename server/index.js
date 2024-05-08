const express = require("express");
const app = express();
const mongoose = require("mongoose");
const WorkoutModel = require('./models/Workouts');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://jfd2141:MYPassword@cluster0.ybl5tnr.mongodb.net/WorkoutApp?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getWorkouts", async (req, res) => {
    try {
        const result = await WorkoutModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.post("/createWorkout", async (req, res) => {
    const workout = req.body;
    const newWorkout = new WorkoutModel(workout);
    await newWorkout.save();

    res.json(workout);
})

app.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});

