/*This file will hold all the inputs fields 
RELATED CONSTANTS LIKE NAME , VALUE */
import React from "react";

const loginFields = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    placeholder: "Email address",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "password",
  },
];

const signupFields = [
  {
    id: "first_name",
    name: "first_name",
    type: "text", // Change type to 'text'
    placeholder: "First Name",
  },
  {
    id: "last_name",
    name: "last_name",
    type: "text", // Change type to 'text'
    placeholder: "Last Name",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Email address",
  },
  {
    id: "password",
    name: "password", // Remove leading space
    type: "password", // Remove leading space
    placeholder: "Password",
  },
];

export { loginFields, signupFields };
