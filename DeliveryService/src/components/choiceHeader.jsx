import React from 'react'
import { Link } from 'react-router-dom'
import { logo, logoBlack } from '../assets'


export default function choiceHeader(
    {
        heading,
        paragraph,
        linkName,
        linkUrl="#"
    
    })
    
    
    {
      return (
        <div className="mb-10">
                
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {heading}
                </h1>
                <div className="flex justify-center">
                <a href="/">
                    <img
                    alt="Company Logo"
                    className=""
                    src={logoBlack}
                    />
                </a>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                {paragraph} 
                <Link to={linkUrl}>
                    {linkName}
                </Link>
                </p>
    
            </div>
      )
    }
    
    