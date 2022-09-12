import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const Jobcard = ({setOption}) => {

  const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // const [datarr, setDataArr] = React.useState([]);


    useEffect(async ()=>{
        setLoading(true);
        const response = await Axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/jobs/findJob`)
        .then((res)=>{
            //console.log(res);
            const resp = res.data;
            //console.log(resp.data);
            setDataArr(resp.data);
            //console.log(dataArr);
            setLoading(false);
            // setLoading(true);
            
        })
        .catch((err)=>{
            setLoading(false);
        });
    } ,[]);

  return (
    <div>
      <div className="p-4 my-6 shadow-xl bg-gray-100">
       <h1 className="text-xl mb-2">Latest Jobs</h1>
 
      <div className="overflow-auto w-[660px] rounded-lg shadow hidden md:block">
      <table className="w-full">
        
        <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Job title</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Posted on</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">CTC</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Details</th>
        </tr>
        </thead>

        {dataArr.reverse().slice(0,3).map((job) => (

        <tbody className="divide-y divide-gray-100 ">
        <tr className="bg-white">
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            {job.jobTitle}
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{job.postedOn.split("T")[0]}</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{job.ctc}</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap bg-white">
          <span
            className={`text-xs font-medium uppercase tracking-wider text-gray-800 rounded-lg bg-opacity-50`}>
            <div className='text-white'>
                <button onClick={()=> {navigate(`/jobapplication?id=${job._id}&type=job`)}} className="px-3 py-2 hover:text-[#003979] border border-[#003979] rounded-md bg-[#003979] hover:bg-white">Details</button>
            </div>
          </span>
          </td>
        </tr>
        </tbody>

        ))}
      </table>
      {/* {dataArr.jobsAdded.length===0?<div className='text-center my-4'>You have not yet posted any Job</div>:<></>} */}
    </div>
 
    <div className="flex flex-col w-full md:hidden">

    {dataArr.reverse().slice(0,3).map((job) => (
      <div className="bg-white space-y-3 p-4 my-2 rounded-lg shadow">
        <div className="text-sm text-gray-700">
          {job.jobTitle}
        </div>
        <div className="flex items-center space-x-2 text-sm">
        <div className="text-sm font-medium text-black mr-8">
          CTC: {job.ctc}
        </div>
          <div className="text-gray-500 ">Posted on: {job.postedOn.split("T")[0]}</div>
        </div>
          <div>
            <span
              className={`p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50`}>
              <div className='text-white'>
                <button onClick={()=> {navigate(`/jobapplication?id=${job._id}&type=job`)}} className="px-3 py-2 hover:text-[#003979] border border-[#003979] rounded-md bg-[#003979] hover:bg-white">Details</button>
              </div>
            </span>
          </div>
      </div>
    ))}

    {/* {dataArr.internshipsAdded.length===0?<div className='text-center my-4'>You have not yet posted any jobs</div>:<></>} */}
      
    </div>
    <div className='w-full my-2 flex items-end relative'>
      <div onClick={() => {setOption("Jobs")}} className='text-red-400 right-5 top-1 absolute hover:cursor-pointer'>see all..</div>
    </div>
   </div>
    </div>
  )
}

export default Jobcard