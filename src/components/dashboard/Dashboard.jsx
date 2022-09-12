import React, {useState} from "react";
import Sidebar from "./sidebar/Sidebar";

import JobsPage from "./jobspage/JobsPage";
import InternshipPage from "./internshippage/internshipPage";
import DashHome from "./dashhome/DashHome";

const Dashboard = () => {

  const [option, setOption] = useState("Jobs")

  return (
    <div>
      <div className="w-full min-h-[90vh] flex flex-row">
        <Sidebar option={option} setOption={setOption} />
        
        <div className="w-[100%]">
          {/* <DashHome /> */}
          {option === "dashboard" && <DashHome setOption={setOption}/>}
          {/* {option === "User Dashboard" && <DashHome buisnessDetails={buisnessDetails} setOption={setOption}/>} */}
          {option === "Jobs" && <JobsPage setOption={setOption}/>}
          {option === "Internships" && <InternshipPage setOption={setOption}/>}
          {/* {option === "Add job" && <Addjob/>} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
