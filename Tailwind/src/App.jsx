import React from "react";
import Navbar from "./components/Navbar";
import WorkcationCard from "./components/Workcationcard";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      <div className="flex items-center justify-center pt-10">
      <WorkcationCard />
      </div>
    </div>
  );
};

export default App;