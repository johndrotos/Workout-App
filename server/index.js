const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://johndrotos3:Menchies.com3@cluster0.1r7st2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});

