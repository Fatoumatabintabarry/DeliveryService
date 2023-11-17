import React, { useState } from "react";
import axios from "axios";
import AuthHeader from "../components/authHeader";
import { signupFields } from "../constants/formFields";
import "../index.css";

const SignupSender = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "Sender", // Assuming you handle roles in your backend
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        formData
      );
      console.log(response.data);
      // Add any post-submit logic here (like redirection)
    } catch (error) {
      console.error(
        "Error during signup:",
        error.response ? error.response.data : error
      );
      // Display error message to the user
    }
  };
  return (
    //just added header component first before writing the form
    <div className="min-h-full h-screen  justify-center py-12 px-4 sm:px-6 lg:px-8">
      <AuthHeader
        heading="Get started! "
        paragraph="Already have an account ?"
        linkName=" login "
        linkUrl="/login"
      />
      <div className=" lg:w-1/2 justify-center items-center bg-white form-container ">
        <div className="w-full px-8 md:px-32 lg:px-24  ">
          <form className=" rounded-md shadow-2xl p-10  ">
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
              {signupFields.map((field) => (
                <div
                  key={field.id}
                  className="block text-gray-700 text-sm font-bold "
                >
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
                    value={formData[field.name]}
                  />
                </div>
              ))}
              <div>
                <button
                  type="submit"
                  className="bg-purple-500 flex w-full justify-center rounded-md 
                 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupSender;
