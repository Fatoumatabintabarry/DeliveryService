import React from 'react'
import { Link } from 'react-router-dom'
import { logo, logoBlack } from '../assets'
/* <Header/> component takes four props:

heading  displays the top;
some additional text as paragraph;
linkName display which page it will redirect the user to; and,
its corresponding path as linkUrl.*/

export default function AuthHeader(
{
    heading,
    paragraph,
    linkName,
    linkUrl="#"

})


{
  return (
    <div className="mb-10">
        <div className="flex justify-center">
              
        <a href="/">
            <img
            alt="Company Logo"
            className=""
            src={logoBlack }
            />
        </a>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} 
            <Link to={linkUrl}>
                {linkName}
            </Link>
            </p>

        </div>
  )
}

