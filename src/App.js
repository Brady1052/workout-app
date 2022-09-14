import './App.css';
import AddWorkoutForm from './components/AddWorkout/AddWorkoutForm';
import WorkoutList from './components/AddWorkout/WorkoutList';
function App() {
  return (
    <div className="App">
      <AddWorkoutForm />
      <WorkoutList />
    </div>
  );
}

export default App;
