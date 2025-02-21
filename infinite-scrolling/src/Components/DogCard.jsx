import React from "react";

const DogCard = ({ dogData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={dogData.url} alt="Dog" className="w-full h-60 object-cover" />
      <div className="p-4 text-center">
        <p className="text-lg font-semibold text-gray-700">🐾 Cute Dog 🐾</p>
      </div>
    </div>
  );
};

export default DogCard;
