import React, { useEffect, useState } from "react";
import Map from "./Map";
import List from "./List";
import { fetchCategories } from "../API/categoryApi";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async() => {
    try {
      const response = await fetchCategories();
      
      const categoryNames = ["All", ...response.categories.map(cat => cat.name)];
      setCategories(categoryNames);
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  const [activeTab, setActiveTab] = useState("All");
  const [bottomText, setBottomText] = useState("Map");

  const tabIcons = {
 ///iconss
  };
  
  return (
    <>
     <div className="flex flex-1 gap-1.5 overflow-x-auto bg-white py-4 px-3">
        {categories.map((tab) => (
          <span key={tab}>
            <button
              type="button"
              className={`flex items-center justify-center w-full font-sans text-gray-800 px-4 py-2 min-h-[36px] text-sm font-medium rounded-full mt-0 mb-0 border-[1px] ${
                activeTab === tab
                  ? "bg-[rgb(220,38,38)] border-red-600 text-white"
                  : "border-[#DCE2EA]"
              }`}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "Map") {
                  console.log("Map tab clicked");
                } else if (tab === "List") {
                  console.log("List tab clicked");
                }
              }}
            >
              {tabIcons[tab] && tabIcons[tab]}
              <span className="text-sm">{tab}</span>
            </button>
          </span>
        ))}
        
        <div className="flex ml-auto gap-4 rounded-full border-[1px]">
          <button
            type="button"
            className={`flex items-center justify-center font-sans px-4 py-2 min-h-[36px] text-sm font-medium rounded-full ${
              bottomText === "Map"
                ? "bg-zinc-900 text-white"
                : "border-[#DCE2EA]"
            }`}
            onClick={() => setBottomText("Map")}
          >
            Map
          </button>
          <button
            type="button"
            className={`flex items-center justify-center font-sans px-4 py-2 min-h-[36px] text-sm font-medium rounded-full ${
              bottomText === "List"
                ? "bg-zinc-900 text-white"
                : "border-[#DCE2EA]"
            }`}
            onClick={() => setBottomText("List")}
          >
            List
          </button>
        </div>
      </div>      
      <div>
        {bottomText === "Map" && 
        <Map/>
        
        }
        {bottomText === "List" && 
<List/>}
      </div>
    </>
  );
};

export default Home;