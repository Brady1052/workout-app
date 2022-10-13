import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';

function WorkoutTable() {
  const ctx = useContext(WorkoutsContext);

  return (
    <>
      <table className="table" style={{ border: '2px solid white' }}>
        <thead>
          <tr style={{ color: 'white', borderBottom: '2px solid white' }}>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Weight</th>
            <th scope="col">Sets</th>
            <th scope="col">Reps</th>
          </tr>
        </thead>
        <tbody>
          {ctx.formArray.map((exercise) => {
            return (
              <tr
                key={Math.random().toString()}
                style={{
                  color: 'white',
                  fontWeight: '600',
                  borderBottom: '2px solid white',
                  position: 'relative',
                }}
              >
                <th
                  scope="row"
                  style={{
                    color: 'white',
                  }}
                >
                  {exercise.name}
                </th>

                <td>{exercise.type}</td>
                <td>{exercise.weight}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.reps}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default WorkoutTable;
