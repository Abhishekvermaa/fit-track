import React, { useState } from "react";
import "./workoutform.css"

const WorkoutForm = ({ onAddWorkout }) => {
  const [formData, setFormData] = useState({
    exercise: "",
    sets: "",
    reps: "",
    date: "",
    notes: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddWorkout(formData);
    setFormData({
      exercise: "",
      sets: "",
      reps: "",
      date: "",
      notes: "",
    });
  };

  return (
    <form   className="workout-form" onSubmit={handleSubmit}>
      <input
        name="exercise"
        value={formData.exercise}
        onChange={handleChange}
        placeholder="Exercise name"
      />
      <input
        name="sets"
        value={formData.sets}
        onChange={handleChange}
        placeholder="Sets"
        type="number"
      />
      <input
        name="reps"
        value={formData.reps}
        onChange={handleChange}
        placeholder="Reps"
        type="number"
      />
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
      />
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notes"
      />
      <button type="submit">Add Workout</button>
       
    </form>
  );
};

export default WorkoutForm;
