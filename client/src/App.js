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
      exercise,
      sets,
      reps,
      weight,
    }).then((response) =>{
      setListOfWorkouts([...listOfWorkouts, {exercise, sets, reps, weight}]);
    });
  };



  return (
    <div className="App">
      <header className="header">
        John's Workout Log
      </header>
      <div className="workoutsDisplay">
        {listOfWorkouts.map((workout) => {
          return(
            <div className="workoutItem">
              <div className="workoutData">Exercise: {workout.exercise}</div>
              <div className="workoutData">Sets: {workout.sets}</div>
              <div className="workoutData">Reps: {workout.reps}</div>
              <div className="workoutData">Weight: {workout.weight}</div>
            </div>
          );
        })}
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Exercise" 
          onChange={(event) => {
            setExercise(event.target.value);
          }}
        />
        <input 
          type="number" 
          placeholder="Sets" 
          onChange={(event) => {
            setSets(event.target.value);
          }}
        />
        <input 
          type="number" 
          placeholder="Reps" 
          onChange={(event) => {
            setReps(event.target.value);
          }}
        />
        <input 
          type="number" 
          placeholder="Weight" 
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <button onClick={createWorkout}>Submit</button>
      </div>
    </div>
  );
}

export default App;
