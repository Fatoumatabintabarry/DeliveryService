import React from 'react'
import { Link } from 'react-router-dom'
import {  simple } from '../assets'


export default function ChoicePageHeader(
    {
        heading,
        paragraph,
        linkName,
        linkUrl="#"
    
    })
    
    
    {
      return (
        <div className="">
            {/*
                <div className="flex justify-center">
                <a href="/">
                    <img
                    alt="Company Logo"
                    className=""
                    src={simple }
                    />
                </a>
                </div>
             */}
                <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {heading}
                </h1>
                
                <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                {paragraph} 
                <Link to={linkUrl}>
                    {linkName}
                </Link>
                </p>
    
            </div>
      )
    }
    
    