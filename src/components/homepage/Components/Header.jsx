import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import "./header.scss"
import {MdOutlineSpaceDashboard, MdLogout} from 'react-icons/md';
import {AiFillCaretDown, AiOutlineUser} from 'react-icons/ai'

import logo from "../Assets/logo.png"
const drawerWidth = 340;

const Header = () => {


  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY >=90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }

  window.addEventListener('scroll',changeColor)



  const API = process.env.REACT_APP_API_ENDPOINT;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const login = localStorage.getItem("login");
  const cUser = localStorage.getItem("cUser");
  const admin = localStorage.getItem("admin");
  const token = localStorage.getItem("token");
  const btoken = localStorage.getItem("tokenNew");
  const [user, setUser] = useState();
  const [anchor, setAnchor] = React.useState(null);
  const [signanchorEl, setSignanchorEl] = React.useState(null);
  const [signanchor, setSignanchor] = React.useState(null);
  const [active, setActive] = useState(false);
  const [loginActive, setloginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [ open, setOpen] = useState(false);

  const location = useLocation();
  //handleUserSignUp and handleMouseOverSignup are functions for the laptop view two types of signups

  const gotohome =()=>{
    navigate("/");
}
  const toggle = ()=>{
    if(loginActive) setloginActive(false)
    if(signupActive) setSignupActive(false)
    setActive(!active)
 }

  const logout = () => {
    // localStorage.clear();
    // setAnchorEl(null);
    navigate("/auth/logout");
  };

  const getUser = async () => {
    if (token) {
      //console.log(token.split('"')[1]);
      //console.log(token);
      const response = await axios.get(
        `${API}/api/v1/user/loggedInUserDetails`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //console.log(response.data);
      setUser(response.data);
    }
    if (btoken) {
      const response = await axios.get(
        "https://cryptonaukribackend.herokuapp.com/api/v1/business/loggedInBusinessDetails",
        {
          headers: {
            Authorization: `Bearer ${btoken}`,
          },
        }
      );
      //console.log(response.data);
      setUser(response.data);
    }
    //console.log("bt",btoken)
  };

  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  return(
    <nav className={`w-full top-0 ${color?"bg-gray-300":"bg-gray-200"} shadow-md fixed text-gray-600`}>
            <div className="relative py-3 px-3 sm:px-5 flex flex-row items-center justify-between max-w-7xl m-auto nav_container">
                <div onClick={gotohome} className="cursor-pointer">
                    <img className="h-8 w-35 sm:h-10 sm:w-40"
                       src={logo}
                       alt="brand-image" />
                </div>
                <div>
                    <div className={`nav_dropLinks ${active && location.pathname!="/dashboard"?'show':'hide'} `}>
                        <div className="absolute top-20 left-0 right-0 w-full px-2 rounded-b-md">
                            <ul className="bg-gray-200 flex flex-col items-center text-lg rounded-md transition-all">
                                <li className="p-1 cursor-pointer hover:text-black"><a href="https://community.cryptonaukri.com/" target='_blank' className="hover:text-black">Community</a></li>
                                <li className="p-1 cursor-pointer hover:text-black"><a href="/jobs" className="hover:text-black">Jobs</a></li>
                                <li className="p-1 cursor-pointer hover:text-black"><a href="/internships" className="hover:text-black">Internships</a></li>
                                <li className="p-1 cursor-pointer hover:text-black"><a href="/about-us" className="hover:text-black">About us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav_horizontalLinks" >
                        {location.pathname==="/dashboard" ? <></> : 
                         <ul className="flex gap-4">
                            <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="https://community.cryptonaukri.com/" target='_blank' className="hover:text-black">Community</a></li>
                            <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/jobs" className="hover:text-black">Jobs</a></li>
                            <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/internships" className="hover:text-black">Internships</a></li>
                            <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/about-us" className="hover:text-black">About us</a></li>
                         </ul>
                        }
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    {
                        // need to access from cookies when cookies applied over whole site
                        (login || cUser==="DEVELOPER") ?
                        <div className="flex relative items-center text-gray-600 gap-2">
                              <div  className='cursor-pointer hover:text-black'>
                                <div onClick={()=> {setOpen(!open)}} className="flex items-center relative">
                                  <CgProfile size={30}/>
                                  <AiFillCaretDown size={13}  /> 
                                </div> 
                              </div> 

                              {/* Dropdown Content */}
                              
                              { open &&
                                <div className="bg-white absolute right-4 shadow-lg top-8 w-[153px] rounded-lg py-1">
                                  <div onClick={() => {navigate("/dashboard"); setOpen(!open)} } className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"><MdOutlineSpaceDashboard className="h-6 mr-2" /> Dashboard</div>
                                  <div onClick={() => {navigate("/profile"); setOpen(!open)} } className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"><AiOutlineUser className="h-6 mr-2" /> Profile</div>
                                  <div onClick={()=>logout()} className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"><MdLogout className="h-6 mr-2" /> Sign out</div>
                                </div>
                              }
                            

                            {/* <div onClick={()=>logout()} className="cursor-pointer hover:text-black">Sign out</div> */}
                        </div>
                        :
                        <div className="flex items-center gap-3">
                            <a href="/auth/devlogin"><li className="mt-2 flex gap-2 items-center hover:text-black cursor-pointer"><span>Login</span></li></a>
                            <a href="/auth/devsignup"><li className="mt-2 flex gap-2 items-center hover:text-black cursor-pointer"><span>Sign up</span></li></a>
                        </div>
                    }
                    {location.pathname==="/dashboard" ? <></> :
                      <div onClick={toggle} className="hamburger w-7 ml-2 md:hidden cursor-pointer">
                        <div className="w-full h-0.5 bg-gray-800 line rounded-md"></div>
                        <div className="w-full h-0.5 bg-gray-800 my-1.5 rounded-md"></div>
                        <div className="w-full h-0.5 bg-gray-800 rounded-md"></div>
                     </div>
                    }
                </div>
            </div>
        </nav>
  )
};
export default Header;