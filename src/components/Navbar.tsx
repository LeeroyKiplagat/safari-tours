import { Bars3BottomRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/LOGO.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="">
      <div className="flex justify-between py-4 ">
        <div className=" ">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="" className="h-12 w-12" />
            <p className="hidden md:block font-bold text-2xl text-yellow-700">
              CRUISE NATION SAFARIS
            </p>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-4 font-bold mt-4 uppercase">
            <li className=" cursor-pointer text-yellow-600">Home</li>
            <li className="cursor-pointer">Tours</li>
            <li className="cursor-pointer">Destinations</li>
            <li className="cursor-pointer">Animals</li>
            <li className="cursor-pointer">Contact-Us</li>
          </ul>
        </div>
        <div className="md:hidden mt-4">
          <button
            className=""
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Bars3BottomRightIcon className="size-8" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mx-4 md:hidden ">
          <ul className="flex flex-col  space-y-2 font-bold mt-4">
            <li className=" border-2 rounded-md max-w-screen bg-yellow-700 text-white flex justify-center cursor-pointer ">
              Home
            </li>
            <li className=" border-2 rounded-md max-w-screen bg-yellow-700 text-white flex justify-center cursor-pointer  ">
              Tours
            </li>
            <li className=" border-2 rounded-md max-w-screen bg-yellow-700 text-white flex justify-center cursor-pointer  ">
              Destinations
            </li>
            <li className=" border-2 rounded-md max-w-screen bg-yellow-700 text-white flex justify-center cursor-pointer  ">
              Animals
            </li>
            <li className=" border-2 rounded-md max-w-screen bg-yellow-700 text-white flex justify-center cursor-pointer  ">
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
