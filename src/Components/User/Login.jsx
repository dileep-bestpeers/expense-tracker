import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../Navigation/iconn.png"

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  document.title = "Auth - Login"

  // const autoLogin = () =>{
  //   const autoData = JSON.parse(localStorage.getItem('MyDetails'))
  //   if(autoData.username && autoData.password && autoData.email) {
  //     history.push("Welcome/" + autoData.username);
  //   }

  // }
  // useEffect(() => {
  //  autoLogin()
  // }, [])



  const handleLogin = () => {
    if (email && password) {
      let localStorageData = localStorage.getItem("AuthUsers");
      let userData = JSON.parse(localStorageData);
      if (userData) {
        const result = userData.filter(
          (user) => user.email === email && user.password === password
        );
        if (result.length) {
          toast("welcome ! to your home page");
          const userDetails = JSON.stringify(result);
          localStorage.setItem("MyDetails", userDetails);
          history.push("Welcome/" + result[0].username);
        } else {
          toast("Please ! enter valid credentials");
        }
      }
      else{
        toast("Please ! enter valid credentials");
      }
    } else {
      toast("Please ! enter some credentials");
    }
  };
  return (
    <div className="outer-form text-center ">
      <div className="img-box-login">
        <img src={logo} alt="logo" />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="heading text-center">
        <h4 className="fw-bold text-uppercase my-3">Wecome back</h4>
      </div>
      <div className=" inner-form">
        <div className="formField my-2">
          <TextField
            type="email"
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formField my-2">
          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="formField mx-auto">
          <Button variant="contained" color="success" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
