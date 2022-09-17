import React from 'react';
import classes from './Card.module.css';
function Card(props) {
  return (
    <div className={`container text-center ${classes.card}`}>
      <div className="col">
        <div className="col ">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{props.type}</h5>
              <h5 className="card-subtitle mb-2 ">{props.title}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
              </ul>

              <button className="btn text-success">Edit</button>
              <button className="btn text-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
