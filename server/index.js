const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://jfd2141:MYPassword@cluster0.ybl5tnr.mongodb.net/WorkoutApp?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/getWorkouts", (req, res) => {
    
})

app.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});

