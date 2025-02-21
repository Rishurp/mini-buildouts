import React, { useState, useEffect } from "react";
import DogCard from "./Components/DogCard";
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  let performApiCall = async () => {
    setLoading(true)
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?page=1&limit=10`
    );
    let data = await response.json();
    console.log(data);

    setData((prev) => [...prev, ...data]);
    setLoading(false)
  };
  const handleScrolling = () => {
    let topHeight = document.documentElement.scrollTop;
    let innerHeight = window.innerHeight;
    let scrollHeight = document.documentElement.scrollHeight;

    try {
      if (topHeight + innerHeight >= scrollHeight) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    performApiCall();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);
    return () => window.removeEventListener("scroll", handleScrolling);
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Infinite Scrolling
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((dog) => (
            <DogCard dogData={dog} key={dog.id} />
          ))}
        </div>
        {loading && (
          <p className="text-center text-lg font-semibold mt-4">
            Loading more...
          </p>
        )}
      </div>
    </>
  );
}

export default App;
