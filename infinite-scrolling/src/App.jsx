import React, { useState, useEffect } from "react";
import DogCard from "./Components/DogCard";
function App() {
  const [data, setData] = useState([]);
  let performApiCall = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?page=1&limit=10"
    );
    let data = await response.json();
    console.log(data);

    setData(data);
  };

  useEffect(() => {
    performApiCall();
  }, []);

  return (
    <>
      <h1 className="">Infinite Scrolling</h1>
      {data.map((dog) => (
        <DogCard dogData={dog} key={dog.id} />
      ))}
    </>
  );
}

export default App;
