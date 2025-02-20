import React from "react";

const DogCard = ({ dogData }) => {
  return (
    <div className="card">
      <p>id : {dogData.id}</p>
      <img src={dogData.url} width="300px" height="200px" />
    </div>
  );
};

export default DogCard;
