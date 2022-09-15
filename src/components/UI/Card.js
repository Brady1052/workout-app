import React from 'react';

function Card(props) {
  return (
    <div className="container text-center">
      <div className="col">
        <div className="col ">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{props.type}</h5>
              <h6 className="card-subtitle mb-2 ">{props.title}</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
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
