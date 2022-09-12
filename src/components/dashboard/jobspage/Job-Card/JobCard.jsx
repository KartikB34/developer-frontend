import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GrLocation} from "react-icons/gr"

const JobCard = (props) => {

  const login = localStorage.getItem("login")
  const navigate = useNavigate();

  const handleApply = () => {
      navigate(`/jobapplication?id=${props.srId}&type=${props.type}`)
  }

  return (
    // min-h-min
    <div className="bg-white w-full flex flex-col justify-between shadow-md py-3 px-4 border border-gray-500 rounded-lg">
        
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
            <div className='flex flex-col'>
                <div className="mt-1 text-gray-500">{props.cmp}</div>
                <div className="text-lg text-black sm:text-xl mb-2 font-semibold">{props.position}{" ("}{props.exp}{" "}exp{")"}</div>
                <div className='text-black flex mb-2'>
                    <div className='flex items-center'><GrLocation className='text-[#003979] fill-[#003979] mr-1' /><p className='text-sm mr-2'>{props.loc}</p></div>
                    <div className='flex items-center'><p className='text-sm'> INR{" "}{props.sal}</p></div>
                </div>
            </div>

            <div className='text-white'>
                <button onClick={handleApply} className="px-3 py-2 hover:text-[#003979] border border-[#003979] rounded-md bg-[#003979] hover:bg-white">Details</button>
            </div>

        </div>
    </div>
  )
}

export default JobCard 