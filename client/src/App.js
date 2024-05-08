import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfWorkouts, setListOfWorkouts] = useState([]);
  const [exercise, setExercise] = useState("")
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")


  useEffect(() => {
    Axios.get("http://localhost:3001/getWorkouts").then((response) => {
      setListOfWorkouts(response.data);
    });
  }, []);

  const createWorkout = () => {
    Axios.post("http://localhost:3001/createWorkout", {
      exercise: "",
      sets: 0,
      reps: 0,
      weight: 0
    }).then((response) =>{
      alert("Workout Created");
    });
  };



  return (
    <div className="App">
      <div className="workoutsDisplay">
        {listOfWorkouts.map((workout) => {
          return(
            <div>
              <h1>Exercise: {workout.exercise}</h1>
              <h1>Sets: {workout.sets}</h1>
              <h1>Reps: {workout.reps}</h1>
              <h1>Weight: {workout.weight}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <input type="text" placeholder="Exercise" />
        <input type="number" placeholder="Sets" />
        <input type="number" placeholder="Reps" />
        <input type="number" placeholder="Weight" />
        <button onClick={createWorkout}>Submit</button>
      </div>
    </div>
  );
}

export default App;
