import React from "react";
import {BsBriefcase} from 'react-icons/bs';
import {MdOutlineSpaceDashboard, MdLogout} from 'react-icons/md';
import {AiOutlineUser} from 'react-icons/ai';

import { useNavigate } from "react-router-dom";

const Sidebar = ({ option, setOption }) => {

  const navigate = useNavigate();

  const logout = () => {
    // localStorage.clear();
    // setAnchorEl(null);
    navigate("/auth/logout");
  };

  return (
    <div className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[90px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">


        <div
          onClick={() => {setOption("User Dashboard")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "User Dashboard" && "border-gray-900"
          }`}
        >
          <span>
             <MdOutlineSpaceDashboard className="nav-icon" /> 
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "User Dashboard" && "text-black font-semibold"
            }`}
          >
            Dashboard
          </h1>
        </div>
        


        <div
          onClick={() => {setOption("Jobs")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "Jobs" && "border-gray-900"
          }`}
        >
          <span>
            <BsBriefcase className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Jobs" && "text-black font-semibold"
            }`}
          >
            Jobs
          </h1>
        </div>



        <div
          onClick={() => {setOption("Internships")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "Internships" && "border-gray-900"
          }`}
        >
          <span className={`${option === "Internships"? "text-black font-semibold" : "text-gray-600"}`} >
            <BsBriefcase className="nav-icon" />
          </span>
          <h1
            className={` group-hover:text-black xl:flex hidden ${
              option === "Internships"? "text-black font-semibold" : "text-gray-600" 
            }`}
          >
            Internships
          </h1>
        </div>



        {/* <div
          onClick={() => {setOption("Add job")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
          option === "Add job" && "border-gray-900"
          }`}
        >
          <span>
            <AiOutlinePlusCircle className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Add job" && "text-black"
            }`}
          >
            Add job
          </h1>
        </div> */}



        <div className="w-full border-t border-gray-200" />

        {/* Only Logout as of now */}

        <div
          onClick={() => {setOption("Profile")}}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
            option === "Profile" && "border-gray-900"
            }`}
        >
          <span className={`${option === "Profile"? "text-black font-semibold" : "text-gray-600"}`}>
            <AiOutlineUser className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Profile" && "text-black font-semibold"
            }`}
          >
            Profile
          </h1>
        </div>


        <div
          onClick={logout}
          className={`w-full flex items-center justify-start space-x-8 px-4 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}
        >
          <span>
            <MdLogout className="nav-icon" />
          </span>
          <h1
            className={`text-gray-600  group-hover:text-black xl:flex hidden ${
              option === "Posted Internships" && "text-black"
            }`}
          >
            Sign out
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;