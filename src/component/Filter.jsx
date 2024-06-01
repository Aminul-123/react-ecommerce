import React from "react";
import { items } from "./Data";
import { useLocation } from "react-router-dom";

function Filter({ setData }) {

  const location = useLocation()

  const filterByCategory = (category) => {
    const elem = items.filter((singleElem) => singleElem.category == category);
    setData(elem);
  };
  const filterByPrice = (price) => {
    const item = items.filter((singleitem) => singleitem.price >= price);
    setData(item);
  };
  return (
    <>
   
    {
      location.pathname =='/' && (
        
    <div className=" h-[3rem] sticky top-[3rem]  w-100% bg-[#9b59b6] flex items-center justify-between px-8  ">
    
    <div className="font-bold text-white">Filter by</div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => setData(items)}
    >
      No Filter
    </div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => filterByCategory("mobiles")}
    >
      Mobiles
    </div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => filterByCategory("laptops")}
    >
      Laptops
    </div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => filterByCategory("tablets")}
    >
      Tablets
    </div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => filterByPrice("29999")}
    >
      {">"}=29999
    </div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => filterByPrice("49999")}
    >
      {" "}
      {">="}49999{" "}
    </div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => filterByPrice("69999")}
    >
      {" "}
      {">="}69999{" "}
    </div>
    <div
      className="font-bold text-white cursor-pointer"
      onClick={() => filterByPrice("89999")}
    >
      {" "}
      {">="}89999{" "}
    </div>
  </div>
      )
    }
   </>
  );
}

export default Filter;
