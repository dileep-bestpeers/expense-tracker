import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "../Country";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  document.title = "Auth - SignUp"

  const submitData = (e) => {
    var inputDATA = {
      username: username,
      email: email,
      password: password,
      country: country,
      gender: gender,
      address: address,
      phonenumber: phonenumber,
    };
    if (username && email && password && address && gender && country) {
      let localStorageData = localStorage.getItem("AuthUsers");
      if (localStorageData) {
        let prevData = JSON.parse(localStorageData);
        const filteredData = prevData.filter((e) => {
          return e.email === email;
        });
        if (filteredData.length > 0) {
          toast("same email or username alerady present");
        } else {
          prevData.push(inputDATA);
          let data = JSON.stringify(prevData);
          localStorage.setItem("AuthUsers", data);
          toast.success("your account is created successfully");
            history.push("Login")
        }
      } else {
        let data = JSON.stringify([inputDATA]);
        localStorage.setItem("AuthUsers", data);
      }
    } else {
      toast("enter valid details");
    }
  };

  return (
    <div className="outer-form text-center ">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />

      <div className="heading text-center">
        <h5 className="fw-bold  text-uppercase my-3">Create an Account</h5>
      </div>

      <div className=" inner-form">
        <div className="formField my-2">
          <TextField
            variant="filled"
            label="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="formField my-2">
          <TextField
            type="email"
            variant="filled"
            label="Email"
            name="email"
            value={email || ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="formField my-2">
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="filled"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="formField my-2">
          <TextField
            label="Address"
            variant="filled"
            name="address"
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="formField">
          <TextField
            type="tel"
            label="Phone number"
            variant="filled"
            name="phonenumber"
            value={phonenumber}
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />
        </div>

        <div
          className="text-center mx-auto"
          style={{ textAlign: "center", width: 240 }}
        >
          <Autocomplete
            style={{ textAlign: "center" }}
            sx={{ width: 240, mt: 2 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) + {option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                variant="standard"
                name="country"
                onBlur={(e) => {
                  setCountry(e.target.value);
                }}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </div>

        <div className="formField ">
          <FormControl
            component="fieldset"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="radio-buttons-group">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="formField my-2"></div>
        <Button variant="contained" color="primary" onClick={submitData}>
          signup
        </Button>
      </div>
    </div>
  );
}
