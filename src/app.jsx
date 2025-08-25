import React, { useState } from "react";
import WorkoutForm from "./components/workoutform";
import "./app.css"; // 👈 Import CSS

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const handleAddWorkout = (workout) => {
    setWorkouts((prev) => [...prev, workout]);
  };

  const handleDeleteWorkout = (index) => {
    setWorkouts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h2 className="title">🏋️‍♂️ FitTrack - Workout Tracker</h2>

      <WorkoutForm onAddWorkout={handleAddWorkout} />

      <h3 className="subtitle">Workout History</h3>
      {workouts.length === 0 && <p className="empty">No workouts logged yet.</p>}

      <div className="workout-list">
        {workouts.map((workout, index) => (
          <div key={index} className="workout-card">
            <div className="workout-info">
              <p className="exercise">
                <b>{workout.exercise}</b> - {workout.sets} sets × {workout.reps} reps
              </p>
              {workout.date && <p className="meta">Date: {workout.date}</p>}
              {workout.notes && <p className="meta">Notes: {workout.notes}</p>}
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDeleteWorkout(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
