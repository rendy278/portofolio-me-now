import { useState } from "react";
import { motion } from "framer-motion";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex mx-auto gap-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-blue-500 text-white transition-all duration-500 font-bold rounded-xl"
                : "text-gray-500 dark:text-slate-200 hover:text-gray-700"
            } py-4 px-6 block border-b-2 border-transparent font-medium`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeTab === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
