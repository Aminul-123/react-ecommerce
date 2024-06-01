import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
function Navbar({cart}) {
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
    setSearchItem("");
  };

  return (
    <div className="h-[3rem] sticky top-0 w-100% bg-[#1abc9c] flex items-center justify-between px-8">
      <div>
        <Link to={"/"} className="text-bold text-[1.3rem] text-white">
          Shop
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Search Products"
          className="w-[20rem] h-[2rem] p-3 "
        />
      </form>

      <Link to={"/cart"} className="mt-4">
        <FaCartShopping className="text-[2rem] cursor-pointer" />
        <div className="relative h-4 w-4 bg-[#e74c1c]  rounded rounded-xl flex justify-center items-center text-[13px] p-2 pb-[0.8] text-white left-6 bottom-9 ">
          {cart.length}
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
