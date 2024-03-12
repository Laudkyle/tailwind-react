import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1000px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 border-r h-full w-[60%] border-r-gray-900 bg-[#000300]">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] p-4 mt-4">React.</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
