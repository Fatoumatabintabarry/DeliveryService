import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../components/authHeader";
import { loginFields } from "../constants/formFields";
import "../index.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    profile: "Sender", // Default profile type
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth", {
        email: loginData.email,
        password: loginData.password,
      });
      console.log(response.data);
      if (response.status === 200) {
        // Redirect based on the user's role from the response
        const userRole = response.data.role;
        if (userRole === "Driver") {
          navigate("/driver-portal");
        } else {
          navigate("/deliverysolutions");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Invalid email or password.");
      } else {
        console.error("Error during login:", error);
        setErrorMessage("An error occurred during login.");
      }
    }
  };
  return (
    //just added header component first before writing the form
    <div className=" min-h-full h-screen justify-center py-12 px-4 sm:px-6 lg:px-8">
      <AuthHeader
        heading="Login to your account "
        paragraph="Don't have an account yet?"
        linkName=" Signup"
        linkUrl="/signup"
      />
      <div className=" lg:w-1/2 justify-center items-center  form-container">
        <div className="w-full px-8 md:px-32 lg:px-24 ">
          <form
            onSubmit={handleSubmit}
            className=" rounded-lg  shadow-2xl p-10 "
            method="POST"
          >
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <div class="form-group">
              <label for="profile">I am a: </label>
              <select name="profile" id="profile">
                <option value="Sender">Sender</option>
                <option value="Driver">Driver</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <br />
            <div className="justify-center">
              {loginFields.map((field) => (
                <div
                  key={field.id}
                  className="block text-gray-700 text-sm font-bold "
                >
                  <label
                    className="relative text-sm text-gray-500 dark:text-gray-400 
                    duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]
                    left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75 peer-focus:-translate-y-4"
                  ></label>

                  <input
                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 
                      text-base transition duration-500 ease-in-out transform border-transparent 
                      rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white
                      dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 
                      ring-offset-current ring-offset-2 ring-gray-400"
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    value={loginData[field.name]}
                  />
                </div>
              ))}
              <br />
              <div>
                <button
                  type="submit"
                  className="bg-[#5F54E3] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
