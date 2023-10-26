
import React from 'react'
import AuthHeader from '../components/authHeader';
import { loginFields } from '../constants/formFields';
import "../index.css"

import styles from '../style'
import '../index.css'
import {Navbar, Hero, Testimonial, Footer} from '../components/index';
import {boite, google, instagram } from '../assets';

const login = () => {
  return (
   //just added header component first before writing the form 
      <div className='min-h-full h-screen  justify-center py-12 px-4 sm:px-6 lg:px-8'>
        
        <AuthHeader
        heading="Login to your account "
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
        />
    <div className=' lg:w-1/2 justify-center items-center bg-white form-container'>
    <div className='w-full px-8 md:px-32 lg:px-24 '>
    <form className=' rounded-md shadow-2xl p-10 '>
    <div className="justify-center">
        {loginFields.map(field =>(
        
            <div key={field.id} className="block text-gray-700 text-sm font-bold mb-">
               <label> {field.placeholder}</label>     
                <input 
                className='rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
                id={field.id}
                type={field.type} 
                name={field.name} 
                placeholder={field.placeholder}
                 />

            </div>

        ))}
        <br />
        <div>
            <button type="submit" className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
            </button>
        </div>


        </div>
    </form>
    </div>
    </div>
    </div>        

  );
}

export default login