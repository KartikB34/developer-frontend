import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Google = ({ setCookie }) => {

  const navigate = useNavigate();

  var url_string = window.location.href;
  var url = new URL(url_string);
  var redirectType = url.searchParams.get("redirecttype");
  var redirectid = url.searchParams.get("redirectid");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

    // const API = process.env.REACT_APP_API_ENDPOINT;
    const API = "https://cryptonaukribackendtest.herokuapp.com";
    const [searchParams] = useSearchParams();
    const sendBackend = async (code) => {
        const response = await Axios.get(`${API}/api/v1/user/googleUserInfo`, {
           params : {code}
          });

          const data = response.data;

        if (data.userLoggedIn) {
          // console.log(data);
          // console.log(response.headers.authorization);
          // setLoginError(data.message);
          setLoading(false);
          const timestamp = new Date().getTime();
          const expire = timestamp + 60 * 60 * 24 * 1000 * 2;
          const expireDate = new Date(expire);
          // console.log(expireDate);
          //document.cookie = `token=${response.headers.authorization}; expires=${expireDate}; path=/; domain=.cryptonaukri.com`;
          try {
            setCookie("token", response.headers.authorization, {
              expires: expireDate,
              path: "/",
              domain: ".cryptonaukri.com",
            });
          } catch (error) {
            alert(";p");
            console.log(error);
          }

          // below codes to be removed once cookies is applied accross the site
          localStorage.setItem("token", response.headers.authorization);
          localStorage.setItem("cUser", "DEVELOPER");
          localStorage.setItem("login", true);

          if (redirectType === "internship" || redirectType === "job") {
            navigate(`/jobapplication?id=${redirectid}&type=${redirectType}`);
            return;
          }
          if (redirectType === "community") {
            window.location.href = `https://community.cryptonaukri.com${redirectid}`;
            return;
          }

          // navigate("/jobs");
          navigate("/dashboard");
        }

    }
    useEffect(()=>{
        let code = searchParams.get('code');
        console.log(code)
        sendBackend(code )
    },[])
   

  return (
    <div>
      Google
    </div>
  )
}

export default Google
