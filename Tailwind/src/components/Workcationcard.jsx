import React from "react";

const WorkcationCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-md p-6">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold text-indigo-500 dark:text-indigo-300 ml-2">
          Workcation
        </h1>
      </div>

      <img
        src="/shitty opdracht 12.png" 
        alt="Person on the beach"
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          You can work from anywhere.{" "}
          <span className="text-indigo-500 dark:text-indigo-300">
            Take advantage of it.
          </span>
        </h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Workcation helps you find work-friendly rentals in beautiful locations so you
          can enjoy some nice weather even when you're not on vacation.
        </p>
      </div>

     
      <button className="bg-indigo-500 dark:bg-indigo-600 text-white font-semibold mt-4 py-2 px-4 rounded-lg w-full hover:bg-indigo-600 dark:hover:bg-indigo-700">
        BOOK YOUR ESCAPE
      </button>
    </div>
  );
};

export default WorkcationCard;