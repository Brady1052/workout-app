import React from 'react';
import classes from './Card.module.css';
function Card(props) {
  return (
    <div className={`container ${classes.card}`}>
      <div className="col">
        <div className="col ">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <div className="text-center">
                <h5 className="card-title">{props.type}</h5>
                <h5 className="card-subtitle mb-2 ">{props.title}</h5>
              </div>
              <ul className={`list-group list-group-flush`}>
                <li className="list-group-item">Sets: {props.sets}</li>
                <li className="list-group-item">Reps: {props.reps}</li>
              </ul>
              <div
                className="text-center d-flex justify-content-between"
                style={{ marginTop: '1rem' }}
              >
                <button className="btn text-success">Edit</button>
                <button
                  onClick={props.onDeleteWorkout}
                  className="btn text-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
