import { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
const NightMode = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="absolute lg:right-3 md:right-4  right-16 top-3 p-2 mr-2">
      <button
        className=" bg-transparent text-xl visible dark:text-white text-gray-700 rounded-md focus:outline-none"
        onClick={toggleNightMode}
      >
        {isNightMode ? <BsMoonStars /> : <BsSun />}
      </button>
    </div>
  );
};

export default NightMode;
